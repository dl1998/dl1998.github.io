jQuery.ajaxSetup({async:false});
$.get("navbar.html", function (data) {
    $('#navbar-block').replaceWith(data);
});