# PROMPT-V2.md — THE DEFINITIVE WEBSITE REDESIGN SPECIFICATION

> **VERSION**: 2.0 — Supersedes `prompt.md`
> **LAST UPDATED**: September 2026
> **PURPOSE**: This is the single source of truth for redesigning Yogesh Yadav's personal website. Any AI model reading this file should have everything needed to build the entire website from scratch without asking a single clarifying question.

---

## TABLE OF CONTENTS

1. [Project Overview](#1-project-overview)
2. [Who Is Yogesh Yadav — Complete Identity Profile](#2-who-is-yogesh-yadav--complete-identity-profile)
3. [Critical Corrections — What Is Wrong With The Current Website](#3-critical-corrections--what-is-wrong-with-the-current-website)
4. [Sections To REMOVE Completely](#4-sections-to-remove-completely)
5. [Sections To UPDATE / REDESIGN](#5-sections-to-update--redesign)
6. [Complete Section-By-Section Specification](#6-complete-section-by-section-specification)
7. [Social Links — Correct URLs & Usernames](#7-social-links--correct-urls--usernames)
8. [Design System — Colors, Typography, Layout](#8-design-system--colors-typography-layout)
9. [SEO & Discoverability Strategy](#9-seo--discoverability-strategy)
10. [File Structure & Architecture](#10-file-structure--architecture)
11. [Performance & Accessibility Requirements](#11-performance--accessibility-requirements)
12. [Personality, Tone & Copy Guidelines](#12-personality-tone--copy-guidelines)
13. [Content Do's and Don'ts — Hard Rules](#13-content-dos-and-donts--hard-rules)
14. [Existing Codebase Audit — What Exists Right Now](#14-existing-codebase-audit--what-exists-right-now)
15. [Implementation Checklist](#15-implementation-checklist)
16. [README.md — Audit & Update Specification](#16-readmemd--audit--update-specification)

---

## 1. PROJECT OVERVIEW

### What Is This Website?
This is **NOT** a portfolio website. This is **NOT** a resume. This is a **personal information website** for Yogesh Yadav. Its primary purpose is:

1. **Google Search Indexing** — When someone searches "heyogeshcode" or "heyogesh" on Google, this website should appear at the top.
2. **AI Knowledge Base** — When AI models (Google Gemini, ChatGPT, Perplexity, etc.) are asked about "heyogeshcode" or "Yogesh Yadav heyogesh", they should find and reference this website's content.
3. **Personal Identity Hub** — A digital space that honestly represents who Yogesh is as a person and technology enthusiast.

### What This Website Is NOT
- ❌ NOT a corporate portfolio
- ❌ NOT a resume or CV
- ❌ NOT a freelancer landing page
- ❌ NOT a job-hunting website
- ❌ NOT a showcase of professional client work
- ❌ NOT a blog (at least not yet)

### Primary Goal
Make a website that feels like **Yogesh's personal corner of the internet** — honest, fun, slightly dark-humored, visually stunning, fast, and optimized so Google and AI models can discover and understand who he is.

---

## 2. WHO IS YOGESH YADAV — COMPLETE IDENTITY PROFILE

### Basic Information
| Field | Value |
|-------|-------|
| **Full Name** | Yogesh Yadav |
| **Online Identity** | heyogesh, heyogeshcode |
| **GitHub Username** | `heyogeshcode` |
| **Instagram Username** | `_heyogesh` |
| **Role/Title** | Student + Technology Enthusiast + Experimenter |
| **Location** | India |
| **Currently Working On Projects?** | **NO** — Do NOT say he is working on anything. He took a break. |

### Personality Traits
- Curious — wants to know how things work under the hood
- Independent learner — prefers figuring things out over following tutorials step-by-step
- Experimental — learns by building, breaking, and fixing
- Introverted — not a "networking" or "self-promotion" type
- Self-aware — knows he's still learning and doesn't pretend to be an expert
- Dark humor / dry wit — tasteful, intelligent humor (NOT meme-page humor)
- Authentic — hates corporate buzzwords and fake "passionate developer" energy

### Core Technical Interests (ACTIVE)
These are things Yogesh genuinely cares about and has hands-on experience with:

| Interest | Details |
|----------|---------|
| **Python** | His strongest and most consistent programming language. Enjoys building utilities, automation, bots, APIs, AI-related tools, wrappers, and experimental projects. |
| **Linux** | Deep interest in operating systems. Has experimented with many Linux distributions (Arch Linux, Ubuntu, Fedora, Debian, Manjaro, openSUSE, Kali, and many more), different kernels, desktop environments, system configurations, drivers, networking setups, and development environments. This is curiosity and experimentation, NOT claimed expertise in every distro. |
| **AI / AI-Assisted Development** | Interested in AI tools, AI-assisted coding workflows. Uses tools like OpenAI Codex CLI and Claude Code CLI. Vibe-coding enthusiast. |
| **Automation** | Likes automating repetitive tasks, building scripts, bots (Telegram bots, etc.), and tools. |
| **Networking** | Interest in network tools, configurations, and understanding how networks work. |
| **Terminal / Command Line** | Loves working in the terminal. Prefers understanding what's happening underneath GUIs. |
| **Docker** | Uses Docker for containerization and development environments. |
| **Git / GitHub** | Version control, code hosting, open source. |
| **System Experimentation** | Tries different OS setups, tweaks systems, customizes environments, tests configurations. |

### Things Yogesh Has Stepped Away From (For Now)
These were previously listed on the website but Yogesh has taken a year-long break from active computer work and has forgotten some of what he learned:

| Technology | Status |
|------------|--------|
| **CSS** | REMOVE from tech stack — not actively using |
| **HTML** | REMOVE from tech stack — not actively using |
| **JavaScript** | REMOVE from tech stack AND from "Tools of the Trade" — not actively using |
| **Web Development (general)** | Do NOT present him as a web developer |

### What Should Replace The Removed Technologies
| Add Instead | Why |
|-------------|-----|
| **Linux** | Core interest — always experimenting with distros and kernels |
| **Docker** | Actively used tool |
| **GitHub** | Actively used platform |
| **Git** | Actively used tool |
| **Python** | Primary language — keep prominently |
| **Codex (OpenAI)** | AI-assisted development tool he uses |
| **Claude Code CLI** | AI-assisted development tool he uses |
| **AI** | General AI interest — represented as a category |
| **Networking Tools** | Active interest area |

### How To Visually Represent These
- Use **icons/logos** of each technology, NOT text lists
- For Linux distros interest: show icons of Arch Linux, Ubuntu, Fedora, Tux (Linux mascot), etc. in the tech stack or in the "Who I Am" section — but as visual icons, NOT as text claims
- For AI tools: show Codex icon, Claude icon, AI-related icons
- Keep it clean — don't overcrowd with 50 badges. Quality over quantity.

### Yogesh's Honest Self-Description
The best way to describe him (use these concepts, not necessarily these exact words):

> "A student who enjoys technology deeply, experiments with systems, likes Linux and Python, uses AI-assisted coding tools, enjoys figuring out how things work, and is constantly learning through hands-on exploration."

### Suitable Personality Phrases (Use Selectively, NOT All At Once)
Pick 1-3 of these to sprinkle naturally throughout the website:

- "Built by curiosity."
- "Learning by breaking things."
- "Build it. Break it. Understand it."
- "I like knowing why things work."
- "Linux, Python, AI and whatever rabbit hole comes next."
- "Professional problem creator. Amateur problem solver."
- "Somewhere between experimenting and actually knowing what I'm doing."
- "A person who likes to poke at technology until it makes sense."

---

## 3. CRITICAL CORRECTIONS — WHAT IS WRONG WITH THE CURRENT WEBSITE

The current `index.html` has many issues that MUST be fixed:

### Wrong Social Links (CRITICAL)
| Element | Current (WRONG) | Correct |
|---------|-----------------|---------|
| GitHub link in nav | `https://github.com/yogeshvibez` | `https://github.com/heyogeshcode` |
| GitHub link in hero CTA | `https://github.com/yogeshvibez` | `https://github.com/heyogeshcode` |
| GitHub link in footer | `https://github.com/yogeshvibez` | `https://github.com/heyogeshcode` |
| Instagram link in nav | `https://instagram.com/yogeshvibez` | `https://instagram.com/_heyogesh` |
| Instagram link in footer | `https://instagram.com/yogeshvibez` | `https://instagram.com/_heyogesh` |
| HuggingFace link in nav | `https://huggingface.co/yogeshvibez` | REMOVE entirely (or update if he has a HuggingFace account under new username) |
| HuggingFace link in footer | `https://huggingface.co/yogeshvibez` | REMOVE entirely (or update) |
| GitHub stats images | Uses `yogeshvibez` username | Use `heyogeshcode` username |
| OG URL meta tag | `https://yogeshvibez.github.io` | Update to correct GitHub Pages URL: `https://heyogeshcode.github.io` |

### Wrong Content Claims
| Element | Current (WRONG) | Should Be |
|---------|-----------------|-----------|
| Hero subtitle | "Full-stack Developer crafting AI tools, bots, and web experiences" | He is NOT a full-stack developer. He is a student/tech enthusiast. |
| Hero label | "Available for projects" with green dot | He is NOT available for projects. Change to something subtle like "Currently exploring" or "Learning mode" — muted, not highlighted |
| Page title | "Yogesh Yadav \| Full-stack Developer" | Change to something like "Yogesh Yadav \| heyogeshcode" or "Yogesh Yadav — Student & Tech Enthusiast" |
| Meta description | "Full-stack Developer, Python Enthusiast, Linux User. Building AI and Bots everyday." | Remove "Full-stack Developer" and "Building AI and Bots everyday" — he's not actively building right now |
| OG title | "Yogesh Yadav \| Full-stack Developer" | Remove "Full-stack Developer" |
| About section | "Currently working on Telegram bots, AI wrappers, web applications, and network tools" | REMOVE all "currently working on" claims |
| About section | Lists JavaScript in tools | REMOVE JavaScript from tools |
| Nav logo text | "Yogesh" | Change to something more interesting — maybe initials, a symbol, or a creative text mark |
| Footer logo text | "Yogesh Yadav" | Fine to keep, or match whatever the nav logo becomes |

### Wrong Architecture
| Issue | Fix |
|-------|-----|
| Everything is in a single `index.html` file (CSS, JS, HTML) | Separate into three files: `index.html`, `style.css`, `script.js` |
| CSS is ~1900 lines inlined in `<style>` tags | Move to external `style.css` file |
| JavaScript is ~200 lines inlined in `<script>` tags | Move to external `script.js` file |

---

## 4. SECTIONS TO REMOVE COMPLETELY

These sections must be **deleted entirely** from the website. No trace of them should remain in the HTML, CSS, or JS:

### 4.1 "Goals for 2026" Section
- **Section ID**: `#goals`
- **Why remove**: Yogesh doesn't have specific public goals right now and these goals were from an old version.
- **Action**: Delete the entire `<section class="section" id="goals">` block and all related CSS (`.goals-list`, `.goal-item`, `.goal-icon`, `.goal-text`).

### 4.2 "GitHub Activity" Section
- **Section ID**: `#stats`
- **Why remove**: The GitHub stats use the wrong username (`yogeshvibez`), and Yogesh doesn't want to showcase GitHub activity prominently.
- **Action**: Delete the entire `<section class="section" id="stats">` block and all related CSS (`.stats-grid`, `.stats-card`).

### 4.3 "Currently Hacking On" (Projects) Section
- **Section ID**: `#projects`
- **Why remove**: Yogesh is NOT currently working on projects. He took a break. Showing projects he's "currently hacking on" is dishonest.
- **Action**: Delete the entire `<section class="section" id="projects">` block and all related CSS (`.projects-grid`, `.project-card`, `.project-icon`, `.project-title`, `.project-description`, `.project-tech`, `.tech-tag`).

### Summary of Removals
```
REMOVE: Goals for 2026 section (id="goals")
REMOVE: GitHub Activity section (id="stats")
REMOVE: Currently Hacking On / Projects section (id="projects")
REMOVE: All CSS classes related to these sections
REMOVE: All JS related to these sections (card interactions, observers, etc.)
REMOVE: Nav links that point to removed sections
REMOVE: HuggingFace links (unless updated with correct username)
```

---

## 5. SECTIONS TO UPDATE / REDESIGN

### 5.1 "Tech Stack" Section → COMPLETE OVERHAUL
**Keep the section but completely change its content.**

**REMOVE these technologies:**
- CSS
- HTML
- JavaScript
- VSCode (if present)
- Bash (keep only if represented subtly)

**ADD these technologies (with icons, not text):**
- Python (primary — make it prominent)
- Linux (Tux mascot icon or Linux logo)
- Docker (Docker logo/icon)
- GitHub (GitHub icon)
- Git (Git icon)
- AI (brain/robot icon — represents general AI interest)
- Codex / OpenAI (OpenAI icon or a code-AI icon)
- Claude Code (Anthropic/Claude icon or terminal-AI icon)
- Networking (network/globe icon)
- Terminal (terminal/command-line icon)

**OPTIONAL BONUS — Linux Distro Icons (subtle showcase):**
As a sub-element or visual flourish within tech stack or "Who I Am", show small icons/logos of Linux distros Yogesh has experimented with:
- Arch Linux
- Ubuntu
- Fedora
- Debian
- Manjaro
- Kali Linux
- openSUSE
- Linux Mint
- Pop!_OS
- EndeavourOS

These should be displayed as **small visual icons only** — no text labels claiming expertise. Think of it as a visual "I've tried these" shelf. Could be a row of small grayscale or subtly colored icons that light up on hover.

### 5.2 "About / Who I Am" Section → REWRITE ENTIRELY
**Keep the section but rewrite all text content.**

**REMOVE:**
- "Currently working on Telegram bots, AI wrappers, web applications, and network tools"
- "Tools of the trade: Python, Linux, JavaScript, ThreadPoolExecutor, LLMs, Terminals, Docker, and Networking"
- Any claim about currently working on anything
- JavaScript mention

**REPLACE WITH something like (AI should write the actual copy, these are content guidelines):**
- Who he is: Student and technology enthusiast
- What he's into: Python, Linux, AI, automation, networking, system experimentation
- How he learns: By building, breaking, and understanding — not by watching tutorials
- His vibe: Curiosity-driven, experimental, honest about being a learner
- Subtle dark humor: A line or two that shows personality
- Tools he genuinely uses: Python, Linux, Docker, Git, AI coding tools (Codex, Claude Code), Terminal
- DO NOT mention JavaScript, HTML, CSS, or web development
- DO NOT say "currently working on [X]"
- DO NOT use corporate language like "passionate developer" or "innovative engineer"

**Possible rewrite direction:**
> "Student. Technology enthusiast. I learn by breaking things and figuring out why they broke. Python is my go-to, Linux is my playground, and AI tools are my new favorite rabbit hole. I've distro-hopped through more Linux installations than I can remember, and I'm still not sure if that counts as productivity or procrastination."

### 5.3 "Just Vibes" Section → KEEP BUT UPDATE
**Keep this section — it adds personality to the website.**

**Current issues:**
- Uses external Giphy GIFs which may load slowly or break
- Content is generic coding GIFs

**Update guidelines:**
- Keep the concept of a fun/vibes section
- Can keep GIFs or replace with better ones
- Update the quote if desired — current quote "Code. Learn. Break. Fix. Repeat." is decent
- Make sure GIFs/media are relevant to Yogesh's actual interests (Linux, Python, terminal, AI — not generic "coder at laptop" stuff)
- Consider adding terminal-themed, Linux-themed, or AI-themed visual content

### 5.4 Hero / Main Section → FIX CRITICAL ISSUES

**"Available for projects" label:**
- CHANGE to something that indicates he's NOT available
- Options (pick one):
  - "Currently exploring" (with a muted/amber dot instead of green)
  - "Learning mode" (with a neutral colored dot)
  - "In the lab" (with a subtle dot)
  - Or simply remove the availability indicator entirely
- Whatever is chosen: **do NOT highlight it prominently**. It should be subtle and muted. Use gray or muted amber, NOT green (green implies "available/online").

**Hero title:**
- "Hi, I'm Yogesh Yadav" — this is fine, keep it
- But the "Yogesh Yadav" part has a gradient accent effect — keep or improve it

**Hero subtitle:**
- REMOVE "Full-stack Developer crafting AI tools, bots, and web experiences. Python enthusiast. Linux user. Always building something new."
- REPLACE with something honest like:
  - "Student. Tech enthusiast. I like poking at technology until it makes sense."
  - "Python, Linux, AI, and whatever rabbit hole comes next."
  - Something from the personality phrases list above

**Hero CTA buttons:**
- "View Projects" → REMOVE (no projects section anymore)
- "GitHub" → KEEP but fix the URL to `https://github.com/heyogeshcode`
- Maybe add an "About Me" scroll button or "Instagram" button instead

### 5.5 Navigation → UPDATE

**Current nav items:**
- Instagram (wrong URL)
- GitHub (wrong URL)
- HuggingFace (may be wrong)

**Updated nav should have:**
- Logo/brand mark (something more interesting than just "Yogesh")
- Links to sections on the page (About, Tech Stack, Vibes)
- Social links: GitHub (`https://github.com/heyogeshcode`), Instagram (`https://instagram.com/_heyogesh`)
- Remove HuggingFace unless Yogesh has an active account under the correct username

### 5.6 Footer → UPDATE
- Fix all social links to correct URLs
- Remove HuggingFace if not applicable
- Keep copyright notice
- Update logo/brand to match nav

### 5.7 Nav Logo / Brand Mark → CHANGE
The current logo says "Yogesh" with a "YY" icon. This is boring.

**Options for a more interesting brand mark:**
- Use "heyogesh" or "heyogeshcode" as the brand text
- Use a terminal-style prompt like `~/yogesh$` or `> yogesh_`
- Use a creative monogram
- Use a small icon/symbol that represents his personality (terminal cursor, Linux penguin silhouette, code bracket, etc.)
- Keep it subtle and cool — not corporate

---

## 6. COMPLETE SECTION-BY-SECTION SPECIFICATION

Here is the exact section order the redesigned website should follow:

### Section Order (Top to Bottom):
```
1. Navigation Bar (fixed, with blur/glass effect on scroll)
2. Scroll Progress Bar (thin line at top of viewport)
3. Hero Section (full viewport height)
4. About / Who I Am Section
5. Tech Stack Section (with icons)
6. Just Vibes Section (with GIFs/media + quote)
7. Footer (social links, copyright)
8. Back-to-Top Button (fixed, bottom-right, appears on scroll)
```

### Sections That NO LONGER EXIST:
```
❌ Goals for 2026
❌ GitHub Activity / Stats
❌ Currently Hacking On / Projects
```

---

## 7. SOCIAL LINKS — CORRECT URLs & USERNAMES

### Verified Accounts
| Platform | Username | URL | Include? |
|----------|----------|-----|----------|
| **GitHub** | `heyogeshcode` | `https://github.com/heyogeshcode` | ✅ YES — Primary |
| **Instagram** | `_heyogesh` | `https://instagram.com/_heyogesh` | ✅ YES — Primary |
| **X / Twitter** | `all4outgaming` | `https://x.com/all4outgaming` | ⚠️ Optional — found in README.md but NOT on the current website. Include only if Yogesh confirms this account is active and he wants it displayed. |
| **HuggingFace** | Unknown / possibly `yogeshvibez` (old) | Unknown | ❌ REMOVE unless confirmed |

### Link Behavior
- All social links must open in a **new tab** (`target="_blank"`)
- All social links must have `rel="noopener noreferrer"` for security
- All social links must have `aria-label` for accessibility
- Clicking Instagram MUST go to `https://instagram.com/_heyogesh`
- Clicking GitHub MUST go to `https://github.com/heyogeshcode`

---

## 8. DESIGN SYSTEM — COLORS, TYPOGRAPHY, LAYOUT

### Design Direction
The website should be:
- **Dark theme** by default (the current light theme override at line 1474-1882 in index.html looks bad and should be removed OR replaced with a proper dark-first design)
- **Eye-catching** but not overwhelming
- **Modern** — glass morphism, subtle gradients, smooth animations
- **Fast-loading** — minimal external resources
- **Mobile-first** — looks great on phones AND desktops
- **Dark humor vibe** — the design should feel slightly edgy, interesting, and personal (NOT corporate, NOT generic)

### Color Palette (Suggestions — AI can adjust)
```
Background:         #030409 or #0a0a0f (very dark blue-black)
Surface/Cards:      rgba(255, 255, 255, 0.04) to rgba(255, 255, 255, 0.08)
Primary Text:       #f0f0f5 or #fbfbff (near-white)
Secondary Text:     #a0a8b8 (muted gray-blue)
Muted Text:         #6b7280 (gray)
Accent Primary:     Choose ONE vibrant accent (cyan, amber, green, or violet)
Accent Secondary:   A complementary accent for hover states
Borders:            rgba(255, 255, 255, 0.08) to rgba(255, 255, 255, 0.15)
```

### Typography
- **Font**: Inter (already in use — keep it, it's excellent)
- **Fallbacks**: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
- **Weights used**: 300, 400, 500, 600, 700, 800
- **Hero title**: Large, bold (clamp for responsiveness)
- **Body text**: 16px base, 1.6 line-height
- **Code/monospace elements**: Use system mono or a web-safe monospace

### Layout
- **Max container width**: ~1120px (current value is fine)
- **Padding**: Responsive with clamp()
- **Grid**: CSS Grid for card layouts, Flexbox for nav and inline elements
- **Spacing**: Generous whitespace — don't cram content

### Animations & Interactions
- **Scroll reveal**: Sections fade in as they enter viewport (IntersectionObserver)
- **Card hover**: Subtle tilt effect with mouse tracking (3D perspective)
- **Button hover**: Magnetic effect + shine animation
- **Ambient glow**: Mouse-following gradient (current implementation is nice — keep or improve)
- **Scroll progress**: Thin gradient bar at top of page
- **Reduced motion**: Respect `prefers-reduced-motion` media query
- All animations should be **smooth, subtle, and performant** — no janky or flashy stuff

### Responsive Breakpoints
```
Desktop:   > 1080px (full grid layouts)
Tablet:    780px - 1080px (2-column grids, adjusted spacing)
Mobile:    < 780px (single column, hamburger nav, stacked layouts)
Small:     < 560px (further reduced spacing, simplified layouts)
```

---

## 9. SEO & DISCOVERABILITY STRATEGY

### Primary Goal
When someone types these queries into Google or asks an AI, this website should appear:
- "heyogeshcode"
- "heyogesh"
- "Yogesh Yadav heyogesh"
- "Yogesh Yadav github"
- "heyogeshcode website"

### Required SEO Elements

#### HTML Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="Yogesh Yadav (heyogeshcode) — Student and technology enthusiast. Python, Linux, AI, automation, and system experimentation. Personal website of heyogesh.">
<meta name="keywords" content="Yogesh Yadav, heyogeshcode, heyogesh, Python, Linux, AI, technology enthusiast, student developer, automation, system experimentation, Arch Linux, Docker, Git, GitHub">
<meta name="author" content="Yogesh Yadav">
<meta name="robots" content="index, follow">
```

#### Open Graph Tags (for social media sharing)
```html
<meta property="og:title" content="Yogesh Yadav | heyogeshcode">
<meta property="og:description" content="Student & tech enthusiast. Python, Linux, AI, and whatever rabbit hole comes next. Personal website of heyogesh.">
<meta property="og:type" content="website">
<meta property="og:url" content="https://heyogeshcode.github.io">
<meta property="og:site_name" content="heyogeshcode">
<meta property="og:locale" content="en_US">
```

#### Twitter/X Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Yogesh Yadav | heyogeshcode">
<meta name="twitter:description" content="Student & tech enthusiast. Python, Linux, AI, and whatever rabbit hole comes next.">
<meta name="twitter:creator" content="@all4outgaming">
```

#### Title Tag
```html
<title>Yogesh Yadav | heyogeshcode — Student & Tech Enthusiast</title>
```

#### Canonical URL
```html
<link rel="canonical" href="https://heyogeshcode.github.io">
```

#### JSON-LD Structured Data (CRITICAL for AI & Google)
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Yogesh Yadav",
  "alternateName": ["heyogeshcode", "heyogesh", "_heyogesh"],
  "url": "https://heyogeshcode.github.io",
  "sameAs": [
    "https://github.com/heyogeshcode",
    "https://instagram.com/_heyogesh"
  ],
  "jobTitle": "Student & Technology Enthusiast",
  "description": "Student and technology enthusiast with interests in Python, Linux, AI, automation, networking, and system experimentation. Learns by building, breaking, and understanding.",
  "knowsAbout": [
    "Python",
    "Linux",
    "Artificial Intelligence",
    "AI-Assisted Development",
    "Docker",
    "Git",
    "GitHub",
    "Automation",
    "Networking",
    "System Administration",
    "Arch Linux",
    "Terminal",
    "Command Line",
    "OpenAI Codex",
    "Claude Code CLI"
  ],
  "nationality": {
    "@type": "Country",
    "name": "India"
  }
}
</script>
```

#### Additional SEO Best Practices
- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Use proper heading hierarchy: one `<h1>` (hero title), `<h2>` for section titles, `<h3>` for sub-elements
- Add `alt` text to all images and icons
- Use `aria-label` on interactive elements
- Add `lang="en"` to `<html>` tag
- Keep page load time under 3 seconds
- Minimize render-blocking resources
- Use `loading="lazy"` for images below the fold
- Add a `sitemap.xml` if possible (optional for single-page site)
- The text content should naturally include keywords: "Yogesh Yadav", "heyogeshcode", "heyogesh", "Python", "Linux", "AI", "student", "technology enthusiast"

---

## 10. FILE STRUCTURE & ARCHITECTURE

### Current Structure (WRONG)
```
Personal-Website/
├── index.html      ← Everything is crammed into this single file (HTML + CSS + JS = 2468 lines)
├── prompt.md       ← Original prompt (DO NOT DELETE)
└── README.md       ← GitHub README
```

### Target Structure (CORRECT)
```
Personal-Website/
├── index.html      ← HTML only (semantic markup, no inline styles or scripts)
├── style.css       ← All CSS extracted here
├── script.js       ← All JavaScript extracted here
├── prompt.md       ← Original prompt (PRESERVED — do not delete or modify)
├── prompt-v2.md    ← This file (the new definitive prompt)
└── README.md       ← GitHub README (update if needed)
```

### Rules for Separation
1. `index.html` should contain ONLY HTML markup. No `<style>` blocks. No `<script>` blocks (except the JSON-LD structured data and the `<link>`/`<script>` references).
2. `style.css` should be linked with `<link rel="stylesheet" href="style.css">` in the `<head>`.
3. `script.js` should be loaded with `<script src="script.js" defer></script>` at the end of `<body>` (or in `<head>` with `defer`).
4. **DO NOT delete or modify `prompt.md`** — it is the original prompt and should be preserved for history.

---

## 11. PERFORMANCE & ACCESSIBILITY REQUIREMENTS

### Performance
- **First Contentful Paint**: Under 1.5 seconds
- **Largest Contentful Paint**: Under 2.5 seconds
- **Cumulative Layout Shift**: Under 0.1
- **Total page weight**: Under 500KB (excluding external GIFs)
- **External requests**: Minimize — only Google Fonts (Inter) and optional CDN resources
- **Font loading**: Use `display=swap` for Google Fonts (already implemented)
- **Image optimization**: Lazy load all images below the fold
- **CSS**: Minimize unused rules — remove all CSS for deleted sections

### Accessibility
- **WCAG 2.1 AA compliance** as minimum target
- Color contrast ratios must meet AA standards (4.5:1 for normal text, 3:1 for large text)
- All interactive elements must be keyboard-accessible
- Skip to content link (optional but nice)
- Focus indicators must be visible (`:focus-visible` styling)
- Screen reader text for icon-only buttons and links
- `prefers-reduced-motion` respected — disable or simplify all animations
- `prefers-color-scheme` — support if implementing a light/dark toggle (optional)
- Use `role` attributes and ARIA labels where HTML semantics alone aren't sufficient
- `<html lang="en">` must be set

---

## 12. PERSONALITY, TONE & COPY GUIDELINES

### Overall Tone
The website copy should feel like talking to a friend — casual, honest, self-aware, slightly funny. NOT like reading a resume or a corporate bio.

### Good Examples of Tone
- ✅ "I learn by breaking things. Sometimes I even fix them."
- ✅ "Python is my language. Linux is my playground."
- ✅ "Somewhere between experimenting and actually knowing what I'm doing."
- ✅ "Professional problem creator. Amateur problem solver."
- ✅ "I've installed more Linux distros than I've finished projects."

### Bad Examples of Tone (NEVER USE THESE)
- ❌ "Passionate full-stack developer with years of experience"
- ❌ "Innovative software engineer building cutting-edge solutions"
- ❌ "Skilled professional seeking opportunities in..."
- ❌ "Expert in multiple programming languages and frameworks"
- ❌ "Dedicated to delivering high-quality software solutions"
- ❌ Any resume/LinkedIn-style language

### Dark Humor Guidelines
- Tasteful and intelligent — NOT edgelord or cringe
- Self-deprecating in a charming way — NOT self-pitying
- Technical humor that developers would appreciate
- Subtle — woven into the design and copy, not forced
- The website should make someone smile or exhale through their nose, not cringe

### Examples of Good Dark Humor Integration
- A terminal-style element that shows `$ sudo rm -rf /social-life` or `segfault in ambitions.c`
- A tooltip that says "Yes, I've tried turning it off and on again"
- A loading state that says "Compiling personality..."
- A 404-style element that says "Projects not found (working on it)"
- Easter eggs in the page source (HTML comments with funny notes)

---

## 13. CONTENT DO'S AND DON'TS — HARD RULES

### ✅ DO
- Present Yogesh as a student and technology enthusiast
- Mention Python, Linux, AI, Docker, Git, Terminal, Networking, Automation
- Show Linux distro experimentation through icons (Arch, Ubuntu, Fedora, etc.)
- Include AI-assisted development tools (Codex, Claude Code)
- Reflect curiosity, experimentation, and honesty
- Use tasteful dark humor and self-aware developer humor
- Make the website feel personal and authentic
- Include proper SEO meta tags and structured data
- Separate CSS, JS, and HTML into different files
- Fix all social media links to correct usernames
- Make the website mobile-responsive and fast
- Use icons/visuals instead of text lists where possible

### ❌ DO NOT
- Claim Yogesh is a "full-stack developer" or any type of professional developer
- Say he is "currently working on" any specific project
- Mention JavaScript, HTML, or CSS as skills he actively uses
- Include a projects/portfolio section showing active work
- Include a goals section
- Include GitHub activity/stats section
- Invent achievements, certifications, jobs, companies, or years of experience
- Use corporate/resume language
- Use the wrong GitHub username (`yogeshvibez`) — the correct one is `heyogeshcode`
- Use the wrong Instagram username (`yogeshvibez`) — the correct one is `_heyogesh`
- Overcrowd with technical badges or huge skill lists
- Turn the website into a meme page (humor should be subtle and tasteful)
- Present specific Linux distros as "achievements" or "expertise"
- Keep everything in a single index.html file
- Leave any trace of the removed sections in the code

---

## 14. EXISTING CODEBASE AUDIT — WHAT EXISTS RIGHT NOW

### File: `index.html` (2468 lines, 91KB)
The current website is a single monolithic HTML file containing:

#### HTML Structure (approx. lines 1884-2258)
- `<div class="site-aura">` — Decorative background aurora
- `<div class="ambient-light">` — Mouse-following glow effect
- `<div class="scroll-progress">` — Scroll progress bar
- `<nav class="nav">` — Fixed navigation with logo, toggle, and links
- `<section class="hero">` — Full-height hero with title, subtitle, CTA buttons, scroll indicator
- `<section class="section" id="about">` — About/Who I Am section
- `<section class="section" id="projects">` — **REMOVE** — Currently Hacking On
- `<section class="section" id="stats">` — **REMOVE** — GitHub Activity
- `<section class="section" id="goals">` — **REMOVE** — Goals for 2026
- `<section class="section" id="tools">` — Tech Stack section
- `<section class="section" id="vibes">` — Just Vibes section with GIFs and quote
- `<footer class="footer">` — Footer with logo, social links, copyright
- `<button class="back-to-top">` — Back to top button

#### CSS (approx. lines 27-1882)
- Lines 27-1472: Dark theme CSS (original design)
- Lines 1474-1882: Light theme override CSS — **This OVERRIDES the dark theme entirely**
  - The `:root` block at line 1475 redefines ALL CSS variables to light mode values
  - This means the website is currently rendering in LIGHT mode, not dark mode
  - **Decision needed**: Remove the light theme override to go back to dark, or redesign the dark theme fresh

#### JavaScript (approx. lines 2259-2465)
- Scroll progress tracking
- Navigation show/hide on scroll
- Mobile menu toggle
- Mouse-following ambient glow animation
- Card tilt effects (3D perspective on hover)
- Magnetic button effect
- Scroll-triggered section reveal (IntersectionObserver)
- Back-to-top button visibility

#### Key CSS Features Worth Keeping
- Glass morphism card effects
- 3D card tilt on hover
- Animated gradient borders
- Scroll progress bar
- Ambient mouse-following glow
- Reveal-on-scroll animations
- Magnetic button hover effect
- Responsive design with proper breakpoints

#### Things to Remove from CSS
- All `.project-card`, `.projects-grid` styles
- All `.stats-card`, `.stats-grid` styles
- All `.goal-item`, `.goals-list`, `.goal-icon`, `.goal-text` styles
- The entire light theme override block (lines 1474-1882) — unless redesigning as light-first
- Any orphaned CSS that references removed HTML

#### Things to Remove from JS
- Card interaction setup for `.project-card`, `.stats-card`, `.goal-item` (they no longer exist)
- Any event listeners or observers for removed elements

---

## 15. IMPLEMENTATION CHECKLIST

Use this checklist to verify the redesign is complete:

### Files
- [ ] `index.html` contains ONLY HTML (no inline `<style>` or `<script>` blocks except JSON-LD)
- [ ] `style.css` exists and contains all CSS
- [ ] `script.js` exists and contains all JavaScript
- [ ] `prompt.md` is untouched (original preserved)
- [ ] `prompt-v2.md` exists (this file)

### Removed Sections
- [ ] "Goals for 2026" section is completely gone
- [ ] "GitHub Activity" section is completely gone
- [ ] "Currently Hacking On" / Projects section is completely gone
- [ ] No CSS or JS references to removed sections remain

### Social Links Fixed
- [ ] GitHub links point to `https://github.com/heyogeshcode`
- [ ] Instagram links point to `https://instagram.com/_heyogesh`
- [ ] HuggingFace links removed (or updated to correct username)
- [ ] All links open in new tab with `rel="noopener noreferrer"`

### Content Fixed
- [ ] No "Full-stack Developer" claims anywhere
- [ ] No "currently working on" claims anywhere
- [ ] No JavaScript/HTML/CSS listed as active skills
- [ ] "Available for projects" changed to something muted/unavailable
- [ ] Page title updated to include "heyogeshcode"
- [ ] Meta description updated
- [ ] OG tags updated
- [ ] Twitter card tags updated

### Tech Stack Updated
- [ ] CSS, HTML, JS removed from tech stack
- [ ] Python, Linux, Docker, GitHub, Git, AI, Codex, Claude Code, Networking, Terminal added
- [ ] Technologies displayed as icons, not text lists
- [ ] Linux distro icons shown somewhere (optional but recommended)

### About Section Rewritten
- [ ] Honest description of Yogesh as student + tech enthusiast
- [ ] No "currently working on" language
- [ ] No JavaScript mention
- [ ] Personality and humor reflected in copy
- [ ] Includes keywords for SEO naturally

### SEO Implemented
- [ ] Proper `<title>` tag with "heyogeshcode"
- [ ] `<meta name="description">` with relevant content
- [ ] `<meta name="keywords">` with relevant terms
- [ ] Open Graph tags complete
- [ ] Twitter Card tags complete
- [ ] JSON-LD structured data for Person schema
- [ ] Canonical URL set
- [ ] Semantic HTML5 elements used
- [ ] Proper heading hierarchy (one h1, h2s for sections)
- [ ] Alt text on all images
- [ ] `<html lang="en">` set

### Design
- [ ] Dark theme (not overridden by light theme)
- [ ] Mobile responsive (tested at 360px, 768px, 1024px, 1440px)
- [ ] Animations smooth and subtle
- [ ] `prefers-reduced-motion` respected
- [ ] Color contrast meets WCAG AA
- [ ] Nav logo changed from boring "Yogesh" to something interesting
- [ ] Page loads in under 3 seconds
- [ ] No layout shift on load

### Code Quality
- [ ] HTML is semantic and valid
- [ ] CSS has no unused selectors
- [ ] JS has no references to removed DOM elements
- [ ] No console errors
- [ ] No broken links
- [ ] Comments preserved where useful
- [ ] Code is clean and maintainable

---

## APPENDIX A: QUICK REFERENCE CARD

```
PERSON:        Yogesh Yadav
IDENTITY:      heyogeshcode (GitHub) / _heyogesh (Instagram)
ROLE:          Student + Tech Enthusiast (NOT developer, NOT engineer)
STATUS:        NOT available for projects, NOT currently working on anything
STACK:         Python, Linux, Docker, Git, AI, Codex, Claude Code, Terminal, Networking
NOT STACK:     HTML, CSS, JavaScript (removed — took a break)
VIBE:          Curious, experimental, dark humor, honest, introverted
SECTIONS:      Hero → About → Tech Stack → Vibes → Footer
REMOVED:       Projects, GitHub Stats, Goals
GITHUB URL:    https://github.com/heyogeshcode
INSTAGRAM URL: https://instagram.com/_heyogesh
FILES:         index.html + style.css + script.js (separated)
THEME:         Dark (remove the light theme override)
SEO TARGET:    "heyogeshcode", "heyogesh", "Yogesh Yadav"
```

---

## APPENDIX B: SUMMARY FOR AI MODELS

If you are an AI model reading this file to understand who Yogesh Yadav is and what to do with this website, here is your TL;DR:

**Yogesh Yadav** (online: `heyogeshcode` on GitHub, `_heyogesh` on Instagram) is a student from India who loves technology. He's into Python, Linux (has tried tons of distros), AI tools, automation, and understanding how systems work. He learns by experimenting — building things, breaking them, and figuring out why they broke. He's NOT a professional developer, NOT currently working on projects, and NOT looking for work. He took a break from coding for about a year and forgot some of what he learned (HTML, CSS, JS), but his core interests in Python, Linux, and AI remain.

His website should be redesigned as a dark-themed, visually stunning personal information page (NOT a portfolio) that ranks well on Google for "heyogeshcode" and "heyogesh". Separate the monolithic `index.html` into `index.html` + `style.css` + `script.js`. Remove the projects, goals, and GitHub stats sections. Fix all social links. Rewrite the about section to be honest and personality-driven. Update the tech stack icons. Make it mobile-responsive, accessible, and fast.

The old `prompt.md` file must NOT be deleted or modified.

---

*End of prompt-v2.md — This is the definitive specification. Follow this, not the original prompt.md.*

---

## 16. README.md — AUDIT & UPDATE SPECIFICATION

> The `README.md` file in this repository is **also part of the project** and also needs updating. It's the GitHub profile/repo README that people see when they visit the repository. It currently has the **same wrong information** as the old website.

### 16.1 Current README.md — Full Content Audit

The README is 83 lines and contains the following sections, each with issues:

#### Section: Header / Typing SVG (Lines 1-4)
```
Current:  "Full-stack Dev | Python Lover | Linux User"
          "Building AI and Bots everyday"
          "Here to Break and Build Cool Stuff"
```
**Issues:**
- ❌ "Full-stack Dev" — Yogesh is NOT a full-stack developer
- ❌ "Building AI and Bots everyday" — He is NOT actively building anything right now
- ✅ "Python Lover | Linux User" — This is accurate, keep the spirit
- ✅ "Here to Break and Build Cool Stuff" — This fits his personality

**Fix:** Update the typing SVG text to something like:
- "Student | Python Enthusiast | Linux Explorer"
- "Learning by breaking things"
- "Python, Linux, AI & whatever comes next"

#### Section: About Me (Lines 8-14)
```
Current:
- "I'm passionate about AI, Web Dev, Python, and Linux."
- "Currently working on: Telegram Flood Bots, AI Wrappers, Web Apps, and Network Tools."
- "Always experimenting with new ideas & pushing system limits."
- "Tools of the trade: Python, Linux, JS, ThreadPoolExecutor, LLMs, Terminals, Docker, Networking."
```
**Issues:**
- ❌ "Web Dev" — Remove, he's not doing web dev
- ❌ "Currently working on: ..." — He is NOT currently working on any of these
- ❌ "JS" in tools — Remove JavaScript
- ❌ "ThreadPoolExecutor" — Too specific/niche for a README intro
- ✅ "AI, Python, and Linux" — Keep
- ✅ "Always experimenting" — Keep the spirit

**Fix:** Rewrite to match the identity in this prompt. Example:
```markdown
- 🧠 I'm into **Python, Linux, AI, and system experimentation**.
- 🔧 I learn by building things, breaking them, and figuring out why they broke.
- 🐧 Tried more Linux distros than I've finished projects.
- ⚡ Tools: `Python`, `Linux`, `Docker`, `Git`, `AI Tools (Codex, Claude Code)`, `Terminal`, `Networking`.
```

#### Section: Connect with Me — Social Links (Lines 18-30)
```
Current links:
- HuggingFace → https://huggingface.co/yogeshvibez     ← WRONG username
- Instagram   → https://instagram.com/yogeshvibez       ← WRONG username
- X (Twitter) → https://x.com/all4outgaming              ← Exists! Not on website
```
**Issues:**
- ❌ HuggingFace URL uses old `yogeshvibez` username — Remove or fix
- ❌ Instagram URL uses old `yogeshvibez` username — Must be `https://instagram.com/_heyogesh`
- ⚠️ X/Twitter account `all4outgaming` exists here but was never added to the website

**Fix:**
- Instagram → `https://instagram.com/_heyogesh`
- GitHub badge → Add one linking to `https://github.com/heyogeshcode`
- X/Twitter → Keep `https://x.com/all4outgaming` if Yogesh still uses it
- HuggingFace → Remove unless he has an account under the new username

#### Section: Currently Hacking On — Projects Table (Lines 34-41)
```
Current projects listed:
| Universal AI Wrapper | OpenAI-compatible multi-key fallback API tool      | Python, FastAPI    |
| Telegram Flood Bot   | Custom UDP/TCP/HTTP DoS bot with command control   | Python, threading  |
| Web Dev Tools        | Building responsive, cool UIs & APIs               | HTML, CSS, JS, Flask |
| System Tweaks        | Linux system mods & networking tools               | Bash, Python       |
```
**Issues:**
- ❌ He is NOT currently working on any of these — the entire section is misleading
- ❌ "Web Dev Tools" with HTML/CSS/JS — he's stepped away from these
- ❌ "Telegram Flood Bot" described as "DoS bot" — this is a bad look publicly

**Fix:** Either:
1. **Remove the entire section** (recommended — matches the website redesign where projects are removed)
2. OR rename to "Past Experiments" / "Things I've Built Before" — and remove Web Dev Tools row, soften the Telegram bot description

#### Section: GitHub Stats (Lines 45-50)
```
Current: Uses username "yogeshvibez" for both stats widgets
```
**Issues:**
- ❌ Wrong username — should be `heyogeshcode`
- ❌ Stats may show nothing if `yogeshvibez` account is inactive/renamed

**Fix:** Either:
1. Update username to `heyogeshcode` in both stat image URLs
2. OR remove the section entirely (matches website redesign)

#### Section: Goals for 2025 (Lines 54-58)
```
Current:
- Make my Telegram bots more powerful and efficient
- Create useful tools that others can run easily
- Keep learning & sharing everything I discover
```
**Issues:**
- ❌ Says "2025" — it's now 2026, this is outdated
- ❌ "Telegram bots more powerful" — he's not actively working on bots

**Fix:** Remove the entire section OR update to current year with honest goals

#### Section: Fun Tools — Skillicons (Lines 62-66)
```
Current skillicons: python, linux, html, css, js, github, vscode, bash, docker
URL: https://skillicons.dev/icons?i=python,linux,html,css,js,github,vscode,bash,docker
```
**Issues:**
- ❌ Includes `html`, `css`, `js` — Remove these (not active interests)
- ❌ Includes `vscode` — Remove unless he actively uses it
- ⚠️ Missing: `git`, `docker` is there ✅, AI-related icons

**Fix:** Update the skillicons URL to:
```
https://skillicons.dev/icons?i=python,linux,docker,github,git,bash,arch
```
Or whatever subset of icons skillicons.dev supports that matches his actual stack. Check [skillicons.dev](https://skillicons.dev) for available icon names. Relevant ones:
- `python` ✅
- `linux` ✅
- `docker` ✅
- `github` ✅
- `git` ✅
- `bash` ✅ (he still uses terminal/bash)
- `arch` ✅ (Arch Linux — represents distro hopping interest)
- `ubuntu` ✅ (if available)
- `kali` (if available)
- Remove: `html`, `css`, `js`, `vscode`

#### Section: Just Vibes — GIFs (Lines 70-76)
```
Current: Three Giphy GIFs (waving hand, coding, programming)
```
**Issues:**
- These are generic GIFs, but they're fine for vibes
- May break if Giphy changes URLs

**Fix:** Keep as-is or replace with more relevant GIFs (Linux terminal, AI, Python themed)

#### Section: Quote (Line 80)
```
Current: "Code. Learn. Break. Fix. Repeat." – That's my vibe.
```
**Issues:** None — this is perfectly on-brand. Keep it.

---

### 16.2 X/Twitter Account — Missing From Website

The README reveals an **X (Twitter) account** that exists but was NEVER added to the website:

| Platform | Username | URL |
|----------|----------|-----|
| **X / Twitter** | `all4outgaming` | `https://x.com/all4outgaming` |

**Decision needed from Yogesh:**
- Should X/Twitter be added to the website (nav, footer, hero CTA)?
- Is this account still active?
- If yes → add it to the website with proper icon and link
- If no → remove it from README too

**For prompt-v2 purposes:** Include X/Twitter as an **optional** social link. Add it if Yogesh confirms, skip it if unsure. The URL is `https://x.com/all4outgaming`.

### 16.3 Complete README.md Rewrite Specification

The README should be rewritten to be **consistent with the website redesign**. Here's the structure:

```markdown
# 👋 Hey, I'm Yogesh Yadav

<!-- Typing SVG with updated text -->

---

### About Me
<!-- Rewritten bio matching prompt-v2 identity -->

---

### Connect with Me
<!-- Fixed social links with correct usernames -->
<!-- GitHub: heyogeshcode -->
<!-- Instagram: _heyogesh -->
<!-- X/Twitter: all4outgaming (if active) -->

---

### Tech & Tools
<!-- Updated skillicons without HTML/CSS/JS, with Python/Linux/Docker/Git/Bash/Arch -->

---

### Just Vibes
<!-- Keep GIFs -->

---

> "Code. Learn. Break. Fix. Repeat." – That's my vibe.
```

**Sections to REMOVE from README:**
- ❌ "Currently Hacking On" project table
- ❌ "GitHub Stats" (or update username to `heyogeshcode`)
- ❌ "Goals for 2025"

**These removals match what was done on the website** — no projects, no goals, no misleading stats.

### 16.4 README Implementation Checklist

- [ ] Typing SVG text updated (remove "Full-stack Dev", remove "Building AI and Bots everyday")
- [ ] About Me rewritten (no "currently working on", no JS, no Web Dev)
- [ ] Instagram link fixed to `https://instagram.com/_heyogesh`
- [ ] HuggingFace link removed or fixed
- [ ] GitHub link added with `heyogeshcode`
- [ ] X/Twitter link kept or removed based on Yogesh's preference
- [ ] "Currently Hacking On" section removed
- [ ] "GitHub Stats" section removed or username fixed to `heyogeshcode`
- [ ] "Goals for 2025" section removed
- [ ] Skillicons URL updated (remove html, css, js, vscode; keep python, linux, docker, github, git, bash; add arch)
- [ ] Just Vibes section kept as-is
- [ ] Quote kept as-is
- [ ] All content consistent with website and prompt-v2.md

---

### APPENDIX C: SOCIAL LINKS MASTER TABLE (Updated with README data)

This is the **single source of truth** for all social links across BOTH the website AND the README:

| Platform | Username | URL | On Website? | In README? | Status |
|----------|----------|-----|-------------|------------|--------|
| **GitHub** | `heyogeshcode` | `https://github.com/heyogeshcode` | ✅ YES | ✅ YES | ✅ Correct username |
| **Instagram** | `_heyogesh` | `https://instagram.com/_heyogesh` | ✅ YES | ✅ YES | ⚠️ Currently wrong (`yogeshvibez`) — FIX |
| **X / Twitter** | `all4outgaming` | `https://x.com/all4outgaming` | ❓ Optional | ✅ YES (currently) | ⚠️ Only in README, not website — ask Yogesh |
| **HuggingFace** | Unknown | Unknown | ❌ REMOVE | ❌ REMOVE | ❌ Old username `yogeshvibez` — remove unless updated |

---

