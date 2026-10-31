(function(){
  'use strict';

  new WOW().init();

  // Toggle buttons (paper abstracts) slide their aria-controls target open
  // and closed and swap between their two labels.
  $(document).on('click', '.collapse-toggle', function () {
    var $button = $(this);
    var open = $button.attr('aria-expanded') !== 'true';

    $button.attr('aria-expanded', open).text($button.data(open ? 'open-label' : 'closed-label'));
    $('#' + $button.attr('aria-controls')).toggleClass('is-open', open);
  });

})();
