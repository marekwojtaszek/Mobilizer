/*
 * Prevent scrolling
 */

function stopScrolling( touchEvent ) {
    touchEvent.preventDefault();
}

document.addEventListener( 'touchstart', stopScrolling, false );
document.addEventListener( 'touchmove',  stopScrolling, false );

/*
 * Detect device
 */

var isIPhone = navigator.userAgent.indexOf( 'iPhone' ) !== -1,
    isIPod   = navigator.userAgent.indexOf( 'iPod' )   !== -1,
    isIPad   = navigator.userAgent.indexOf( 'iPad' )   !== -1,
    isIOS    = isIPhone || isIPod || isIPad;

/*
 * Show:
 * - "open on iPhone" info
 * - installation instructions
 * - app content
 */

var desktop = document.getElementById( 'desktop' ),
    install = document.getElementById( 'install' ),
    app     = document.getElementById( 'app' );

if( isIOS ) {
    if( window.navigator.standalone === true ) {
        app.style.display = 'block';
    } else {
        install.style.display = 'block';
    }
} else {
    desktop.style.display = 'block';
}
