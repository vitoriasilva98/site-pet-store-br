$(document).ready(function() {

    $(".produto").mouseover(function() {
        $(this).addClass('produto-destaque')
    })

    $(".produto").mouseout(function() {
        $(this).removeClass('produto-destaque');
    })
})