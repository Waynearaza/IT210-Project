$(document).ready(function () {
  // 1. Custom Sticky Navbar Background Change on Scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar-custom").addClass("scrolled");
    } else {
      $(".navbar-custom").removeClass("scrolled");
    }
  });

  // Scroll-to-top button (added globally via JS)
  if ($("#scrollToTopBtn").length === 0) {
    $("body").append(
      '<button id="scrollToTopBtn" class="scroll-to-top" type="button" aria-label="Scroll to top" title="Back to top">' +
        '<i class="fas fa-chevron-up" aria-hidden="true"></i>' +
        "</button>",
    );
  }

  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 300) {
      $("#scrollToTopBtn").addClass("is-visible");
    } else {
      $("#scrollToTopBtn").removeClass("is-visible");
    }
  });

  $(document).on("click", "#scrollToTopBtn", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
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
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
