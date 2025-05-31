document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS
  AOS.init({ duration: 800, once: true });

  // Sidebar navigation
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Sidebar toggle for mobile
  const sidebar = document.getElementById('sidebar');
  const toggleButton = document.getElementById('sidebar-toggle');
  toggleButton.addEventListener('click', function() {
    sidebar.classList.toggle('active');
  });

  // Search bar functionality (placeholder)
  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('input', function() {
    console.log('Pesquisando:', this.value);
  });

  // Notification and message buttons (placeholder)
  document.querySelectorAll('.btn-icon').forEach(button => {
    button.addEventListener('click', function() {
      alert('Funcionalidade de notificações/mensagens em desenvolvimento.');
    });
  });
});