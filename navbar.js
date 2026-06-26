const navbarHTML = `
  <nav class="fixed w-full z-50 top-0 transition-all duration-300 bg-white dark:bg-slate-950 text-[#2F5D50] dark:text-white shadow-md border-b border-gray-100 dark:border-slate-800">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10">
      <div class="flex justify-between items-center h-24">
        
        <a href="index.html" class="relative z-[60] flex items-center gap-3 group shrink-0">
                    <div class="w-11 h-11 rounded-full border-2 border-sage flex items-center justify-center text-sage group-hover:bg-sage group-hover:text-black transition-colors shadow-lg shadow-sage/20">
                        <i class="fa-solid fa-leaf text-lg"></i>
                    </div>
                    <div class="flex flex-col">
                        <span class="text-xl font-black tracking-tight text-forest dark:text-white uppercase transition-colors">
                            Eco<span class="text-sage">Retreat</span>
                        </span>
                        <span class="text-[9px] tracking-[0.2em] uppercase text-slate-500 dark:text-slate-400 font-bold leading-none mt-1">
                            Luxury Glamping
                        </span>
                    </div>
                </a>

        <div class="hidden xl:flex items-center gap-0 xl:gap-1">
          
          <div class="relative group h-24 flex items-center">
            <button class="flex items-center gap-1.5 px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white group-hover:text-[#8FAF8A] dark:group-hover:text-[#8FAF8A] transition-colors duration-300 uppercase focus:outline-none h-full">
              Home <i class="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            <div class="absolute top-24 left-0 w-48 bg-white dark:bg-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-black/50 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#8FAF8A]">
              <div class="py-2">
                <a href="index.html" class="block px-5 py-2.5 text-sm font-semibold text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A]/10 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors">Home 1</a>
                <a href="home2.html" class="block px-5 py-2.5 text-sm font-semibold text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A]/10 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors">Home 2</a>
              </div>
            </div>
          </div>
          <a href="about.html" class="px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors duration-300 uppercase h-full flex items-center">About</a>
          <a href="glamping.html" class="px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors duration-300 uppercase h-full flex items-center">Glamping</a>
          <a href="villas.html" class="px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors duration-300 uppercase h-full flex items-center">Villas</a>
          <a href="experiences.html" class="px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors duration-300 uppercase h-full flex items-center">Experiences</a>
          <a href="contact.html" class="px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors duration-300 uppercase h-full flex items-center">Contact</a>

          <div class="relative group h-24 flex items-center">
            <button class="flex items-center gap-1.5 px-2 xl:px-2.5 text-xs xl:text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white group-hover:text-[#8FAF8A] dark:group-hover:text-[#8FAF8A] transition-colors duration-300 uppercase focus:outline-none h-full">
              Dashboard <i class="fa-solid fa-chevron-down text-[10px]"></i>
            </button>
            <div class="absolute top-24 left-0 w-48 bg-white dark:bg-slate-900 shadow-[0_10px_25px_rgba(0,0,0,0.1)] dark:shadow-black/50 rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border-t-4 border-[#8FAF8A]">
              <div class="py-2">
                <a href="user.html" class="block px-5 py-2.5 text-sm font-semibold text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A]/10 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors">User</a>
                <a href="admin.html" class="block px-5 py-2.5 text-sm font-semibold text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A]/10 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] transition-colors">Admin</a>
              </div>
            </div>
          </div>

        </div>

        <div class="hidden xl:flex items-center gap-2 xl:gap-3">
          <div class="flex items-center gap-1.5 xl:gap-2 border-r border-gray-200 dark:border-slate-700 pr-2 xl:pr-3">
            <button id="theme-toggle" class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A] hover:text-white dark:hover:bg-[#8FAF8A] dark:hover:text-black transition-colors" aria-label="Toggle Dark Mode">
              <i class="fa-solid fa-moon" id="theme-icon"></i>
            </button>
            <button id="rtl-toggle" class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 dark:bg-slate-800 text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A] hover:text-white dark:hover:bg-[#8FAF8A] dark:hover:text-black transition-colors text-xs font-bold tracking-wider" aria-label="Toggle RTL">
              RTL
            </button>
          </div>
          <a href="login.html" class="px-4 xl:px-5 py-2.5 border-2 border-[#8FAF8A] text-[#8FAF8A] font-bold text-sm tracking-widest uppercase hover:bg-[#8FAF8A] hover:text-white dark:hover:text-black transition-colors duration-300 whitespace-nowrap">Log In</a>
          
          <a href="signup.html" class="flex items-center justify-center gap-2 px-5 xl:px-6 py-3 bg-[#8FAF8A] text-white dark:text-black font-bold text-sm tracking-widest uppercase hover:bg-[#2F5D50] dark:hover:bg-white transition-colors duration-300 shadow-[0_4px_14px_0_rgba(143,175,138,0.39)] whitespace-nowrap">
            Sign Up
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        <div class="xl:hidden flex items-center z-50 relative">
          <button id="mobile-menu-btn" class="text-[#2F5D50] dark:text-white hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] focus:outline-none transition-colors duration-300 p-2">
            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="menu-icon-path" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div id="mobile-menu" class="hidden xl:hidden bg-white dark:bg-slate-950 border-t border-gray-100 dark:border-slate-800 absolute w-full left-0 shadow-2xl max-h-screen overflow-y-auto pb-24">
      
      <div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-900/50">
        <span class="text-xs font-bold tracking-widest text-[#8FAF8A] uppercase">Preferences</span>
        <div class="flex items-center space-x-3">
          <button id="mobile-theme-toggle" class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-slate-800 text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A] hover:text-white dark:hover:bg-[#8FAF8A] dark:hover:text-black transition-colors">
            <i class="fa-solid fa-moon" id="mobile-theme-icon"></i>
          </button>
          <button id="mobile-rtl-toggle" class="w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-slate-800 text-[#2F5D50] dark:text-white hover:bg-[#8FAF8A] hover:text-white dark:hover:bg-[#8FAF8A] dark:hover:text-black text-xs font-bold transition-colors">
            RTL
          </button>
        </div>
      </div>

      <div class="px-6 pt-4 pb-8 space-y-2">
        
        <div class="mobile-submenu-group">
          <button class="mobile-submenu-toggle flex items-center justify-between w-full px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">
            Home Options
            <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300"></i>
          </button>
          <div class="mobile-submenu hidden space-y-1 mt-1">
            <a href="index.html" class="block px-4 py-2.5 pl-8 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase border-l-2 border-[#8FAF8A]/30 ml-4">Home 1</a>
            <a href="home2.html" class="block px-4 py-2.5 pl-8 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase border-l-2 border-[#8FAF8A]/30 ml-4">Home 2</a>
          </div>
        </div>

        <div class="h-px bg-gray-100 dark:bg-slate-800"></div>

        <a href="about.html" class="block px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">About</a>
        <a href="glamping.html" class="block px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">Glamping</a>
        <a href="villas.html" class="block px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">Villas</a>
        <a href="experiences.html" class="block px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">Experiences</a>
        <a href="contact.html" class="block px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">Contact</a>

        <div class="h-px bg-gray-100 dark:bg-slate-800"></div>

        <div class="mobile-submenu-group">
          <button class="mobile-submenu-toggle flex items-center justify-between w-full px-4 py-3 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase">
            Dashboard
            <i class="fa-solid fa-chevron-down text-[10px] transition-transform duration-300"></i>
          </button>
          <div class="mobile-submenu hidden space-y-1 mt-1">
            <a href="user.html" class="block px-4 py-2.5 pl-8 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase border-l-2 border-[#8FAF8A]/30 ml-4">User</a>
            <a href="admin.html" class="block px-4 py-2.5 pl-8 text-sm font-semibold tracking-wide text-[#2F5D50] dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-[#8FAF8A] dark:hover:text-[#8FAF8A] rounded-lg transition-colors uppercase border-l-2 border-[#8FAF8A]/30 ml-4">Admin</a>
          </div>
        </div>

        <div class="pt-6 pb-2 space-y-3">
          <a href="login.html" class="block w-full text-center px-4 py-3 border-2 border-[#2F5D50] dark:border-white text-[#2F5D50] dark:text-white font-bold text-sm tracking-widest uppercase hover:bg-[#2F5D50] hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors shadow-sm">
            Log In
          </a>
          <a href="signup.html" class="block w-full text-center px-6 py-4 bg-[#8FAF8A] text-white dark:text-black font-bold text-sm tracking-widest uppercase hover:bg-[#2F5D50] dark:hover:bg-white transition-colors shadow-lg">
            Sign Up
          </a>
        </div>

      </div>
    </div>
  </nav>
`;

// Inject the HTML into the DOM
document.getElementById('navbar').innerHTML = navbarHTML;

// Interactivity Logic
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  const iconPath = document.getElementById('menu-icon-path');

  // Mobile Menu Toggle
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    
    // Toggle between Hamburger icon and X icon
    if (menu.classList.contains('hidden')) {
      iconPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); 
      document.body.style.overflow = ''; // Restore scrolling
    } else {
      iconPath.setAttribute('d', 'M6 18L18 6M6 6l12 12'); 
      document.body.style.overflow = 'hidden'; // Prevent background scrolling when menu is open
    }
  });

  // RTL Toggle Logic
  const handleRTLToggle = () => {
    const htmlEl = document.documentElement;
    const isRTL = htmlEl.getAttribute('dir') === 'rtl';
    
    htmlEl.setAttribute('dir', isRTL ? 'ltr' : 'rtl');
    
    // Update button texts
    document.getElementById('rtl-toggle').innerText = isRTL ? 'RTL' : 'LTR';
    document.getElementById('mobile-rtl-toggle').innerText = isRTL ? 'RTL' : 'LTR';
  };

  document.getElementById('rtl-toggle').addEventListener('click', handleRTLToggle);
  document.getElementById('mobile-rtl-toggle').addEventListener('click', handleRTLToggle);

  // Theme Toggle Logic
  const htmlEl = document.documentElement;
  const desktopIcon = document.getElementById('theme-icon');
  const mobileIcon = document.getElementById('mobile-theme-icon');

  // Helper function to update icons based on current theme
  const updateThemeIcons = (isDark) => {
    if (isDark) {
      desktopIcon.className = 'fa-solid fa-sun';
      mobileIcon.className = 'fa-solid fa-sun';
    } else {
      desktopIcon.className = 'fa-solid fa-moon';
      mobileIcon.className = 'fa-solid fa-moon';
    }
  };

  // Initialize theme from localStorage (default light)
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    htmlEl.classList.add('dark');
  } else {
    htmlEl.classList.remove('dark');
  }
  updateThemeIcons(htmlEl.classList.contains('dark'));

  const handleThemeToggle = () => {
    htmlEl.classList.toggle('dark');
    const isDark = htmlEl.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcons(isDark);
  };

  document.getElementById('theme-toggle').addEventListener('click', handleThemeToggle);
  document.getElementById('mobile-theme-toggle').addEventListener('click', handleThemeToggle);

  // Mobile Submenu Toggles
  document.querySelectorAll('.mobile-submenu-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const submenu = btn.nextElementSibling;
      const icon = btn.querySelector('.fa-chevron-down');
      submenu.classList.toggle('hidden');
      icon.style.transform = submenu.classList.contains('hidden') ? '' : 'rotate(180deg)';
    });
  });

  // NAVLINK HIGHLIGHT
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navbar a').forEach((link) => {
    if (link.getAttribute('href') === page) {
      link.classList.add('text-[#8FAF8A]', 'dark:text-[#8FAF8A]');
      const parentBtn = link.closest('.absolute')?.closest('.relative')?.querySelector('button');
      if (parentBtn) parentBtn.classList.add('text-[#8FAF8A]', 'dark:text-[#8FAF8A]');
      const toggleBtn = link.closest('.mobile-submenu')?.closest('.mobile-submenu-group')?.querySelector('.mobile-submenu-toggle');
      if (toggleBtn) toggleBtn.classList.add('text-[#8FAF8A]', 'dark:text-[#8FAF8A]');
    }
  });
});