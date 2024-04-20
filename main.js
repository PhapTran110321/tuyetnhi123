/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle')
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== SWIPER WACTHES ===============*/

// tạo 1 instance mới của swiper và gán cho nó 1 biến swiperWatches. Swiper sẽ được áp dụng 
// cho tất cả các phần tử có lớp là home__swiper
const swiperWatches = new Swiper('.home__swiper', {
    //cho phép lặp lại vô hạn
    loop: true,
    // khoảng cách của các phần tử
    spaceBetween: 32,
    grabCursor: true,
    effect: 'creative',
    creativeEffect: {

        //translate: [-100, 0, -500] và translate: [100, 0, -500]: 
        //Thuộc tính translate xác định vị trí của phần tử trong không gian ba chiều (x, y, z). 
        //Trong trường hợp này, translate được sử dụng để di chuyển phần tử theo trục x (hoành độ) và trục z (trục sâu).
        // Cụ thể, [-100, 0, -500] di chuyển phần tử sang trái và sang phía trước (ra khỏi màn hình), 
        //trong khi [100, 0, -500] di chuyển phần tử sang phải và sang phía trước. 
        prev: {
            translate: [-100, 0, -500],
            rotate: [0, 0, 20],
            opacity: 0
        },
        next: {
            translate: [100, 0, -500],
            rotate: [0, 0, -20],
            opacity: 0
        },
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
})

/*=============== GSAP ANIMATION ===============*/
