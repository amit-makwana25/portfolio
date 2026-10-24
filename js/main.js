/* =========================================================
   SITE CONFIG — edit these values, nothing else is required
   ========================================================= */
const CONFIG = {
  // Create a form at https://formspree.io and paste its endpoint here.
  // Example: "https://formspree.io/f/abcdwxyz"
  formspreeEndpoint: "https://formspree.io/f/mdeekagq",

  // Add only verified details. Empty values are not shown on the page.
  email: "amitmakwana1225@gmail.com",
  linkedin: "",
  github: "",

  // Set to true after you add assets/documents/resume.pdf
  resumeAvailable: true
};

/* =========================================================
   PROJECTS — add an object here and it renders automatically.
   visual: "mcp" | "erp" | "generic"
   ========================================================= */
const projects = [
  {
    id: "odoo-mcp-server",
    number: "01",
    title: "Advanced Odoo MCP Server",
    category: "AI Integration · MCP · ERP Automation",
    description: "An MCP-based integration designed to connect Odoo business operations with AI assistants, enabling structured tool calling and natural-language interaction with ERP workflows.",
    // Capabilities as described for the product. Confirm which ones are your own work.
    points: [
      "Connects compatible AI assistants with Odoo through MCP",
      "Structured interaction with ERP records",
      "Natural-language workflows, such as creating sales orders",
      "Access-control and security features",
      "Request monitoring and operational visibility"
    ],
    technologies: ["Odoo", "MCP", "Python"],
    link: "",            // add a verified URL to show a link
    linkLabel: "View project",
    visual: "mcp",
    featured: true
  },
  {
    id: "internal-erp",
    number: "02",
    title: "Internal Company-Wide ERP System",
    category: "Odoo · Enterprise Software · Business Automation",
    description: "Designed and developed an Odoo-based internal ERP system used in daily company operations across multiple departments.",
    points: [
      "HR and employee management",
      "Timesheet management",
      "Operational workflows",
      "Custom business processes and automation"
    ],
    technologies: ["Odoo", "Python", "PostgreSQL"],
    link: "",
    linkLabel: "View project",
    visual: "erp",
    featured: true
  }
];

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const isSafeUrl = (u) => /^(https?:\/\/|mailto:)/i.test(u);

/* ---------- project visuals (abstract, no fake screenshots) ---------- */
const visuals = {
  mcp: `<svg viewBox="0 0 440 340" role="img" aria-label="AI assistant connects to Odoo through an MCP server">
    <path class="v-line-accent" d="M110 170 H165"/><path class="v-line-accent" d="M275 170 H330"/>
    <rect class="v-node" x="20" y="125" width="90" height="90" rx="16"/>
    <text class="v-text" x="65" y="165">AI</text><text class="v-sub" x="65" y="183">assistant</text>
    <rect class="v-accent" x="165" y="110" width="110" height="120" rx="18"/>
    <text class="v-text" x="220" y="165" style="fill:#fff">MCP</text><text class="v-sub" x="220" y="184" style="fill:#fff">server</text>
    <rect class="v-node" x="330" y="125" width="90" height="90" rx="16"/>
    <text class="v-text" x="375" y="175">Odoo</text>
    <text class="v-sub" x="137" y="150">tool calls</text><text class="v-sub" x="302" y="150">records</text>
    <path class="v-line" d="M220 230 V285"/>
    <rect class="v-node" x="165" y="285" width="110" height="36" rx="10"/>
    <text class="v-sub" x="220" y="308">access control</text>
  </svg>`,
  erp: `<svg viewBox="0 0 440 340" role="img" aria-label="Connected business modules around an Odoo core">
    <g class="v-line"><path d="M220 170 L90 70"/><path d="M220 170 L350 70"/><path d="M220 170 L90 270"/><path d="M220 170 L350 270"/></g>
    <circle class="v-accent" cx="220" cy="170" r="48"/>
    <text class="v-text" x="220" y="175" style="fill:#fff">Odoo</text>
    <g><rect class="v-node" x="35" y="45" width="110" height="50" rx="12"/><text class="v-text" x="90" y="75">HR</text></g>
    <g><rect class="v-node" x="295" y="45" width="110" height="50" rx="12"/><text class="v-text" x="350" y="75">Timesheets</text></g>
    <g><rect class="v-node" x="35" y="245" width="110" height="50" rx="12"/><text class="v-text" x="90" y="275">Workflows</text></g>
    <g><rect class="v-node" x="295" y="245" width="110" height="50" rx="12"/><text class="v-text" x="350" y="275">Processes</text></g>
  </svg>`,
  generic: `<svg viewBox="0 0 440 340" role="img" aria-label="Abstract project illustration">
    <rect class="v-node" x="60" y="60" width="150" height="100" rx="16"/><rect class="v-accent" x="230" y="120" width="150" height="100" rx="16"/>
    <rect class="v-node" x="110" y="190" width="150" height="90" rx="16"/>
  </svg>`
};

function renderProjects() {
  const root = document.getElementById("projects-list");
  if (!root) return;
  root.innerHTML = projects.filter((p) => p.featured !== false).map((p) => `
    <article class="project" id="${esc(p.id)}">
      <div class="project-text">
        <span class="project-number" aria-hidden="true">${esc(p.number)}</span>
        <p class="project-category">${esc(p.category)}</p>
        <h3>${esc(p.title)}</h3>
        <p class="project-desc">${esc(p.description)}</p>
        ${p.points && p.points.length ? `<ul class="project-points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <ul class="tags" aria-label="Technologies">${p.technologies.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        ${p.link && isSafeUrl(p.link) ? `<a class="link-quiet project-link" href="${esc(p.link)}" target="_blank" rel="noopener noreferrer">${esc(p.linkLabel || "View project")}</a>` : ""}
      </div>
      <div class="project-visual">${visuals[p.visual] || visuals.generic}</div>
    </article>`).join("");
}

/* ---------- header / nav ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  const close = () => { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); toggle.setAttribute("aria-label", "Open menu"); };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  const links = [...document.querySelectorAll("[data-nav]")];
  const map = new Map(links.map((a) => [a.getAttribute("href").slice(1), a]));
  const setActive = (id) => links.forEach((a) => { const on = a === map.get(id); a.classList.toggle("active", on); on ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"); });
  const sections = [...map.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: "-40% 0px -55% 0px" });
    sections.forEach((s) => io.observe(s));
  }
  setActive("home");
}

/* ---------- portrait + resume + contact links ---------- */
function initMedia() {
  const img = document.querySelector("#portrait img");
  const ph = document.querySelector(".portrait-placeholder");
  const showPlaceholder = () => { img.hidden = true; ph.hidden = false; };
  if (img.complete && img.naturalWidth === 0) showPlaceholder();
  img.addEventListener("error", showPlaceholder);

  const resumeLink = document.getElementById("resume-link");
  if (resumeLink && CONFIG.resumeAvailable) resumeLink.hidden = false;

  const list = document.getElementById("contact-links");
  const items = [];
  if (CONFIG.email) items.push(["Email", `mailto:${CONFIG.email}`, CONFIG.email]);
  if (CONFIG.linkedin) items.push(["LinkedIn", CONFIG.linkedin, "LinkedIn"]);
  if (CONFIG.github) items.push(["GitHub", CONFIG.github, "GitHub"]);
  list.innerHTML = items.filter((i) => isSafeUrl(i[1])).map((i) => `<li><a href="${esc(i[1])}" ${i[1].startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}>${esc(i[2])}</a></li>`).join("");
  if (!items.length) list.hidden = true;
  document.getElementById("year").textContent = new Date().getFullYear();
}

/* ---------- contact form ---------- */
function initForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const btn = document.getElementById("form-submit");
  const notice = document.getElementById("form-notice");
  const configured = /^https:\/\/formspree\.io\/f\/\w+/.test(CONFIG.formspreeEndpoint);
  notice.hidden = configured;

  const rules = {
    name: (v) => (v.trim().length < 2 ? "Enter your name." : ""),
    email: (v) => (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) ? "" : "Enter a valid email address."),
    subject: (v) => (v.trim().length < 3 ? "Enter a subject." : ""),
    message: (v) => (v.trim().length < 10 ? "Write at least 10 characters." : "")
  };
  const setErr = (name, msg) => {
    const field = form.elements[name].closest(".field");
    field.classList.toggle("invalid", !!msg);
    field.querySelector(".error").textContent = msg;
    form.elements[name].setAttribute("aria-invalid", msg ? "true" : "false");
  };
  Object.keys(rules).forEach((n) => form.elements[n].addEventListener("blur", () => setErr(n, rules[n](form.elements[n].value))));

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    status.className = "form-status"; status.textContent = "";
    let firstBad = null;
    Object.keys(rules).forEach((n) => {
      const msg = rules[n](form.elements[n].value);
      setErr(n, msg);
      if (msg && !firstBad) firstBad = form.elements[n];
    });
    if (firstBad) { firstBad.focus(); return; }

    if (form.elements._gotcha.value) { // bot: pretend success
      status.className = "form-status ok"; status.textContent = "Message sent. Thank you."; form.reset(); return;
    }
    if (!configured) {
      status.className = "form-status fail";
      status.textContent = "This form is not connected yet, so the message was not sent.";
      return;
    }

    btn.disabled = true; btn.textContent = "Sending…";
    try {
      const res = await fetch(CONFIG.formspreeEndpoint, {
        method: "POST", body: new FormData(form), headers: { Accept: "application/json" }
      });
      if (res.ok) {
        status.className = "form-status ok"; status.textContent = "Message sent. I'll reply by email."; form.reset();
      } else {
        let msg = "The message could not be sent. Please try again.";
        try { const d = await res.json(); if (d.errors && d.errors.length) msg = d.errors.map((x) => x.message).join(" "); } catch (_) { }
        status.className = "form-status fail"; status.textContent = msg;
      }
    } catch (_) {
      status.className = "form-status fail"; status.textContent = "Network error. Check your connection and try again.";
    } finally {
      btn.disabled = false; btn.textContent = "Send Message";
    }
  });
}

/* ---------- resume preview modal & forced direct download ---------- */
function initResumeFeatures() {
  const modal = document.getElementById("resume-modal");
  const openBtn = document.getElementById("btn-preview-resume");
  const closeBtn = document.getElementById("modal-close-btn");
  const downloadBtns = [
    document.getElementById("btn-download-resume"),
    document.getElementById("btn-modal-download")
  ].filter(Boolean);

  // 1. Forced Direct Download via Blob (prevents browser from opening PDF in new tab)
  const triggerDownload = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("assets/documents/resume.pdf");
      if (!response.ok) throw new Error("Resume file not found");
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      const tempLink = document.createElement("a");
      tempLink.href = blobUrl;
      tempLink.download = "Amit_Makwana_Resume.pdf";
      document.body.appendChild(tempLink);
      tempLink.click();
      document.body.removeChild(tempLink);
      setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
    } catch (err) {
      const fallbackLink = document.createElement("a");
      fallbackLink.href = "assets/documents/resume.pdf";
      fallbackLink.download = "Amit_Makwana_Resume.pdf";
      document.body.appendChild(fallbackLink);
      fallbackLink.click();
      document.body.removeChild(fallbackLink);
    }
  };

  downloadBtns.forEach((btn) => btn.addEventListener("click", triggerDownload));

  // 2. In-Page Preview Modal
  if (!modal || !openBtn) return;

  const openModal = () => {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    const iframe = modal.querySelector(".modal-iframe");
    if (iframe) {
      iframe.src = "assets/documents/resume.pdf#view=FitH&zoom=100";
    }
  };

  const closeModal = () => {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  };

  openBtn.addEventListener("click", openModal);
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  initNav();
  initMedia();
  initForm();
  initResumeFeatures();
});
