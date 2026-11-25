// Project filter
document.querySelectorAll('.filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    const f = btn.dataset.filter;
    document.querySelectorAll('.card').forEach(card => {
      const show = f === 'all' || card.dataset.tags.split(' ').includes(f);
      card.classList.toggle('hidden', !show);
    });
  });
});

// Figure lightbox
const box = document.getElementById('lightbox');
const boxImg = box.querySelector('img');
document.querySelectorAll('.zoom').forEach(btn => {
  btn.addEventListener('click', () => {
    const img = btn.querySelector('img');
    boxImg.src = btn.dataset.src;
    boxImg.alt = img.alt;
    box.showModal();
  });
});
box.querySelector('.close').addEventListener('click', () => box.close());
box.addEventListener('click', e => { if (e.target === box) box.close(); });
