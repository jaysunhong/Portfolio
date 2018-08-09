var localtime = moment().format('LT');

var homeTab = function () {
    $('#home-tab').on('click', function () {
        $(this).attr('class', 'nav-link active');
        $('#home').attr('class', 'tab-pane fade show active');

        $('#resume-tab').attr('class', 'nav-link');
        $('#resume').attr('class', 'tab-pane fade');
        $('#portfolio-tab').attr('class', 'nav-link');
        $('#portfolio').attr('class', 'tab-pane fade');
        $('#contact-tab').attr('class', 'nav-link');
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var resumeTab = function () {
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
        $('#contact-tab').attr('class', 'nav-link');
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var portfolioTab = function () {
    $('#portfolio-tab').on('click', function () {
        $(this).attr('class', 'nav-link active');
        $('#portfolio').attr('class', 'tab-pane fade show active');

        $('#home-tab').attr('class', 'nav-link');
        $('#home').attr('class', 'tab-pane fade');
        $('#resume-tab').attr('class', 'nav-link');
        $('#resume').attr('class', 'tab-pane fade');
        $('#contact-tab').attr('class', 'nav-link');
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var contactTab = function () {
    $('#contact-tab').on('click', function () {
        $(this).attr('class', 'nav-link active');
        $('#contact').attr('class', 'tab-pane fade show active');

        $('#resume-tab').attr('class', 'nav-link');
        $('#resume').attr('class', 'tab-pane fade');
        $('#portfolio-tab').attr('class', 'nav-link');
        $('#portfolio').attr('class', 'tab-pane fade');
        $('#home-tab').attr('class', 'nav-link');
        $('#home').attr('class', 'tab-pane fade');
    });
}

if (localtime <= "19:00" && localtime > "07:00") {
    $("body").css("background-color", "rgba(0,0,0,0.87)")
        .css("color", "white");
    $("#githubIcon").css("background-color", "white");
    $("a").css("color", "white");

    $("#home-tab").css("background-color", "#757575");
    $("#resume-tab").on('click', function () {
        $(this).css("background-color", "#757575");
    });
    $("#portfolio-tab").on('click', function () {
        $(this).css("background-color", "#757575");
    });
    $("#contact-tab").on('click', function () {
        $(this).css("background-color", "#757575");
    });
} else {
    homeTab();    
    resumeTab();
    portfolioTab();
    contactTab();
}