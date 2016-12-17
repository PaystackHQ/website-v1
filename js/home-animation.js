var ReplayLink = document.getElementById("hero-section__play-again");

var Slide1 = {
    div: document.getElementById("slide--one"),
    primaryTitles: document.getElementById("slide--one").getElementsByClassName("hero-section__primary-text")
}

var Slide2 = {
    div: document.getElementById("slide--two"),
    box: document.getElementById("slide__box"),
    boxLeft: document.getElementById("slide__box-content-1"),
    boxRight: document.getElementById("slide__box-content-2"),
    boxCenter: document.getElementById("slide__box-content-3"),
    lines: document.getElementsByClassName("slide__lines")[0]
}

var Slide3 = {
    div: document.getElementById("slide--three")
}

var Enter = {
    scene1: function() {
        Slide3.div.style.display = "none";
        Slide1.div.style.display = "block";
        ReplayLink.style.display = "none";

        for (i = 0; i < Slide1.primaryTitles.length; i++) {
            var title = Slide1.primaryTitles[i];
            title.style.opacity = 1;

            title.style.transform = "translateY(100%)";
            title.style.webkitTransform = "translateY(100%)";

            animate({
                el: title,
                translateY: ["100%", 0],
                duration: 1000,
                delay: 700 + (i * 1000),
                easing: "easeOutExpo"
            });
        }

        setTimeout(Enter.scene2, 4500);
        setTimeout(Exit.slide1, 3500);
    },

    scene2: function() {
        Slide2.boxLeft.style.opacity = 0;
        Slide2.boxRight.style.opacity = 0;
        Slide2.boxCenter.style.opacity = 0;
        Slide2.div.style.display = "";
        Slide2.lines.style.display = "";

        animate({
            el: Slide2.box,
            opacity: [0, 1],
            duration: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Slide2.box,
            translateX: [0, "-200px"],
            duration: 5000,
            delay: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Slide2.boxLeft,
            opacity: [0, 1],
            translateX: ["-400px", "20px"],
            duration: 3000,
            delay: 2000,
            easing: "easeOutExpo",
            complete: function() {
                Enter.scene3();
            }
        });
    },

    scene3: function() {
        animate({
            el: Slide2.box,
            translateX: ["-200px", "200px"],
            duration: 3000,
            delay: 1000,
            easing: "easeInOutQuad"
        });

        animate({
            el: Slide2.boxLeft,
            opacity: [1, 0],
            translateX: ["20px", "-400px"],
            duration: 3000,
            delay: 1000,
            easing: "easeInExpo"
        });

        animate({
            el: Slide2.boxRight,
            opacity: [0, 1],
            translateX: ["500px", "20px"],
            duration: 3000,
            delay: 3000,
            easing: "easeOutExpo",
            complete: function() {
                Enter.scene4();
            }
        });
    },

    scene4: function() {
        animate({
            el: Slide2.box,
            translateX: ["200px", 0],
            duration: 3000,
            delay: 1000,
            easing: "easeInOutQuad"
        });

        animate({
            el: Slide2.boxRight,
            translateX: ["20px", "500px"],
            duration: 3000,
            easing: "easeInExpo"
        });

        animate({
            el: Slide2.boxCenter,
            opacity: [0, 1],
            translateY: ["100%", 0],
            duration: 3000,
            delay: 3000,
            easing: "easeOutExpo",
            complete: function() {
                setTimeout(Exit.slide2, 1000);
            }
        });
    },

    scene5: function() {
        Slide3.div.style.display = "block";
        ReplayLink.style.display = "";

        animate({
            el: Slide3.div,
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutExpo"
        });

        animate({
            el: ReplayLink,
            translateY: ["50px", 0],
            duration: 1000
        });
    }
}

var Exit = {
    slide1: function() {
        for (i = 0; i < Slide1.primaryTitles.length; i++) {
            var title = Slide1.primaryTitles[i];

            animate({
                el: title,
                translateY: [0, "100%"],
                opacity: [1, 0],
                duration: 1000,
                delay: (i * 400),
                easing: "easeOutExpo",
                complete: function() {
                    Slide1.div.style.display = "none";

                    for (i = 0; i < Slide1.primaryTitles.length; i++) {
                        var title = Slide1.primaryTitles[i];
                        title.style.opacity = 1;
                        title.style.transform = "";
                        title.style.webkitTransform = "";
                    }
                }
            });
        }
    },

    slide2: function() {
        animate({
            el: Slide2.boxCenter,
            opacity: [1, 0],
            duration: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Slide2.box,
            scale: 3,
            opacity: [1, 0],
            duration: 2000,
            delay: 500,
            easing: "easeOutExpo",
            begin: function() {
                Slide2.lines.style.display = "none";
                Enter.scene5();
            },
            complete: function() {
                Slide2.div.style.display = "none";
                Slide2.box.style.transform = "";
                Slide2.box.style.webkitTransform = "";
            }
        });
    }
}

window.onload = function() {
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        width = w.innerWidth || e.clientWidth || g.clientWidth;

    if (width > 750) {
        Enter.scene1();
        ReplayLink.onclick = Enter.scene1;
    }
};
