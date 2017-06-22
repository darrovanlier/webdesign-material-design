(function($){
    $(function(){

        $('.button-collapse').sideNav();

    }); // end of document ready
})(jQuery); // end of jQuery name space

var counter = 0;

$('#download-button').click(function () {
    counter++;
    if (counter > 2) {
        Materialize.toast('Hou nou eens op met klikkuhhh', 5000);
        counter = 0;
        $('#download-button').addClass("disabled");
    }
});



