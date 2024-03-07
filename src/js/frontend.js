( function ( $ ) {
	$( `.div-data-1` ).removeClass( 'inactive' );
	$( `.div-data-1` ).addClass( 'active' );
	$( '.tab-button' ).on( 'click', function () {
		$( `.div-data-1` ).removeClass( 'active' );

		var tabId = $( this ).data( 'info' );
		$( '.btn-all' ).removeClass( 'active' );
		$( '.btn-all' ).addClass( 'inactive' );

		$( `.div-data-${ tabId }` ).addClass( 'active' );
		$( `.div-data-${ tabId }` ).removeClass( 'inactive' );
	} );
} )( jQuery );
