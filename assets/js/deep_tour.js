$(".dropdown-menu a").click(function(){
    $(this).parents(".dropdown").find('.dropdown-toggle').html($(this).text() + ' <span class="caret"></span>');
    $(this).parents(".dropdown").find('.dropdown-toggle').val($(this).data('value'));
});