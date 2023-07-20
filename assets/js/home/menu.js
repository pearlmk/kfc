const tooltipTriggerLists = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipLists = [...tooltipTriggerLists].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
