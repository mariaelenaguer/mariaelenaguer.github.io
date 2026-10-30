(function(){
  'use strict';

  new WOW().init();

  // Paper abstracts: the "Abstract" button slides its abstract open and closed.
  $(document).on('click', '.abstract-toggle', function () {
    var $button = $(this);
    var open = $button.attr('aria-expanded') !== 'true';

    $button.attr('aria-expanded', open).text(open ? 'Hide abstract' : 'Abstract');
    $('#' + $button.attr('aria-controls')).toggleClass('is-open', open);
  });

})();
