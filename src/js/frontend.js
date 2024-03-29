(function ($) {
	// set active button css for custom button
	const activeBg = $('#hidden-field').val();
	const bgColor = $('#hidden-field2').val();
	const buttonType = $('#hidden-field').attr('class');

	// add active class names
	var classNames = $(`#tab-button-1`).attr('class');
	const className = classNames?.split(' ')[1];

	if (className === 'tab-button-secondary') {
		$(`#tab-button-1`).removeClass('tab-button-secondary');
		$(`#tab-button-1`).addClass('secondary-button-active');
	} else if (className === 'tab-button-primary') {
		$(`#tab-button-1`).removeClass('tab-button-primary');
		$(`#tab-button-1`).addClass('primary-button-active');
	} else if (buttonType === 'custom') {
		$(`#tab-button-1`).css({ backgroundColor: activeBg });
	}

	$(`.div-data-1`).removeClass('inactive');
	$(`.div-data-1`).addClass('active');
	$('.tab-button').on('click', function () {
		$(`.div-data-1`).removeClass('active');
		var tabId = $(this).data('info');
		// set active class
		var classNames = $(`#tab-button-${tabId}`).attr('class');

		if (classNames?.includes('tab-button-secondary')) {
			$('.tab-button').removeClass('secondary-button-active');
			$('.tab-button').addClass('tab-button-secondary');
			$(`#tab-button-${tabId}`).removeClass('tab-button-secondary');
			$(`#tab-button-${tabId}`).addClass('secondary-button-active');
		} else if (classNames?.includes('tab-button-primary')) {
			$('.tab-button').addClass('tab-button-primary');
			$('.tab-button').removeClass('primary-button-active');
			$(`#tab-button-${tabId}`).removeClass('tab-button-primary');
			$(`#tab-button-${tabId}`).addClass('primary-button-active');
		} else if (buttonType === 'custom') {
			$('.tab-button').css({ backgroundColor: bgColor });
			$(`#tab-button-${tabId}`).css({ backgroundColor: activeBg });
		}
		// end
		$('.btn-all').removeClass('active');
		$('.btn-all').addClass('inactive');

		$(`.div-data-${tabId}`).addClass('active');
		$(`.div-data-${tabId}`).removeClass('inactive');
	});
})(jQuery);
