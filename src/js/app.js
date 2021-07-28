const btn = document.querySelector('.popover-btn');

btn.addEventListener('click', () => {
  const popoverElem = document.querySelector('.popover');
  popoverElem.classList.toggle('hidden');
  popoverElem.style.width = `${btn.offsetWidth + 20}px`;
  const { top, left } = btn.getBoundingClientRect();
  popoverElem.style.top = `${window.scrollY + top - popoverElem.offsetHeight}px`;
  popoverElem.style.left = `${window.scrollX + left - 10}px`;
});
