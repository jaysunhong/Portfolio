$('#home-tab').on('click', function () {
    $(this).attr('class', 'nav-link active');
    $('#home').attr('class', 'tab-pane fade show active');

    $('#resume-tab').attr('class', 'nav-link');
    $('#resume').attr('class', 'tab-pane fade');
    $('#portfolio-tab').attr('class', 'nav-link');
    $('#portfolio').attr('class', 'tab-pane fade');
});

$('#resume-tab').on('click', function () {
    var offset = 0;

    $('html').animate({
        scrollTop: $(this).offset().top + offset
    });

    $(this).attr('class', 'nav-link active');
    $('#resume').attr('class', 'tab-pane fade show active');

    $('#home-tab').attr('class', 'nav-link');
    $('#home').attr('class', 'tab-pane fade');
    $('#portfolio-tab').attr('class', 'nav-link');
    $('#portfolio').attr('class', 'tab-pane fade');
});

$('#portfolio-tab').on('click', function () {
    $(this).attr('class', 'nav-link active');
    $('#portfolio').attr('class', 'tab-pane fade show active');

    $('#home-tab').attr('class', 'nav-link');
    $('#home').attr('class', 'tab-pane fade');
    $('#resume-tab').attr('class', 'nav-link');
    $('#resume').attr('class', 'tab-pane fade');
});