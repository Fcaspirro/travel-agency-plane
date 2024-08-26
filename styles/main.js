document.getElementById('menuBtn').addEventListener('click', function() {
  document.getElementById('sidebar').classList.add('active');
  document.body.classList.add('menu-active');
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('sidebar').classList.remove('active');
  document.body.classList.remove('menu-active');
});