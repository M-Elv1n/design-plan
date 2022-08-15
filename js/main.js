$(document).ready(function () {
  const reviewsSwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const adviceSwiper = new Swiper('.advice__slider', {
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.advices__bos-right',
      prevEl: '.advices__bos-left',
    },
  });

  var menuButton = document.querySelector(".burger");
  menuButton.addEventListener("click", function () {
    console.log("click button");
    document.querySelector(".burger__menu").classList.toggle("burger__menu--visible");
  });

  var menuBurger = document.querySelector(".burger__close");
  menuBurger.addEventListener("click", function () {
    console.log("click button__close");
    document.querySelector(".burger__menu").classList.toggle("burger__menu--visible");
  });

  var menuCloseVideo = document.querySelector(".modal__video-close");
  menuCloseVideo.addEventListener("click", function () {
    console.log("click modal__video-close");
    document.querySelector(".modal__video-dialog").classList.toggle("modal__video-dialog--visible");
    document.querySelector(".modal__video-overlay").classList.toggle("modal__video-overlay--visible");
    $('.modal__video-block').fadeOut(function () {
      $('.modal__video-close').remove();
      document.location.reload();
    });
    return false;
  });



  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }
  function closeModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  // AOS.init();
});

$(document).ready(function () {
  var modalVideo = $("[data-toggle=modal__video]");
  // var closeModalVideo = $(".modal__video-close");
  modalVideo.on("click", openModalVideo);
  closeModalVideo.on("click", closeModalVideo);

  function openModalVideo() {
    var modalVideoOverlay = $(".modal__video-overlay");
    var modalVideoDialog = $(".modal__video-dialog");
    modalVideoOverlay.addClass("modal__video-overlay--visible");
    modalVideoDialog.addClass("modal__video-dialog--visible");
  }
  // function closeModalVideo() {
  //   var modalVideoOverlay = $(".modal__video-overlay");
  //   var modalVideoDialog = $(".modal__video-dialog");
  //   modalVideoOverlay.removeClass("modal__video-overlay--visible");
  //   modalVideoDialog.removeClass("modal__video-dialog--visible");
  // }
  // AOS.init();
});