export function initSidebarMenu() {
    const btn = document.querySelector(".nav-toggle");
    const sidebar = document.querySelector(".sidebar-nav");
    const overlay = document.querySelector(".sidebar-overlay");

    if (!btn || !sidebar || !overlay) return;

    const openMenu = () => {
        sidebar.classList.add("open");
        overlay.classList.add("open");
        document.body.classList.add("menu-open");
    };

    const closeMenu = () => {
        sidebar.classList.remove("open");
        overlay.classList.remove("open");
        document.body.classList.remove("menu-open");
    };

    btn.addEventListener("click", openMenu);
    overlay.addEventListener("click", closeMenu);

    sidebar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            closeMenu();

            // small delay ensures UI closes first
            setTimeout(() => {
                window.location.href = href;
            }, 50);
        });
    });
}

