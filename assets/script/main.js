

// カルーセル
$('.cover-slick').slick({
    infinite: true,
    dots: true,
    arrows: false,
    fade: true
});

$('#smarttab').smartTab({
    enableUrlHash: false,
    autoAdjustHeight: false
});



// アコーディオンのタイトルがクリックされたら
$('.according-title-Q').on('click', function () {
    // .accordion-contentを選択
    var content = $(this).next();
    // .accordion-contentを表示・非表示
    content.slideToggle()
    $(this).toggleClass('bi-caret-up-fill');
    $(this).toggleClass('bi-caret-down-fill');
});