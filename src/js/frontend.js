; (function ($) {
    $(".tab-button").on("click", function () {
        var tabId = $(this).data("info");
        $('.btn-all').removeClass('active');
        $('.btn-all').addClass('inactive');

        $(`.div-data-${tabId}`).addClass('active');
        $(`.div-data-${tabId}`).removeClass('inactive');
    });
})(jQuery);
