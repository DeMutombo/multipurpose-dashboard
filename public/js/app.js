document.addEventListener("alpine:init", () => {
  //store variables
  Alpine.store("sidebar", {
    full: false,
    active: "home",
    navOpen: false,
  });

  // dropdown
  Alpine.data("dropdown", () => ({
    open: false,
    toggle(tab) {
      this.open = !this.open;
    },
    activetab: "bg-gray-800 text-gray-200",
  }));
});
