
let selector = document.querySelectorAll('[data-bs-target]');
selector.forEach(element => {
  const target = element.getAttribute('data-bs-target');
  const targetElement = document.querySelector(target);
  element.addEventListener('click', () => {
    targetElement.classList.toggle('show');
  })
})