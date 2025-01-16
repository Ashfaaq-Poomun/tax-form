$(document).ready(function () {
  // Accordion Toggle
  $('[data-accordion="toggle"]').on("click", function () {
    var targetId = $(this).data("target");
    var target = $(targetId);
    var line = $(this).find(".line");
    var isExpanded = $(this).attr("aria-expanded") === "true";

    // Close all accordion sections
    $(".accordion-content").not(target).addClass("hidden");
    $('[data-accordion="toggle"]')
      .not(this)
      .attr("aria-expanded", "false")
      .find(".line")
      .removeClass("hidden");

    // Toggle the clicked section
    target.toggleClass("hidden").toggleClass("block");
    line.toggleClass("hidden");

    // Toggle aria-expanded attribute
    $(this).attr("aria-expanded", isExpanded ? "false" : "true");
  });
});
