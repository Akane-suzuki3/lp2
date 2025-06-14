
// スライダーの各要素取得
document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".voice-track");
    const slides = document.querySelectorAll(".voice-slide");
    const leftBtn = document.querySelector(".voice-left");
    const rightBtn = document.querySelector(".voice-right");
    const indicatorContainer = document.querySelector(".voice-indicators");

    let currentIndex = 0;
    let indicators = [];

    function getItemsPerView() {
        return window.innerWidth >= 768 ? 3 : 1;
    }

    function createIndicators() {
        const itemsPerView = getItemsPerView();
        const count = Math.ceil(slides.length / itemsPerView);

        indicatorContainer.innerHTML = "";
        indicators = [];

        for (let i = 0; i < count; i++) {
            const dot = document.createElement("span");
            dot.classList.add("voice-indicator-dot");
            if (i === 0) dot.classList.add("active");

            dot.addEventListener("click", () => {
                currentIndex = i * itemsPerView;
                updateSlider();
            });

            indicatorContainer.appendChild(dot);
            indicators.push(dot);
        }
    }

    function updateSlider() {
        const slideWidth = slides[0].clientWidth;
        const itemsPerView = getItemsPerView();
        const offset = slideWidth * currentIndex;
        track.style.transform = `translateX(-${offset}px)`;

        indicators.forEach((dot, i) => {
            dot.classList.toggle("active", i === Math.floor(currentIndex / itemsPerView));
        });
    }

    function nextSlide() {
        const itemsPerView = getItemsPerView();
        const maxIndex = slides.length - itemsPerView;

        if (currentIndex < maxIndex) {
            currentIndex += itemsPerView;
            if (currentIndex > maxIndex) currentIndex = maxIndex;
            updateSlider();
        }
    }

    function prevSlide() {
        const itemsPerView = getItemsPerView();

        if (currentIndex > 0) {
            currentIndex -= itemsPerView;
            if (currentIndex < 0) currentIndex = 0;
            updateSlider();
        }
    }

    rightBtn.addEventListener("click", (e) => {
        e.preventDefault();
        nextSlide();
    });

    leftBtn.addEventListener("click", (e) => {
        e.preventDefault();
        prevSlide();
    });

    window.addEventListener("resize", () => {
        createIndicators();
        updateSlider();
    });

    createIndicators();
    updateSlider();
});






// アコーディオンメニュー
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-QA");

    accordions.forEach((accordion) => {
        const toggle = accordion.querySelector(".accordion-title-Q");
        const content = accordion.querySelector(".accordion-content");

        toggle.addEventListener("click", () => {
            const isOpen = accordion.classList.contains("open");

            // 一度全部閉じる（開いているものがあれば）
            document.querySelectorAll(".accordion-QA").forEach((item) => {
                item.classList.remove("open");
                item.querySelector(".accordion-content").classList.remove("active");
                item.querySelector(".accordion-content").style.maxHeight = null;
            });

            if (!isOpen) {
                accordion.classList.add("open");
                content.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
});




const topArrow = document.querySelector('.footer-netShopusi-img');

topArrow.addEventListener('mouseenter', () => {
    topArrow.src = '/assets/images/Back-to-top_hover.svg';
});

topArrow.addEventListener('mouseleave', () => {
    topArrow.src = '/assets/images/Backtotop.svg';
});