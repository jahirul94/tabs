(function ($) {
	var classNames = $(`#tab-button-1`).attr('class');
	const className = classNames.split(' ')[1];
	if (className === 'tab-button-secondary') {
		$(`#tab-button-1`).removeClass('tab-button-secondary');
		$(`#tab-button-1`).addClass('secondary-button-active');
	}
	else if (className === 'tab-button-primary') {
		$(`#tab-button-1`).removeClass('tab-button-primary');
		$(`#tab-button-1`).addClass('primary-button-active');
	}

	$(`.div-data-1`).removeClass('inactive');
	$(`.div-data-1`).addClass('active');
	$('.tab-button').on('click', function () {
		$(`.div-data-1`).removeClass('active');
		var tabId = $(this).data('info');
		// set active class 
		var classNames = $(`#tab-button-${tabId}`).attr('class');
		const className = classNames.split(' ')[1];
		if (className === 'tab-button-secondary') {
			$('.tab-button').removeClass('secondary-button-active');
			$('.tab-button').addClass('tab-button-secondary');
			$(`#tab-button-${tabId}`).removeClass('tab-button-secondary');
			$(`#tab-button-${tabId}`).addClass('secondary-button-active');
		}
		else if (className === 'tab-button-primary') {
			$('.tab-button').addClass('tab-button-primary');
			$('.tab-button').removeClass('primary-button-active');
			$(`#tab-button-${tabId}`).removeClass('tab-button-primary');
			$(`#tab-button-${tabId}`).addClass('primary-button-active');
		}
		// end 
		$('.btn-all').removeClass('active');
		$('.btn-all').addClass('inactive');

		$(`.div-data-${tabId}`).addClass('active');
		$(`.div-data-${tabId}`).removeClass('inactive');
	});
})(jQuery);
