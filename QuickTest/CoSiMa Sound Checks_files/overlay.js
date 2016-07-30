var cosima = cosima || {};

/** @namespace */
cosima.overlay = {};

/** 
 *  Initialize overlay module.
 *  
 */
cosima.overlay.init = function() {
  var btns = document.querySelectorAll("[data-toggle='overlay']");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener( 'click', this.toggle );
  }
};

cosima.overlay.toggle = function() {
  var overlay = document.getElementById(this.dataset.target);
  var transEndEventNames = {
      'WebkitTransition': 'webkitTransitionEnd',
      'MozTransition': 'transitionend',
      'OTransition': 'oTransitionEnd',
      'msTransition': 'MSTransitionEnd',
      'transition': 'transitionend'
    },
    transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
    support = { transitions : Modernizr.csstransitions };
  if( classie.has( overlay, 'open' ) ) {
    classie.remove( overlay, 'open' );
    classie.add( overlay, 'close' );
    var onEndTransitionFn = function( ev ) {
      if( support.transitions ) {
        if( ev.propertyName !== 'visibility' ) return;
        this.removeEventListener( transEndEventName, onEndTransitionFn );
      }
      classie.remove( overlay, 'close' );
      classie.add( overlay, 'hidden' );
    };
    if( support.transitions ) {
      overlay.addEventListener( transEndEventName, onEndTransitionFn );
    }
    else {
      onEndTransitionFn();
    }
  } else if( !classie.has( overlay, 'close' ) ) {
    classie.remove( overlay, 'hidden' );
    setTimeout(function() {
      classie.add( overlay, 'open' );
    }, 0);
  }
};

window.addEventListener('DOMContentLoaded', function() {
  cosima.overlay.init();
});
