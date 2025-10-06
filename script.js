const images = [
  "photo/ban1.jpg",
  "photo/ban2.jpg",
  "photo/ban3.png"
];

let current = 0;

function changeImage(index) {
  const Img = document.getElementById("agri-img");
  const dots = document.querySelectorAll(".dot");

  // Hiệu ứng chuyển ảnh
  Img.style.opacity = 0;
  setTimeout(() => {
    Img.src = images[index];
    Img.style.opacity = 1;
  }, 300);

  // Cập nhật nút tròn active
  dots[current].classList.remove("active");
  dots[index].classList.add("active");
  current = index;
}

function toggleRegionMenu() {
  const list = document.querySelector('.region-list');
  list.style.display = list.style.display === 'block' ? 'none' : 'block';
}

// Ẩn dropdown khi click ra ngoài
window.addEventListener('click', (e) => {
  if (!e.target.closest('.region-filter')) {
    document.querySelector('.region-list').style.display = 'none';
  }
});

function filterRegion(region) {
  alert('Đã chọn: ' + region);
  document.querySelector('.region-list').style.display = 'none';
}

function searchTour() {
  const value = document.getElementById('search-input').value;
  alert('Đang tìm: ' + value);
}
