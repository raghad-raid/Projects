const header=document.querySelector("header");
  const buttonMenu=document.querySelector("#button-menu");
  const buttonClose=document.querySelector("#button-close");

  buttonMenu.addEventListener("click" ,()=>{
    header.classList.toggle("show-Menu");
  });
  buttonClose.addEventListener("click" ,()=>{
    buttonMenu.click();
  });
  const swiper = new Swiper('.feedback-wrapper', {
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });