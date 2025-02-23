document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const sidebarClose = document.querySelector(".sidebar-close");

  hamburger.addEventListener("click", function () {
    sidebar.classList.add("active");
  });

  sidebarClose.addEventListener("click", function () {
    sidebar.classList.remove("active");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
      sidebar.classList.remove("active");
    }
  });
});

function onSideBarLinkClick() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.remove("active");
}
