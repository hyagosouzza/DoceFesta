$(document).ready(function () {
    $(".nav-link2").click(function () {
        $(this).toggleClass("ativo");
    })
    $("#scroll").click(function () {
        window.scrollTo(0, 900);
    })
    $(function () {
        $('[data-toggle="popover"]').popover({html: true});
    })
    $('.popover-dismiss').popover({
        trigger: 'hover',
        trigger: 'click'
      });
});