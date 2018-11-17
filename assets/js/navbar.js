jQuery.ajaxSetup({async:false});
$.get("navbar.html", function (data) {
    $('nav').replaceWith(data);
});