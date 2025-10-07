const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
document.querySelectorAll('.read-more').forEach(el => {
  el.addEventListener('click', () => {
    const p = el.parentElement;
    p.textContent = "Burada tam təsvir göstəriləcək..."; // Daha sonra real mətn əlavə edə bilərsən
  });
});
const filterButtons = document.querySelectorAll('.tags-filter button');
const seriesCards = document.querySelectorAll('.series-card');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tag = btn.dataset.tag;
    seriesCards.forEach(card => {
      const tags = card.dataset.tags.split(',');
      if(tag === 'all' || tags.includes(tag)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
  const adultBtn = document.getElementById('confirm-adult');
if(adultBtn){
  adultBtn.addEventListener('click', () => {
    document.getElementById('adult-warning').style.display = 'none';
  });
}
});
