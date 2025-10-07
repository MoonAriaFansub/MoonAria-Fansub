/* ==========================
   Hamburger Menyu (Mobil)
========================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

/* ==========================
   "Read More" Funksiyası
========================== */
document.querySelectorAll('.read-more').forEach(el => {
  el.addEventListener('click', () => {
    const p = el.parentElement;
    // Burada tam təsviri göstərəcək (sonradan real mətn əlavə et)
    p.textContent = "Burada tam təsvir göstəriləcək. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Seriya haqqında daha çox məlumat burada olacaq...";
  });
});

/* ==========================
   Seriya Filter Funksiyası
========================== */
const filterButtons = document.querySelectorAll('.tags-filter button');
const seriesCards = document.querySelectorAll('.series-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag; // Button-un data-tag atributunu oxuyur
    seriesCards.forEach(card => {
      const tags = card.dataset.tags.split(','); // Card-un data-tags atributunu oxuyur
      if(tag === 'all' || tags.includes(tag)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

/* ==========================
   18+ Modal Funksiyası
========================== */
const adultBtn = document.getElementById('confirm-adult');
if(adultBtn) {
  adultBtn.addEventListener('click', () => {
    const modal = document.getElementById('adult-warning');
    if(modal) {
      modal.style.display = 'none';
    }
  });
}
