$(document).ready(function(){
    $('.main').isotope({
        itemSelector: '.projects',
        percentPosition: true,
        masonry: {
          // use outer width of grid-sizer for columnWidth
          columnWidth: '.projects'
        }
    });

    // init Isotope
    var $grid = $('.main').isotope({
        // options
    });
    // filter items on button click
    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});