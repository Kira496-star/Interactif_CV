document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => mobileMenu.classList.add('hidden'));
    });
  }

  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-cyan-500', 'text-slate-950', 'font-semibold');
        b.classList.add('glass-card', 'text-slate-300');
      });

      btn.classList.remove('glass-card', 'text-slate-300');
      btn.classList.add('bg-cyan-500', 'text-slate-950', 'font-semibold');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => card.style.opacity = '1', 50);
        } else {
          card.style.opacity = '0';
          setTimeout(() => card.style.display = 'none', 300);
        }
      });
    });
  });

  const modal = document.getElementById('project-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');
  const modalTech = document.getElementById('modal-tech');
  const closeModal = document.getElementById('close-modal');

  document.querySelectorAll('.open-modal').forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-title');
      const desc = btn.getAttribute('data-desc');
      const tech = btn.getAttribute('data-tech').split(', ');

      modalTitle.textContent = title;
      modalDesc.textContent = desc;
      
      modalTech.innerHTML = '';
      tech.forEach(t => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 text-xs rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/50';
        span.textContent = t;
        modalTech.appendChild(span);
      });

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeMod = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  };

  if (closeModal) closeModal.addEventListener('click', closeMod);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeMod();
    });
  }

  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = 'Message Sent Successfully!';
        submitBtn.classList.remove('bg-cyan-500', 'hover:bg-cyan-400');
        submitBtn.classList.add('bg-emerald-500', 'text-slate-950');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
          submitBtn.classList.remove('bg-emerald-500');
          submitBtn.classList.add('bg-cyan-500', 'hover:bg-cyan-400');
        }, 4000);
      }, 1200);
    });
  }
});
