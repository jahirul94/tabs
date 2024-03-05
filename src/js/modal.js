; (function ($) {
    $("#modal-button").on("click", function () {
        var tagClass = $('#modal-content').attr('class');
        switch (tagClass) {
            case 'modal-hidden':
                $('#modal-button').text('Close');
                $('#modal-content').removeClass('modal-hidden');
                $('#modal-content').addClass('modal-active');
                break;
            case 'modal-active':
                $('#modal-button').text('Open');
                $('#modal-content').removeClass('modal-active');
                $('#modal-content').addClass('modal-hidden');
                break;
            default:
                break;
        }
    });
})(jQuery);
