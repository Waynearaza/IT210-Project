$(document).ready(function () {
  // 1. Custom Sticky Navbar Background Change on Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled");
    } else {
      $(".navbar-custom").removeClass("scrolled");
    }
  });

  // 2. Custom Smooth Scrolling for Navigation Links
  $("a.nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      // Animate scroll to the target section, offset by navbar height (approx 70px)
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top - 70,
        },
        800,
      );
    }
  });

  // 3. Custom Dynamic Filter for "Where to Go" Section
  $(".filter-btn").on("click", function () {
    // Update active button styling
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    // Get filter value
    var filterValue = $(this).attr("data-filter");

    // Filter logic
    if (filterValue === "all") {
      $(".filter-item").show("slow");
    } else {
      $(".filter-item").hide();
      $(".filter-item." + filterValue).show("slow");
    }
  });
});

// Add this script at the end to automatically update the year
document.getElementById("year").textContent = new Date().getFullYear();
