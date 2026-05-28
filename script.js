document.addEventListener("DOMContentLoaded", () => {
    
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const heroTitle = document.querySelector(".upper-part h1");
    
   
    const dots = [
        document.querySelector(".dot1"),
        document.querySelector(".dot2"),
        document.querySelector(".dot3"),
        document.querySelector(".dot4")
    ];

    
    const slidesData = [
        "Welcome Slide",
        "Awesome Features",
        "Premium Products",
        "Exclusive Offers"
    ];

    let currentIndex = 0;

    function changeSlide(index) {
        currentIndex = index;

      
        if (currentIndex === 0) {
            heroTitle.textContent = "hello";
        } else {
            heroTitle.textContent = slidesData[currentIndex];
        }

       
        dots.forEach((dot, idx) => {
            if (idx === currentIndex) {
                dot.style.backgroundColor = "#ffffff";
                dot.style.opacity = "1";
            } else {
                dot.style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                dot.style.opacity = "0.5";
            }
        });
    }

    
    nextBtn.addEventListener("click", () => {
        let nextIndex = (currentIndex + 1) % dots.length; 
        changeSlide(nextIndex);
    });

    
    prevBtn.addEventListener("click", () => {
        let prevIndex = (currentIndex - 1 + dots.length) % dots.length;
        changeSlide(prevIndex);
    });

    
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => {
            changeSlide(index);
        });
    });

  
    changeSlide(0);
});