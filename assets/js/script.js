var localtime = moment().format('HH');

console.log(localtime);
// LIGHT THEME
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
// DARK THEME
var homeTabDark = function () {
    $('#home-tab').on('click', function () {
        $(this).css("background-color", "#757575")
            .attr('class', 'nav-link active');
        $('#home').attr('class', 'tab-pane fade show active');

        $('#resume-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#resume').attr('class', 'tab-pane fade');
        $('#portfolio-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#portfolio').attr('class', 'tab-pane fade');
        $('#contact-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var resumeTabDark = function () {
    $('#resume-tab').on('click', function () {
        var offset = 0;

        $('html').animate({
            scrollTop: $(this).offset().top + offset
        });

        $(this).css("background-color", "#757575")
            .attr('class', 'nav-link active');
        $('#resume').attr('class', 'tab-pane fade show active');

        $('#home-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#home').attr('class', 'tab-pane fade');
        $('#portfolio-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#portfolio').attr('class', 'tab-pane fade');
        $('#contact-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var portfolioTabDark = function () {
    $('#portfolio-tab').on('click', function () {
        $(this).css("background-color", "#757575")
            .attr('class', 'nav-link active');
        $('#portfolio').attr('class', 'tab-pane fade show active');

        $('#home-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#home').attr('class', 'tab-pane fade');
        $('#resume-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#resume').attr('class', 'tab-pane fade');
        $('#contact-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#contact').attr('class', 'tab-pane fade');
    });
}

var contactTabDark = function () {
    $('#contact-tab').on('click', function () {
        $(this).css("background-color", "#757575")
            .attr('class', 'nav-link active');
        $('#contact').attr('class', 'tab-pane fade show active');

        $('#resume-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#resume').attr('class', 'tab-pane fade');
        $('#portfolio-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#portfolio').attr('class', 'tab-pane fade');
        $('#home-tab').attr('class', 'nav-link')
            .css("background-color", "transparent")
            .css("color", "white");
        $('#home').attr('class', 'tab-pane fade');
    });
}


var darkThemeStart = "18";
var darkThemeEnd = "7";

if (localtime >= darkThemeStart && localtime < darkThemeEnd) {
    $("#home-tab").css("background-color", "#757575");
    $("body").css("background-color", "rgba(0,0,0,0.87)")
        .css("color", "white");
    $("#githubIcon").css("background-color", "white");
    $("a").css("color", "white");

    homeTabDark();
    resumeTabDark();
    portfolioTabDark();
    contactTabDark();
} else {
    homeTab();    
    resumeTab();
    portfolioTab();
    contactTab();
}