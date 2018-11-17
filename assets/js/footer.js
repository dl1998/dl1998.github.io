jQuery.ajaxSetup({async:false});
$.get("footer.html", function (data) {
    $('footer').replaceWith(data);
});