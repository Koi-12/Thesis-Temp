// MODAL
// -----
var Modal = (function() {
  var openedModal;

  return {
    open,
    close,
    change,
    alert
  };

  function open(target, callback) {
    document.documentElement.classList.add("is-scroll-disabled");
    openedModal = document.querySelector(target);
    openedModal.dataset.opened = "true";
    callback && callback(openedModal);


    // Add iframe src
    if (openedModal.dataset.iframe) {
      openedModal.querySelector("iframe").src = openedModal.dataset.iframe;
    }
  }

  function close(event, callback) {
    if (event) {
      event.preventDefault(), event.stopPropagation();
      if (!event.target.dataset.hasOwnProperty("modalClose")) return;
    }

    document.documentElement.classList.remove("is-scroll-disabled");
    openedModal.dataset.opened = "false";


    callback && callback(openedModal);
  }

  function change(target, event) {
    event && (event.preventDefault(), event.stopPropagation());
    openedModal.dataset.opened = "false";
    openedModal = document.querySelector(target);
    openedModal.dataset.opened = "true";
  }

  function alert(element, text) {
    open(element, function(element) {
      text && (element.querySelector(".modal--content").innerHTML = text);
    });
  }
})();
