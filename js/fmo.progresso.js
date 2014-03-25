function hide() {
    var $progresso = $('div#progresso');
    console.log($progresso.css('opacity'));
    $progresso.css('opacity', ($progresso.css('opacity') - 0.05));

    if ($progresso.css('opacity') > 0.1) {
        setTimeout(hide, 15);
    } else {
        $progresso.css('opacity', 0);
    }
}

function inc2fill() {
    var $progresso = $('div#progresso');
    $progresso.width(($progresso.width() + (screen.width / 100)));

    if ($progresso.width() < screen.width) {
        setTimeout(inc2fill, 5);
    } else {
        setTimeout(hide, 500);
    }
}

$().ready(function () {
    $('div#progresso').width(0);
    inc2fill();
});
