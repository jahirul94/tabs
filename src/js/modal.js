( function ( $ ) {
	$( '#modal-close' ).hide();
	$( '#modal-button' ).on( 'click', function () {
		var tagClass = $( '#modal-content' ).attr( 'class' );
		if ( tagClass === 'modal-hidden' ) {
			$( '#modal-button' ).hide();
			$( '#modal-content' ).removeClass( 'modal-hidden' );
			$( '#modal-content' ).addClass( 'modal-active' );
			$( '#modal-close' ).show();
		}
	} );
	$( '#modal-close' ).on( 'click', function () {
		var tagClass = $( '#modal-content' ).attr( 'class' );
		if ( tagClass === 'modal-active' ) {
			$( '#modal-close' ).hide();
			$( '#modal-content' ).addClass( 'modal-hidden' );
			$( '#modal-content' ).removeClass( 'modal-active' );
			$( '#modal-button' ).show();
		}
	} );
} )( jQuery );
