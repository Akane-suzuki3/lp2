$(document).ready(function () {
    // ------------------------
    // スライダー
    // ------------------------
    const $track = $('.voice-track');
    const $slides = $('.voice-slide');
    const $leftBtn = $('.voice-left');
    const $rightBtn = $('.voice-right');
    const $indicatorContainer = $('.voice-indicators');

    let currentIndex = 0;
    let indicators = [];

    function getItemsPerView() {
        return $(window).width() >= 768 ? 3 : 1;
    }

    function createIndicators() {
        const itemsPerView = getItemsPerView();
        const count = Math.ceil($slides.length / itemsPerView);

        $indicatorContainer.empty();
        indicators = [];

        for (let i = 0; i < count; i++) {
            const $dot = $('<span class="voice-indicator-dot"></span>');
            if (i === 0) $dot.addClass('active');

            $dot.on('click', function () {
                currentIndex = i * itemsPerView;
                updateSlider();
            });

            $indicatorContainer.append($dot);
            indicators.push($dot);
        }
    }

    function updateSlider() {
        const slideWidth = $slides.first().outerWidth(true);
        const itemsPerView = getItemsPerView();
        const offset = slideWidth * currentIndex;

        $track.css('transform', `translateX(-${offset}px)`);

        indicators.forEach(($dot, i) => {
            $dot.toggleClass('active', i === Math.floor(currentIndex / itemsPerView));
        });
    }

    function nextSlide() {
        const itemsPerView = getItemsPerView();
        const maxIndex = $slides.length - itemsPerView;

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

    $rightBtn.on('click', function (e) {
        e.preventDefault();
        nextSlide();
    });

    $leftBtn.on('click', function (e) {
        e.preventDefault();
        prevSlide();
    });

    $(window).on('resize', function () {
        createIndicators();
        updateSlider();
    });

    createIndicators();
    updateSlider();

    // ------------------------
    // アコーディオンメニュー
    // ------------------------
    // アコーディオン（シンプルなjQuery版）
    $('.accordion-title-Q').on('click', function () {
        const $qa = $(this).closest('.accordion-QA');
        const $content = $qa.find('.accordion-content');

        // アニメーション付きで開閉
        $content.stop(true, true).slideToggle(300);
        $qa.toggleClass('open'); // 開いてる状態の管理（矢印回転にも使う）
    });
    // ------------------------
    // トップに戻るホバー
    // ------------------------
    const $topArrow = $('.footer-netShopusi-img');

    $topArrow.on('mouseenter', function () {
        $(this).attr('src', '/assets/images/Back-to-top_hover.svg');
    });

    $topArrow.on('mouseleave', function () {
        $(this).attr('src', '/assets/images/Backtotop.svg');
    });
});
