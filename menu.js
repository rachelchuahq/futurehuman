// Mobile Menu Auto-Injector
window.addEventListener('DOMContentLoaded', () => {
    // 1. Find Header
    const header = document.querySelector('header');
    if (!header) return;

    // 2. Check if button already exists
    if (document.getElementById('mobile-menu-btn')) return;

    // 3. Find the action button container in the header
    const actionContainer = header.querySelector('.flex.items-center.gap-3') || header.querySelector('div.flex.items-center.gap-md') || header.querySelector('.flex.items-center.gap-4');
    if (!actionContainer) return;

    // 4. Create Hamburger Button
    const menuBtn = document.createElement('button');
    menuBtn.id = 'mobile-menu-btn';
    menuBtn.className = 'md:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors flex items-center justify-center cursor-pointer';
    menuBtn.setAttribute('aria-label', 'Open Menu');
    menuBtn.innerHTML = '<span class="material-symbols-outlined text-[24px]">menu</span>';
    
    // Append to action container
    actionContainer.appendChild(menuBtn);

    // 5. Create Mobile Drawer Overlay
    const drawer = document.createElement('div');
    drawer.id = 'mobile-drawer';
    drawer.className = 'fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm hidden transition-opacity duration-300 opacity-0';
    drawer.innerHTML = `
        <div class="w-64 bg-surface min-h-screen flex flex-col p-6 space-y-6 shadow-2xl transition-transform duration-300 -translate-x-full text-on-surface">
            <div class="flex justify-between items-center border-b border-outline-variant pb-4">
                <img src="logo.png" alt="Future Human Logo" class="h-8 w-auto object-contain">
                <button id="close-drawer-btn" class="p-1 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors flex items-center justify-center cursor-pointer">
                    <span class="material-symbols-outlined text-[20px]">close</span>
                </button>
            </div>
            <nav class="flex flex-col space-y-4 font-bold text-base">
                <a class="mobile-nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low" href="index.html">
                    <span class="material-symbols-outlined text-[20px]">calculate</span> Calculator
                </a>
                <a class="mobile-nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low" href="protocols.html">
                    <span class="material-symbols-outlined text-[20px]">assignment</span> Protocols
                </a>
                <a class="mobile-nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low" href="basics.html">
                    <span class="material-symbols-outlined text-[20px]">school</span> Peptide Basics
                </a>
                <a class="mobile-nav-link text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 p-2 rounded-lg hover:bg-surface-container-low" href="why_research.html">
                    <span class="material-symbols-outlined text-[20px]">help</span> Research Info
                </a>
            </nav>
            <div class="pt-6 border-t border-outline-variant space-y-4">
                <button class="inquire-btn w-full px-4 py-2.5 bg-primary text-on-primary text-sm font-bold rounded-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-sm cursor-pointer text-center">
                    Contact Us
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(drawer);

    // 6. Wire Events
    const drawerInner = drawer.querySelector('div');
    
    const openDrawer = () => {
        drawer.classList.remove('hidden');
        setTimeout(() => {
            drawer.classList.remove('opacity-0');
            drawerInner.classList.remove('-translate-x-full');
        }, 10);
    };

    const closeDrawer = () => {
        drawer.classList.add('opacity-0');
        drawerInner.classList.add('-translate-x-full');
        setTimeout(() => {
            drawer.classList.add('hidden');
        }, 300);
    };

    menuBtn.addEventListener('click', openDrawer);
    drawer.querySelector('#close-drawer-btn').addEventListener('click', closeDrawer);
    
    // Close on overlay click
    drawer.addEventListener('click', (e) => {
        if (e.target === drawer) closeDrawer();
    });

    // Wire contact button inside mobile menu
    drawer.querySelectorAll('.inquire-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            closeDrawer();
            const modal = document.getElementById('research-access-modal');
            if (modal) {
                modal.showModal();
            } else {
                alert('Peptide Sourcing Inquiries:\n\nTo inquire about research materials or check batch-specific documentation availability, please email: sourcing@futurehuman.local');
            }
        });
    });
});
