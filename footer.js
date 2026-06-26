// EcoRetreat Boutique Eco-Resort & Luxury Glamping Footer
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-500 bg-[#F8F5F0] border-t border-[#8FAF8A]/30">
  
  <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
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
                <br>
      
      <p class="text-sm font-medium text-[#2C3E35]/80 leading-relaxed mb-8">
        Escape the ordinary. Experience sustainable luxury and breathtaking nature at our premier eco-resort and glamping sanctuary. Disconnect to reconnect.
      </p>
      
      <div class="mt-8 flex gap-3">
        <a href="#" aria-label="Instagram" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-[#2C3E35]/5 border border-[#8FAF8A]/30 text-[#8FAF8A] transition-all duration-300 hover:bg-[#8FAF8A] hover:border-[#8FAF8A] hover:text-[#FFFFFF] shadow-sm">
          <i class="fa-brands fa-instagram text-lg"></i>
        </a>
        <a href="#" aria-label="Facebook" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-[#2C3E35]/5 border border-[#8FAF8A]/30 text-[#8FAF8A] transition-all duration-300 hover:bg-[#8FAF8A] hover:border-[#8FAF8A] hover:text-[#FFFFFF] shadow-sm">
          <i class="fa-brands fa-facebook-f text-lg"></i>
        </a>
        <a href="#" aria-label="Twitter" class="social-icon w-10 h-10 flex items-center justify-center rounded-xl bg-[#2C3E35]/5 border border-[#8FAF8A]/30 text-[#8FAF8A] transition-all duration-300 hover:bg-[#8FAF8A] hover:border-[#8FAF8A] hover:text-[#FFFFFF] shadow-sm">
          <i class="fa-brands fa-x-twitter text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#8FAF8A] border-b-2 inline-block pb-2 border-[#8FAF8A]/30">Explore</h3>
      <ul class="space-y-3 text-sm font-semibold">
        <li><a href="glamping.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Luxury Glamping</a></li>
        <li><a href="resort.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Eco Villas</a></li>
        <li><a href="experiences.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Experiences</a></li>
        <li><a href="sustainability.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Our Ethos</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#8FAF8A] border-b-2 inline-block pb-2 border-[#8FAF8A]/30"> Portal</h3>
      <ul class="space-y-3 text-sm font-semibold">
        <li><a href="profile.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">My Profile</a></li>
        <li><a href="bookings.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">My Bookings</a></li>
        <li><a href="login.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Guest Login</a></li>
        <li><a href="contact.html" class="footer-link block text-[#2C3E35]/80 transition-all duration-300">Contact Us</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-4">
      <h3 class="text-sm font-black mb-6 uppercase tracking-widest text-[#8FAF8A] border-b-2 inline-block pb-2 border-[#8FAF8A]/30">Join The Wild</h3>
      <p class="text-sm font-medium text-[#2C3E35]/80 mb-5 leading-relaxed">
        Subscribe to receive exclusive retreat offers, seasonal experience guides, and early access to our luxury villa bookings.
      </p>

      <form class="flex flex-col gap-3" id="newsletterForm">
        <div class="relative">
          <input type="email" required placeholder="Enter your email address..." class="w-full px-4 py-3.5 rounded-xl bg-[#2C3E35]/5 text-[#2C3E35] border border-[#8FAF8A]/30 focus:outline-none focus:border-[#8FAF8A] transition-all font-medium text-sm shadow-sm backdrop-blur-sm">
        </div>
        <button type="submit" class="w-full py-3.5 rounded-xl font-bold tracking-widest uppercase text-sm bg-[#8FAF8A] text-[#FFFFFF] transition-all duration-300 hover:bg-[#2C3E35] shadow-[0_4px_14px_0_rgba(143,175,138,0.39)] flex items-center justify-center gap-2">
          <span>Subscribe Now</span>
          <i class="fa-solid fa-paper-plane text-xs"></i>
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-[#8FAF8A]/30 bg-[#F0EBE3] transition-colors duration-500">
    <div class="max-w-[1440px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.15em] font-bold text-[#2C3E35]/60">
      
      <p>© ${new Date().getFullYear()} EcoRetreat Luxury Glamping. All rights reserved.</p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#2C3E35] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#2C3E35] transition-colors duration-300">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    .footer-link:hover {
      color: #8FAF8A !important;
      transform: translateX(6px);
    }

    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #newsletterForm input::placeholder {
      color: rgba(44, 62, 53, 0.5);
    }
  `;
  document.head.appendChild(footerStyles);

  // Form Logic
  const form = document.getElementById('newsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // Toast notification or standard alert
      alert('Welcome to the wild! You are now subscribed to EcoRetreat updates.');
      form.reset();
    });
  }
});