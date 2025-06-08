// ハンバーガーメニュー
var hamburger = $('.hamburger-menu');

// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
    // console.log('click');
    // .hamburgerの表示・非表示を繰り返す
    hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
    // console.log('resize');
    // ハンバーガーメニューを閉じる
    hamburger.removeClass('hamburger-menu-active');
});

// スマートタブの初期化
$(document).ready(function () {
    $('#smarttab').smartTab({
        selected: 0,
        theme: 'basic',
        autoAdjustHeight: false,
        backButtonSupport: false,
    });

    $('#smarttab').on("showTab", function (e, anchorObject, tabIndex) {
        $('.tab-pane').removeClass('active');
        $('.tab-pane').eq(tabIndex).addClass('active');
    });
});



