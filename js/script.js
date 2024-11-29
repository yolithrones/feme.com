// JavaScript for thumbnail switching
document.querySelectorAll('.thumbnail').forEach((thumbnail) => {
  thumbnail.addEventListener('click', (event) => {
      const mainImage = document.getElementById('mainImage');
      const largeImage = event.target.getAttribute('data-large');
      mainImage.src = largeImage;
  });
});

// JavaScript for hover zoom effect
const mainImageContainer = document.querySelector('.main-image');
const mainImage = document.getElementById('mainImage');

mainImageContainer.addEventListener('mousemove', (e) => {
  const { left, top, width, height } = mainImageContainer.getBoundingClientRect();
  const x = ((e.pageX - left) / width) * 100;
  const y = ((e.pageY - top) / height) * 100;
  mainImage.style.transformOrigin = `${x}% ${y}%`;
});

mainImageContainer.addEventListener('mouseleave', () => {
  mainImage.style.transformOrigin = 'center';
});




