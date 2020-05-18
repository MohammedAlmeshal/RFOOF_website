
const navSlide  = () => {
    const nav = document.querySelector(".nav-links")
    const  hamburger = document.querySelector(".hamburger")


    hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        nav.classList.toggle('nav-active');
        // Do something else, like open/close menu
      });

    
} 


navSlide();