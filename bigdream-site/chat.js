/* ===== CHAT ASSISTANT =====
   • Works offline: answers from the prices/packages in data.js.
   • If server.js is running with an API key, it switches to real AI automatically. */
   const CHAT = {
    name: "Big Dream Assistant",
    welcome: "Hi! 👋 I'm the Big Dream assistant. Ask me about our packages, prices or services.",
    chips: ["Packages & prices", "Wedding", "Debut", "Kiddie party", "How do I book?"]
  };
  
  const Chat = {
    ai: false, busy: false, history: [], noted: false,
  
    /* ---------- offline answers ---------- */
    ALIAS: { kasal:["Wedding"], binyag:["Baptismal"], christening:["Baptismal"], "18th":["Debut"], birthday:["Adult Party","Kiddie Party"], bday:["Adult Party","Kiddie Party"], kids:["Kiddie Party"], kid:["Kiddie Party"], proposal:["Wedding Proposal"], reveal:["Gender Reveal"], opening:["Store Grand Opening"], company:["Corporate Event"], food:["Catering Services"], host:["Hosting Services"], emcee:["Hosting Services"], coordinator:["On-the-Day Coordinator"], styling:["Event Styling"], photo:["Photo & Video Coverage","Photobooth"], video:["Photo & Video Coverage"], sound:["Lights & Sounds Rental"], lights:["Lights & Sounds Rental"], venue:["Event Venue Rental"], table:["Tables & Chairs Rental"], chair:["Tables & Chairs Rental"], cocktail:["Cocktail Tables & Wine Glasses"], wine:["Cocktail Tables & Wine Glasses"], perfume:["Perfume Bar"], mobile:["Mobile Bar"], grazing:["Grazing Bar"], coffee:["Coffee Bar"], takoyaki:["Takoyaki Bar"] },
  
    contactActs() {
      return [{ label: "Message on Messenger", href: LINKS.messenger }, ...(LINKS.instagram ? [{ label: "Instagram", href: LINKS.instagram }] : []), { label: "Email us", href: LINKS.email }];
    },
  
    faq(q) {
      const t = " " + q.toLowerCase().replace(/[^a-z0-9&' -]/g, " ") + " ";
      const has = r => r.test(t);
      const num = x => +(x.match(/[\d,]+/)[0].replace(/,/g, ""));
      const cheapest = Math.min(...ALL.map(s => +(s.p.match(/₱([\d,]+)/)?.[1] || "999999").replace(/,/g, "")));
  
      if (has(/ (hi|hello|hey|kumusta|good (morning|afternoon|evening)) /)) return { text: "Hello! 😊 What are you planning? I can share prices, packages and services.", acts: this.chipActs() };
      if (has(/ (thanks|thank you|salamat) /)) return { text: "You're welcome! 💛 If you'd like a custom quote, our team is happy to help.", acts: this.contactActs() };
      if (has(/ (book|reserve|reservation|availab\w*|schedule|date|quote|inquir\w*) /)) return { text: "To book or check a date, message our team with your event type, date, venue and guest count, and they'll confirm availability and a quote.", acts: this.contactActs() };
      if (has(/ (contact|reach|call|email|facebook|instagram|messenger|number|phone|message) /)) return { text: "You can reach us here:", acts: this.contactActs() };
  
      /* service match */
      const found = [];
      const add = n => { const s = ALL.find(x => x.n === n); if (s && !found.includes(s)) found.push(s); };
      Object.keys(this.ALIAS).sort((a, b) => b.length - a.length).forEach(k => { if (t.includes(" " + k + " ") || t.includes(" " + k + "s ")) this.ALIAS[k].forEach(add); });
      ALL.forEach(s => { const k = s.n.toLowerCase(); if (t.includes(k) || t.includes(k.replace(/ (services?|rental|coverage)$/, ""))) add(s.n); });
      if (found.length) {
        const list = found.slice(0, 5);
        return { text: list.map(s => `${s.e} ${s.n}: ${s.p}`).join("\n") + "\nThese are starting rates; your final quote depends on your event.",
          acts: [{ label: `See ${list[0].n} styles`, open: list[0].n }, ...this.contactActs().slice(0, 1)] };
      }
      if (has(/ (package|packages|inclusion|inclusions|include|included) /) ) return { text: "Our event packages start at:\n" + PKGS.map(p => `• ${p.n}: ${p.from}`).join("\n") + "\nTap below to browse each package's inclusion sheets.", acts: [{ label: "View packages", go: "#packages" }, ...this.contactActs().slice(0, 1)] };
      if (has(/ (bars?|drinks?|beverages?) /)) return { text: D.Bars.map(x => `${x[2]} ${x[0]}: ${x[1]}`).join("\n"), acts: [{ label: "See bar styles", open: D.Bars[0][0] }, ...this.contactActs().slice(0, 1)] };
      if (has(/ (price|prices|pricing|cost|how much|magkano|rate|rates|budget|cheap|affordable) /)) return { text: `Our packages start at ${PKGS.reduce((m, p) => num(p.from) < num(m.from) ? p : m).from} and our smaller services start as low as ₱${cheapest.toLocaleString()}. Tell me the event you have in mind and I'll share its price.`, acts: this.chipActs() };
      if (has(/ (where|location|address|located|saan|city) /)) return { text: "I don't have our address here, but our team can share location and venue options. You can also rent an event venue from ₱18,000.", acts: this.contactActs() };
      if (has(/ (pay|payment|downpayment|deposit|gcash|installment) /)) return { text: "Payment terms are confirmed by our team when you book, so please message them for the details.", acts: this.contactActs() };
      return { text: "I'm not sure about that one, but I can help with prices, packages and services, or you can ask our team directly.", acts: [...this.chipActs().slice(0, 2), ...this.contactActs().slice(0, 1)] };
    },
    chipActs() { return CHAT.chips.slice(0, 4).map(c => ({ label: c, ask: c })); },
  
    /* ---------- UI ---------- */
    fmt(s) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\n/g, "<br>"); },
    scroll() { const m = $("#chatM"); m.scrollTop = m.scrollHeight; },
  
    add(role, text, acts) {
      const m = $("#chatM"), d = document.createElement("div");
      d.className = "cm " + role;
      if (role === "you") d.textContent = text; else d.innerHTML = this.fmt(text);
      m.appendChild(d);
      if (acts?.length) {
        const a = document.createElement("div"); a.className = "acts";
        acts.forEach(x => { const b = document.createElement("button"); b.className = "qc"; b.textContent = x.label; b._a = x; a.appendChild(b); });
        m.appendChild(a);
      }
      this.scroll();
    },
  
    act(x) {
      if (x.ask) return this.send(x.ask);
      if (x.href) return window.open(x.href, x.href.startsWith("mailto") ? "_self" : "_blank", "noopener");
      if (innerWidth < 700) this.toggle(false);
      if (x.go) $(x.go).scrollIntoView();
      if (x.open) openModal(x.open);
    },
  
    async send(text) {
      text = text.trim(); if (!text || this.busy) return;
      this.busy = true; $("#chatS").disabled = true; $("#chatI").value = "";
      $$("#chatM .acts").forEach(a => a.remove());
      this.add("you", text);
      this.history.push({ role: "user", content: text });
      const typing = document.createElement("div"); typing.className = "cm bot typing"; typing.innerHTML = "<i></i><i></i><i></i>";
      $("#chatM").appendChild(typing); this.scroll();
  
      let reply = null, acts = null;
      if (this.ai) {
        try {
          const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ messages: this.history.slice(-10) }) });
          const j = await r.json();
          if (!r.ok || !j.reply) throw new Error(j.error || r.status);
          reply = j.reply; acts = /book|quote|message|reserve|availab/i.test(reply) ? this.contactActs().slice(0, 2) : null;
        } catch (e) { this.ai = false; $("#chatSub").textContent = "Quick answers · ask about prices & packages"; }
      } else await new Promise(r => setTimeout(r, 450));
      if (reply === null) { const f = this.faq(text); reply = f.text; acts = f.acts; }
  
      typing.remove();
      this.history.push({ role: "assistant", content: reply });
      this.add("bot", reply, acts);
      this.busy = false; $("#chatS").disabled = false; if (innerWidth > 700) $("#chatI").focus();
    },
  
    toggle(open) {
      const p = $("#chat"), b = $("#chatBtn");
      open = open ?? !p.classList.contains("open");
      p.classList.toggle("open", open); b.classList.toggle("open", open);
      b.setAttribute("aria-expanded", open); $("#chatTip")?.remove();
      if (open && innerWidth > 700) setTimeout(() => $("#chatI").focus(), 250);
    },
  
    init() {
      const p = document.createElement("div");
      p.className = "chat"; p.id = "chat"; p.setAttribute("role", "dialog"); p.setAttribute("aria-label", CHAT.name);
      p.innerHTML = `<div class="chat-h"><div class="chat-av">🎉</div><div><b>${CHAT.name}</b><small id="chatSub">Quick answers · ask about prices &amp; packages</small></div><button class="chat-x" id="chatX" aria-label="Close chat">✕</button></div>
        <div class="chat-m" id="chatM" aria-live="polite"></div>
        <form class="chat-f" id="chatF"><input id="chatI" placeholder="Type your question…" autocomplete="off" maxlength="300" aria-label="Your message"><button id="chatS" aria-label="Send">➤</button></form>`;
      document.body.appendChild(p);
  
      this.add("bot", CHAT.welcome, this.chipActs());
      $("#chatBtn").onclick = () => this.toggle();
      $("#chatX").onclick = () => this.toggle(false);
      $("#chatF").onsubmit = e => { e.preventDefault(); this.send($("#chatI").value); };
      $("#chatM").onclick = e => { const b = e.target.closest(".qc"); if (b) this.act(b._a); };
      addEventListener("keydown", e => { if (e.key === "Escape" && p.classList.contains("open")) this.toggle(false); });
  
      /* small "ask me" teaser */
      setTimeout(() => {
        if (p.classList.contains("open")) return;
        const t = document.createElement("div"); t.className = "chat-tip"; t.id = "chatTip"; t.textContent = "Questions about prices or packages? Ask me! 👋";
        t.onclick = () => this.toggle(true); document.body.appendChild(t);
        setTimeout(() => t.remove(), 9000);
      }, 4000);
  
      /* real AI available? (only when server.js is running with a key) */
      fetch("/api/health").then(r => r.ok ? r.json() : null).then(j => {
        if (j && j.ai) { this.ai = true; $("#chatSub").textContent = "AI assistant · online"; }
      }).catch(() => {});
    }
  };
  function initChat() { Chat.init(); }