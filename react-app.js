/**
 * Yogesh Yadav (heyogeshcode) — High-Performance React 18 Architecture
 * Comprehensive reactive interactive layer for personal website.
 * Built with React 18, Custom Hooks, Reactive State, and Physics-Based Interactions.
 */

(function() {
    'use strict';

    // Verify React and ReactDOM are available
    if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') {
        console.warn('React or ReactDOM not loaded. Falling back to vanilla interactions.');
        return;
    }

    const {
        createElement: h,
        Fragment,
        useState,
        useEffect,
        useRef,
        useCallback,
        useMemo
    } = React;

    /* ==========================================================================
       SVG ICON HELPERS & DESIGN CONSTANTS
       ========================================================================== */
    const ICONS = {
        check: () => h('svg', {
            viewBox: '0 0 24 24',
            width: 15,
            height: 15,
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
        }, h('polyline', { points: '20 6 9 17 4 12' })),
        copy: () => h('svg', {
            viewBox: '0 0 24 24',
            width: 14,
            height: 14,
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
        },
            h('rect', { x: 9, y: 9, width: 13, height: 13, rx: 2, ry: 2 }),
            h('path', { d: 'M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1' })
        ),
        terminal: () => h('svg', {
            viewBox: '0 0 24 24',
            width: 16,
            height: 16,
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
        },
            h('polyline', { points: '4 17 10 11 4 5' }),
            h('line', { x1: 12, y1: 19, x2: 20, y2: 19 })
        ),
        close: () => h('svg', {
            viewBox: '0 0 24 24',
            width: 18,
            height: 18,
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2.2,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
        },
            h('line', { x1: 18, y1: 6, x2: 6, y2: 18 }),
            h('line', { x1: 6, y1: 6, x2: 18, y2: 18 })
        ),
        arrowUp: () => h('svg', {
            viewBox: '0 0 24 24',
            width: 20,
            height: 20,
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 2.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
        }, h('polyline', { points: '18 15 12 9 6 15' }))
    };

    /* ==========================================================================
       CUSTOM REACT HOOKS
       ========================================================================== */

    /**
     * useTypewriter — Authentic terminal typing cadence simulation
     */
    function useTypewriter({ words, typeSpeed = 54, deleteSpeed = 28, delaySpeed = 2100, loop = true }) {
        const [text, setText] = useState('');
        const [wordIndex, setWordIndex] = useState(0);
        const [isDeleting, setIsDeleting] = useState(false);
        const [isWaiting, setIsWaiting] = useState(false);

        useEffect(() => {
            let timer;
            const currentWord = words[wordIndex % words.length];

            if (isWaiting) {
                timer = setTimeout(() => {
                    setIsWaiting(false);
                    setIsDeleting(true);
                }, delaySpeed);
                return () => clearTimeout(timer);
            }

            if (isDeleting) {
                if (text === '') {
                    setIsDeleting(false);
                    setWordIndex((prev) => (loop ? (prev + 1) % words.length : Math.min(prev + 1, words.length - 1)));
                } else {
                    const jitter = Math.floor(Math.random() * 12);
                    timer = setTimeout(() => {
                        setText((prev) => prev.slice(0, -1));
                    }, deleteSpeed + jitter);
                }
            } else {
                if (text === currentWord) {
                    setIsWaiting(true);
                } else {
                    const nextChar = currentWord.slice(0, text.length + 1);
                    const isPunctuation = ['.', ',', '-', '/', ' '].includes(currentWord[text.length]);
                    const cadence = typeSpeed + (isPunctuation ? 70 : Math.floor(Math.random() * 24) - 12);
                    timer = setTimeout(() => {
                        setText(nextChar);
                    }, Math.max(cadence, 20));
                }
            }

            return () => clearTimeout(timer);
        }, [text, wordIndex, isDeleting, isWaiting, words, typeSpeed, deleteSpeed, delaySpeed, loop]);

        return { text, isDeleting, isWaiting, wordIndex };
    }

    /**
     * useScrollProgress — High-accuracy scroll tracking
     */
    function useScrollProgress() {
        const [progress, setProgress] = useState(0);
        const [scrollY, setScrollY] = useState(0);

        useEffect(() => {
            let ticking = false;

            function updateScroll() {
                const currentY = window.scrollY;
                const docHeight = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
                const percent = Math.min(Math.max((currentY / docHeight) * 100, 0), 100);

                setProgress(percent);
                setScrollY(currentY);
                ticking = false;
            }

            function onScroll() {
                if (!ticking) {
                    window.requestAnimationFrame(updateScroll);
                    ticking = true;
                }
            }

            window.addEventListener('scroll', onScroll, { passive: true });
            updateScroll();

            return () => window.removeEventListener('scroll', onScroll);
        }, []);

        return { progress, scrollY };
    }

    /**
     * useClipboard — Clipboard copy state with automatic reset
     */
    function useClipboard(timeout = 2000) {
        const [isCopied, setIsCopied] = useState(false);

        const copyText = useCallback((text) => {
            if (!navigator.clipboard) {
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                try {
                    document.execCommand('copy');
                    setIsCopied(true);
                    setTimeout(() => setIsCopied(false), timeout);
                } catch (err) {
                    console.error('Fallback copy failed', err);
                }
                document.body.removeChild(textarea);
                return;
            }

            navigator.clipboard.writeText(text).then(() => {
                setIsCopied(true);
                setTimeout(() => setIsCopied(false), timeout);
            }).catch((err) => {
                console.error('Failed to copy', err);
            });
        }, [timeout]);

        return { isCopied, copyText };
    }

    /* ==========================================================================
       COMPONENT 1: HERO TYPEWRITER
       ========================================================================== */
    function TypewriterHero() {
        const phrases = useMemo(() => [
            'Student & technology enthusiast.',
            'Poking systems until they make sense.',
            'Distro-hopping across Linux kernels.',
            'Building bots & utilities in Python.',
            'AI workflows & Claude Code CLI.',
            'Breaking things to understand them.',
            'Build it. Break it. Understand it.'
        ], []);

        const { text } = useTypewriter({
            words: phrases,
            typeSpeed: 48,
            deleteSpeed: 24,
            delaySpeed: 2200
        });

        return h(Fragment, null,
            h('span', { className: 'typewriter-prefix', 'aria-hidden': 'true' }, '> '),
            h('span', { className: 'typewriter-text' },
                text,
                h('span', { className: 'typewriter-cursor', 'aria-hidden': 'true' })
            )
        );
    }

    /* ==========================================================================
       COMPONENT 2: INTERACTIVE REACT TERMINAL
       ========================================================================== */
    function InteractiveTerminal() {
        const { isCopied, copyText } = useClipboard(2000);
        const [commandHistory, setCommandHistory] = useState([
            {
                cmd: 'whoami',
                output: 'Student, technology enthusiast, and professional problem creator.',
                isDim: false
            },
            {
                cmd: 'cat philosophy.txt',
                output: '"Build it. Break it. Understand it."',
                isDim: false
            },
            {
                cmd: 'sudo rm -rf /social-life',
                output: '[sudo] password for heyogesh: **********\nDone. More time allocated for Linux, Python & system experimentation.',
                isDim: true
            }
        ]);

        const [inputCmd, setInputCmd] = useState('');
        const [historyIndex, setHistoryIndex] = useState(-1);
        const [isMobile, setIsMobile] = useState(false);
        const terminalBodyRef = useRef(null);
        const inputRef = useRef(null);

        useEffect(() => {
            function checkMobile() {
                setIsMobile(window.innerWidth <= 640);
            }
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return () => window.removeEventListener('resize', checkMobile);
        }, []);

        const availableCommands = useMemo(() => ({
            'whoami': 'Student, technology enthusiast, and professional problem creator.',
            'cat philosophy.txt': '"Build it. Break it. Understand it."',
            'philosophy': '"Build it. Break it. Understand it."',
            'sudo rm -rf /social-life': '[sudo] password for heyogesh: **********\nDone. More time allocated for Linux, Python & system experimentation.',
            'distros': 'Explored: Arch Linux, Ubuntu, Fedora, Debian, Kali Linux, Manjaro, openSUSE, Linux Mint, Pop!_OS, EndeavourOS.',
            'stack': 'Core Tools: Python, Linux, Docker, Git, GitHub, AI/LLMs, OpenAI Codex, Claude Code CLI, Terminal & Bash, Networking.',
            'uname -a': 'Linux arch-heyogesh 6.14.0-zen #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux',
            'uptime': 'up 42 days, 13:37, 1 user, load average: 0.12, 0.08, 0.04 (Curiosity: 100%)',
            'neofetch': `OS: Arch Linux x86_64
Host: Personal Machine
Kernel: 6.14.0-zen
Uptime: 42d 13h 37m
Packages: 1337 (pacman)
Shell: zsh 5.9
Terminal: kitty
Memory: 99% allocated to experiments`,
            'help': 'Available commands: whoami, philosophy, distros, stack, neofetch, uname -a, uptime, clear, help'
        }), []);

        const executeCommand = useCallback((rawCmd) => {
            const trimmed = rawCmd.trim();
            if (!trimmed) return;

            if (trimmed.toLowerCase() === 'clear') {
                setCommandHistory([]);
                setInputCmd('');
                return;
            }

            const cleanCmd = trimmed.toLowerCase();
            let output = availableCommands[cleanCmd];

            if (!output) {
                if (cleanCmd.includes('whoami')) {
                    output = availableCommands['whoami'];
                } else if (cleanCmd.includes('philosophy')) {
                    output = availableCommands['cat philosophy.txt'];
                } else if (cleanCmd.includes('distro')) {
                    output = availableCommands['distros'];
                } else if (cleanCmd.includes('neofetch')) {
                    output = availableCommands['neofetch'];
                } else if (cleanCmd.includes('rm -rf')) {
                    output = availableCommands['sudo rm -rf /social-life'];
                } else {
                    output = `zsh: command not found: ${trimmed}. Type 'help' for available commands.`;
                }
            }

            setCommandHistory((prev) => [
                ...prev,
                {
                    cmd: trimmed,
                    output: output,
                    isDim: trimmed.includes('sudo')
                }
            ]);

            setInputCmd('');
            setHistoryIndex(-1);

            setTimeout(() => {
                if (terminalBodyRef.current) {
                    terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
                }
            }, 50);
        }, [availableCommands]);

        const handleKeyDown = useCallback((e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                executeCommand(inputCmd);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const pastCmds = commandHistory.map((item) => item.cmd);
                if (pastCmds.length === 0) return;
                const newIndex = historyIndex === -1 ? pastCmds.length - 1 : Math.max(0, historyIndex - 1);
                setHistoryIndex(newIndex);
                setInputCmd(pastCmds[newIndex]);
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const pastCmds = commandHistory.map((item) => item.cmd);
                if (historyIndex === -1) return;
                if (historyIndex < pastCmds.length - 1) {
                    const newIndex = historyIndex + 1;
                    setHistoryIndex(newIndex);
                    setInputCmd(pastCmds[newIndex]);
                } else {
                    setHistoryIndex(-1);
                    setInputCmd('');
                }
            }
        }, [executeCommand, inputCmd, commandHistory, historyIndex]);

        const promptText = isMobile ? 'arch:~$ ' : 'heyogesh@arch:~$ ';
        const terminalTitle = isMobile ? 'heyogesh: ~' : 'heyogesh@arch: ~ (interactive shell)';

        const quickButtons = [
            { label: 'whoami', cmd: 'whoami' },
            { label: 'philosophy', cmd: 'cat philosophy.txt' },
            { label: 'neofetch', cmd: 'neofetch' },
            { label: 'distros', cmd: 'distros' },
            { label: 'clear', cmd: 'clear' }
        ];

        const handleCopyAll = useCallback(() => {
            const allText = commandHistory.map((item) => `${promptText}${item.cmd}\n${item.output}`).join('\n\n');
            copyText(allText);
        }, [commandHistory, copyText, promptText]);

        return h(Fragment, null,
            // Terminal Header
            h('div', { className: 'terminal-header' },
                h('div', { className: 'terminal-dots', 'aria-hidden': 'true' },
                    h('span', { className: 't-dot t-dot-red' }),
                    h('span', { className: 't-dot t-dot-yellow' }),
                    h('span', { className: 't-dot t-dot-green' })
                ),
                h('div', { className: 'terminal-title' }, terminalTitle),
                h('button', {
                    className: `terminal-copy-btn ${isCopied ? 'copied' : ''}`,
                    onClick: handleCopyAll,
                    'aria-label': isCopied ? 'Copied to clipboard' : 'Copy terminal text',
                    type: 'button'
                },
                    isCopied ? ICONS.check() : ICONS.copy(),
                    h('span', { className: 'copy-text' }, isCopied ? 'Copied!' : 'Copy')
                )
            ),

            // Interactive Quick Action Buttons
            h('div', {
                className: 'terminal-quick-bar',
                'aria-label': 'Quick terminal commands'
            },
                quickButtons.map((item) =>
                    h('button', {
                        key: item.label,
                        onClick: () => executeCommand(item.cmd),
                        className: 'terminal-quick-btn',
                        type: 'button'
                    }, `$ ${item.label}`)
                )
            ),

            // Terminal Body
            h('div', {
                className: 'terminal-body',
                ref: terminalBodyRef,
                id: 'terminalBody',
                onClick: () => inputRef.current && inputRef.current.focus(),
                style: { cursor: 'text' }
            },
                commandHistory.map((item, index) =>
                    h('div', { key: `cmd-${index}`, style: { marginBottom: '12px' } },
                        h('div', { className: 'terminal-line' },
                            h('span', { className: 't-prompt' }, promptText),
                            h('span', { className: 't-cmd' }, item.cmd)
                        ),
                        h('div', {
                            className: `t-output ${item.isDim ? 't-dim' : ''}`,
                            style: { whiteSpace: 'pre-wrap', marginTop: '4px' }
                        }, item.output)
                    )
                ),

                // Live Active Prompt Line
                h('div', { className: 'terminal-line', style: { display: 'flex', alignItems: 'center', flexWrap: 'nowrap' } },
                    h('span', { className: 't-prompt' }, promptText),
                    h('input', {
                        ref: inputRef,
                        type: 'text',
                        value: inputCmd,
                        onChange: (e) => setInputCmd(e.target.value),
                        onKeyDown: handleKeyDown,
                        placeholder: isMobile ? 'tap above or type...' : 'type command (or click above)...',
                        'aria-label': 'Terminal command input',
                        className: 'terminal-input-field'
                    }),
                    h('span', { className: 't-cursor', 'aria-hidden': 'true' }, '_')
                )
            )
        );
    }

    /* ==========================================================================
       COMPONENT 3: DISTRO HOPPER SHOWCASE WITH REACT INSPECTOR
       ========================================================================== */
    function DistroHopper() {
        const [activeFilter, setActiveFilter] = useState('All');
        const [selectedDistro, setSelectedDistro] = useState(null);

        const distrosData = useMemo(() => [
            {
                name: 'Arch Linux',
                category: 'Arch / Rolling',
                kernel: 'Zen / Hardened',
                pkgManager: 'pacman + yay (AUR)',
                note: 'BTW, I used it. Mastered the manual install, partitioned drives by hand, broke the bootloader twice, and loved every minute.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('path', { d: 'M12 2.5L2 21.5h4.2l2.1-4.2h7.4l2.1 4.2H22L12 2.5zm0 5.8l2.6 5.2h-5.2L12 8.3z' })
                )
            },
            {
                name: 'Ubuntu',
                category: 'Debian Based',
                kernel: 'Generic Linux',
                pkgManager: 'apt / snap',
                note: 'The gateway drug to Linux. Reliable workhorse for spinning up test servers and quick containers.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('circle', { cx: 12, cy: 12, r: 9.5, fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 }),
                    h('circle', { cx: 12, cy: 4.5, r: 1.6 }),
                    h('circle', { cx: 5.5, cy: 16, r: 1.6 }),
                    h('circle', { cx: 18.5, cy: 16, r: 1.6 })
                )
            },
            {
                name: 'Fedora',
                category: 'RedHat / RPM',
                kernel: 'Latest Vanilla Linux',
                pkgManager: 'dnf',
                note: 'Bleeding-edge upstream GNOME and pristine Wayland integration. Excellent engineering playground.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('path', { d: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5S10 17.33 10 16.5V13H8.5c-.83 0-1.5-.67-1.5-1.5S7.67 10 8.5 10H10V8.5C10 6.57 11.57 5 13.5 5S17 6.57 17 8.5v2h-2.5c-.83 0-1.5.67-1.5 1.5v4.5z' })
                )
            },
            {
                name: 'Debian',
                category: 'Debian Based',
                kernel: 'LTS Stable',
                pkgManager: 'apt',
                note: 'Unshakable rock-solid stability. When you need a system that simply never dies, Debian is the default.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
                    h('path', { d: 'M12 2.5a9.5 9.5 0 1 0 9.5 9.5c0-4-2.8-7.2-6.5-7.2s-5.8 2.2-5.8 5.2c0 2.2 1.8 3.8 4 3.8s3.5-1.2 3.5-2.8c0-1-.8-1.8-1.8-1.8s-1.5.6-1.5 1.4' })
                )
            },
            {
                name: 'Kali Linux',
                category: 'Security & Forensics',
                kernel: 'Custom Penetration Kernel',
                pkgManager: 'apt',
                note: 'Security diagnostics and networking tools exploration. Learning defense by understanding how attacks operate.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('path', { d: 'M12.778 5.943s-1.97-.13-5.327.92c-3.42 1.07-5.36 2.587-5.36 2.587s5.098-2.847 10.852-3.008zm7.351 3.095l.257-.017s-1.468-1.78-4.278-2.648c1.58.642 2.954 1.493 4.021 2.665z' })
                )
            },
            {
                name: 'Manjaro',
                category: 'Arch / Rolling',
                kernel: 'Manjaro Curated',
                pkgManager: 'pamac / pacman',
                note: 'Arch foundation with curated package updates and out-of-the-box hardware detection drivers.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('rect', { x: 3, y: 3, width: 5, height: 18, rx: 1 }),
                    h('rect', { x: 10, y: 9, width: 5, height: 12, rx: 1 }),
                    h('rect', { x: 10, y: 3, width: 11, height: 4, rx: 1 }),
                    h('rect', { x: 16, y: 9, width: 5, height: 12, rx: 1 })
                )
            },
            {
                name: 'openSUSE',
                category: 'RedHat / RPM',
                kernel: 'Tumbleweed Rolling',
                pkgManager: 'zypper + YaST',
                note: 'YaST system control center and automated Btrfs snapshots. High respect for its administrative polish.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
                    h('path', { d: 'M10.724 0a12 12 0 0 0-9.448 4.623c1.464.391 2.5.727 2.81.832.005-.19.037-1.893.037-1.893s.004-.04.025-.06z' })
                )
            },
            {
                name: 'Linux Mint',
                category: 'Debian Based',
                kernel: 'Mint Ubuntu LTS',
                pkgManager: 'apt',
                note: 'Comfortable, zero-fuss desktop experience. The standard recommendation when introducing newcomers.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
                    h('rect', { x: 3, y: 3, width: 18, height: 18, rx: 5 }),
                    h('path', { d: 'M8 16V9a2 2 0 0 1 4 0v7m0-5a2 2 0 0 1 4 0v5' })
                )
            },
            {
                name: 'Pop!_OS',
                category: 'Debian Based',
                kernel: 'System76 Tuned',
                pkgManager: 'apt / flatpak',
                note: 'Auto-tiling COSMIC window management and seamless hybrid GPU switching for dev workloads.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
                    h('path', { d: 'M6 4h7a4 4 0 0 1 0 8H6v8' }),
                    h('line', { x1: 18, y1: 8, x2: 18, y2: 13 }),
                    h('circle', { cx: 18, cy: 17, r: 1, fill: 'currentColor' })
                )
            },
            {
                name: 'EndeavourOS',
                category: 'Arch / Rolling',
                kernel: 'Arch Linux Stock',
                pkgManager: 'pacman / yay',
                note: 'Pure Arch with a clean Calamares installer, terminal welcome app, and a warm, helpful community.',
                icon: h('svg', { viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' },
                    h('path', { d: 'M4 19l8-15 8 15-8-4-8 4z' })
                )
            }
        ], []);

        const filteredDistros = useMemo(() => {
            if (activeFilter === 'All') return distrosData;
            return distrosData.filter((d) => d.category === activeFilter);
        }, [distrosData, activeFilter]);

        const filterCategories = ['All', 'Arch / Rolling', 'Debian Based', 'RedHat / RPM', 'Security & Forensics'];

        return h(Fragment, null,
            h('div', { className: 'distros-header' },
                h('h3', { className: 'distros-title' },
                    h('span', { 'aria-hidden': 'true' }, '🐧 '),
                    'Distros Explored'
                ),
                h('p', { className: 'distros-subtitle' },
                    'An experimental journey through kernels, configs, and package managers (not claimed mastery).'
                ),

                // React Filter Pills
                h('div', {
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '6px',
                        justifyContent: 'center',
                        marginTop: '16px'
                    },
                    'aria-label': 'Filter distributions by family'
                },
                    filterCategories.map((cat) =>
                        h('button', {
                            key: cat,
                            onClick: () => setActiveFilter(cat),
                            style: {
                                padding: '5px 12px',
                                borderRadius: '999px',
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.74rem',
                                border: '1px solid',
                                borderColor: activeFilter === cat ? 'var(--dopamine-gold)' : 'rgba(255, 255, 255, 0.1)',
                                background: activeFilter === cat ? 'rgba(255, 214, 0, 0.14)' : 'rgba(255, 255, 255, 0.03)',
                                color: activeFilter === cat ? 'var(--dopamine-gold)' : 'var(--text-dim)',
                                cursor: 'pointer',
                                transition: 'all 160ms ease'
                            },
                            type: 'button'
                        }, cat)
                    )
                )
            ),

            // Distros Grid
            h('div', { className: 'distros-grid', style: { marginTop: '20px' } },
                filteredDistros.map((distro) => {
                    const isSelected = selectedDistro && selectedDistro.name === distro.name;
                    return h('div', {
                        key: distro.name,
                        className: 'distro-badge',
                        onClick: () => setSelectedDistro(isSelected ? null : distro),
                        style: {
                            cursor: 'pointer',
                            borderColor: isSelected ? 'var(--dopamine-gold)' : undefined,
                            boxShadow: isSelected ? '0 0 16px rgba(255, 214, 0, 0.25)' : undefined
                        },
                        role: 'button',
                        tabIndex: 0,
                        'aria-pressed': isSelected,
                        onKeyDown: (e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                setSelectedDistro(isSelected ? null : distro);
                            }
                        }
                    },
                        distro.icon,
                        h('span', null, distro.name)
                    );
                })
            ),

            // Selected Distro React Inspector Card
            selectedDistro && h('div', {
                style: {
                    marginTop: '20px',
                    padding: '16px 20px',
                    borderRadius: '14px',
                    background: 'rgba(13, 16, 26, 0.85)',
                    border: '1px solid rgba(255, 214, 0, 0.35)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.6)',
                    animation: 'enterSoft 280ms ease forwards',
                    textAlign: 'left'
                }
            },
                h('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' } },
                    h('div', { style: { display: 'flex', alignItems: 'center', gap: '8px' } },
                        h('span', { style: { color: 'var(--dopamine-gold)', fontWeight: 800, fontFamily: 'var(--font-mono)' } }, `> ${selectedDistro.name}`),
                        h('span', {
                            style: {
                                fontSize: '0.72rem',
                                padding: '2px 8px',
                                borderRadius: '999px',
                                background: 'rgba(0, 245, 255, 0.12)',
                                border: '1px solid rgba(0, 245, 255, 0.3)',
                                color: 'var(--dopamine-cyan)',
                                fontFamily: 'var(--font-mono)'
                            }
                        }, selectedDistro.category)
                    ),
                    h('button', {
                        onClick: () => setSelectedDistro(null),
                        style: {
                            background: 'transparent',
                            border: 'none',
                            color: 'var(--text-dim)',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center'
                        },
                        'aria-label': 'Close distro details',
                        type: 'button'
                    }, ICONS.close())
                ),
                h('p', { style: { color: 'var(--text-vibrant)', fontSize: '0.92rem', margin: '0 0 10px', lineHeight: 1.6 } }, selectedDistro.note),
                h('div', { style: { display: 'flex', flexWrap: 'wrap', gap: '14px', fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' } },
                    h('span', null, `Package Manager: `, h('strong', { style: { color: '#ffffff' } }, selectedDistro.pkgManager)),
                    h('span', null, `Kernel flavor: `, h('strong', { style: { color: '#ffffff' } }, selectedDistro.kernel))
                )
            )
        );
    }

    /* ==========================================================================
       COMPONENT 4: REACTIVE NAVIGATION CONTROLLER
       ========================================================================== */
    function ReactiveNavigation() {
        const [isOpen, setIsOpen] = useState(false);
        const [isScrolled, setIsScrolled] = useState(false);
        const { progress, scrollY } = useScrollProgress();

        // Keep body overflow in sync with mobile menu
        useEffect(() => {
            if (isOpen) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }, [isOpen]);

        // Track scroll position for header glassmorphism
        useEffect(() => {
            setIsScrolled(scrollY > 35);
        }, [scrollY]);

        // Escape key closes menu
        useEffect(() => {
            function handleKeyDown(e) {
                if (e.key === 'Escape' && isOpen) {
                    setIsOpen(false);
                }
            }
            window.addEventListener('keydown', handleKeyDown);
            return () => window.removeEventListener('keydown', handleKeyDown);
        }, [isOpen]);

        // Resize closes menu on tablet/desktop
        useEffect(() => {
            function handleResize() {
                if (window.innerWidth > 780 && isOpen) {
                    setIsOpen(false);
                }
            }
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }, [isOpen]);

        const closeMenu = useCallback(() => setIsOpen(false), []);
        const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

        // Sync with existing DOM elements if present
        useEffect(() => {
            const navElement = document.getElementById('nav');
            const navToggle = document.getElementById('navToggle');
            const navLinks = document.getElementById('navLinks');
            const navBackdrop = document.getElementById('navBackdrop');
            const scrollBar = document.getElementById('scrollProgress');

            if (scrollBar) {
                scrollBar.style.width = `${progress}%`;
            }

            if (navElement) {
                navElement.classList.toggle('scrolled', isScrolled);
            }

            if (navLinks && navToggle) {
                navLinks.classList.toggle('active', isOpen);
                navToggle.classList.toggle('active', isOpen);
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            }

            if (navBackdrop) {
                navBackdrop.classList.toggle('active', isOpen);
            }
        }, [isOpen, isScrolled, progress]);

        // Wire native DOM listeners to React state
        useEffect(() => {
            const navToggle = document.getElementById('navToggle');
            const navBackdrop = document.getElementById('navBackdrop');
            const navLinks = document.getElementById('navLinks');

            function onToggleClick(e) {
                e.stopPropagation();
                toggleMenu();
            }

            function onCloseClick(e) {
                e.stopPropagation();
                closeMenu();
            }

            if (navToggle) navToggle.addEventListener('click', onToggleClick);
            if (navBackdrop) navBackdrop.addEventListener('click', onCloseClick);

            if (navLinks) {
                const links = navLinks.querySelectorAll('.nav-link');
                links.forEach((l) => l.addEventListener('click', closeMenu));
            }

            return () => {
                if (navToggle) navToggle.removeEventListener('click', onToggleClick);
                if (navBackdrop) navBackdrop.removeEventListener('click', onCloseClick);
            };
        }, [toggleMenu, closeMenu]);

        return null;
    }

    /* ==========================================================================
       COMPONENT 5: REACTIVE BACK-TO-TOP WITH PROGRESS RING
       ========================================================================== */
    function ReactiveBackToTop() {
        const { progress, scrollY } = useScrollProgress();
        const isVisible = scrollY > 480;

        const scrollToTop = useCallback(() => {
            window.scrollTo({
                top: 0,
                behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
            });
        }, []);

        const radius = 18;
        const circumference = 2 * Math.PI * radius;
        const strokeDashoffset = circumference - (progress / 100) * circumference;

        return h('button', {
            className: `back-to-top ${isVisible ? 'visible' : ''}`,
            onClick: scrollToTop,
            'aria-label': 'Scroll back to top',
            type: 'button'
        },
            h('svg', {
                width: 44,
                height: 44,
                viewBox: '0 0 44 44',
                style: {
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    transform: 'rotate(-90deg)',
                    pointerEvents: 'none'
                },
                'aria-hidden': 'true'
            },
                h('circle', {
                    cx: 22,
                    cy: 22,
                    r: radius,
                    fill: 'none',
                    stroke: 'rgba(255, 255, 255, 0.08)',
                    strokeWidth: 2
                }),
                h('circle', {
                    cx: 22,
                    cy: 22,
                    r: radius,
                    fill: 'none',
                    stroke: 'var(--dopamine-gold)',
                    strokeWidth: 2.2,
                    strokeDasharray: circumference,
                    strokeDashoffset: strokeDashoffset,
                    strokeLinecap: 'round',
                    style: { transition: 'stroke-dashoffset 80ms linear' }
                })
            ),
            ICONS.arrowUp()
        );
    }

    /* ==========================================================================
       COMPONENT 6: REACTIVE INTERACTIVE QUOTE
       ========================================================================== */
    function ReactiveQuote() {
        const { isCopied, copyText } = useClipboard(2200);
        const quote = "Build it. Break it. Understand it.";

        return h(Fragment, null,
            h('div', { className: 'quote-mark', 'aria-hidden': 'true' }, '“'),
            h('p', { className: 'quote-text' }, quote),
            h('cite', { className: 'quote-author' }, "Yogesh Yadav • That's my vibe."),
            h('div', {
                onClick: (e) => {
                    e.stopPropagation();
                    copyText(quote);
                },
                style: {
                    marginTop: '12px',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.74rem',
                    fontFamily: 'var(--font-mono)',
                    color: isCopied ? 'var(--dopamine-gold)' : 'var(--text-dim)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'color 180ms ease'
                }
            },
                isCopied ? ICONS.check() : ICONS.copy(),
                h('span', null, isCopied ? 'Quote copied to clipboard!' : 'Click quote to copy')
            )
        );
    }

    /* ==========================================================================
       COMPONENT 7: HERO STATUS BADGE REACTIVITY
       ========================================================================== */
    function HeroStatusBadge() {
        const [ping, setPing] = useState(24);

        useEffect(() => {
            const interval = setInterval(() => {
                setPing(18 + Math.floor(Math.random() * 14));
            }, 3000);
            return () => clearInterval(interval);
        }, []);

        return h(Fragment, null,
            h('span', { className: 'hero-avatar-badge-dot', 'aria-hidden': 'true' }),
            h('span', { className: 'hero-avatar-badge-text' }, `ONLINE // EXPERIMENTING [${ping}ms]`)
        );
    }

    /* ==========================================================================
       REACT APPLICATION MOUNTING & HYDRATION
       ========================================================================== */
    function initializeReactApp() {
        // 1. Mount Typewriter Hero
        const typewriterContainer = document.getElementById('heroTypewriter');
        if (typewriterContainer) {
            const root = ReactDOM.createRoot(typewriterContainer);
            root.render(h(TypewriterHero));
        }

        // 2. Mount Interactive Terminal
        const terminalMount = document.querySelector('.terminal-card');
        if (terminalMount) {
            const root = ReactDOM.createRoot(terminalMount);
            root.render(h(InteractiveTerminal));
        }

        // 3. Mount Distro Hopper Showcase
        const distrosSection = document.querySelector('.distros-section');
        if (distrosSection) {
            const root = ReactDOM.createRoot(distrosSection);
            root.render(h(DistroHopper));
        }

        // 4. Mount Reactive Quote
        const quoteBlock = document.querySelector('.quote-block');
        if (quoteBlock) {
            const root = ReactDOM.createRoot(quoteBlock);
            root.render(h(ReactiveQuote));
        }

        // 5. Mount Hero Avatar Status Badge
        const heroBadge = document.querySelector('.hero-avatar-badge');
        if (heroBadge) {
            const root = ReactDOM.createRoot(heroBadge);
            root.render(h(HeroStatusBadge));
        }

        // 6. Mount Reactive Back-to-Top
        const backToTopBtn = document.getElementById('backToTop');
        if (backToTopBtn) {
            const root = ReactDOM.createRoot(backToTopBtn);
            root.render(h(ReactiveBackToTop));
        }

        // 7. Mount Reactive Navigation Controller
        const navContainer = document.createElement('div');
        navContainer.id = 'react-nav-controller';
        document.body.appendChild(navContainer);
        const navRoot = ReactDOM.createRoot(navContainer);
        navRoot.render(h(ReactiveNavigation));

        console.log('⚡ Yogesh Yadav Personal Site: Massive React 18 Architecture Initialized.');
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeReactApp);
    } else {
        initializeReactApp();
    }
})();
