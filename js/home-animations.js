var ReplayLink = document.getElementById("hero-section__play-again");

var Scene1 = {
    div: document.getElementById("slide--one"),
    primaryTitles: document.getElementById("slide--one").getElementsByClassName("hero-section__primary-text"),
    secondaryTitle: document.getElementById("slide--one").getElementsByClassName("hero-section__secondary-title")[0],
    callToAction: document.getElementById("slide--one").getElementsByClassName("hero-section__call-to-action")[0]
}

var Scene2 = {
    div: document.getElementById("slide--two"),
    image: document.getElementById("slide--two").getElementsByClassName("slide__image")[0],
    content: document.getElementById("slide--two").getElementsByClassName("slide__content")[0],    
    scroller: document.getElementById("slide--two").getElementsByClassName("slide__image-scroller")[0]
}

var Scene3 = {
    div: document.getElementById("slide--three"),
    image: document.getElementById("slide--three").getElementsByClassName("slide__image")[0],
    content: document.getElementById("slide--three").getElementsByClassName("slide__content")[0],
    scroller: document.getElementById("slide--three").getElementsByClassName("slide__image-scroller")[0],
    footer: document.getElementById("slide--three").getElementsByClassName("slide__footer")[0],
    logo: document.getElementById("slide--three").getElementsByClassName("slide__logo-box")[0]
}

var Enter = {
    scene1: function() {
        Scene1.div.style.display = "";
        Scene1.secondaryTitle.style.opacity = 0;
        Scene1.callToAction.style.display = "none";
        Scene1.callToAction.style.opacity = 0;
        ReplayLink.style.display = "none";

        for (i = 0; i < Scene1.primaryTitles.length; i++) {
            var title = Scene1.primaryTitles[i];
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

        animate({
            el: Scene1.secondaryTitle,
            translateY: ["10px", 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 3000,
            easing: "easeOutExpo",
            complete: function() {
                setTimeout(Enter.scene2, 2500);
                setTimeout(Exit.scene1, 1500);
            }
        });
    },

    scene1b: function() {
        Scene1.secondaryTitle.style.opacity = 1;
        Scene1.callToAction.style.display = "";
        Scene1.callToAction.style.opacity = 1;
        Scene1.div.style.opacity = "0";
        Scene1.div.style.display = "";
        ReplayLink.style.display = "";

        for (i = 0; i < Scene1.primaryTitles.length; i++) {
            var title = Scene1.primaryTitles[i];
            title.style.opacity = 1;
            title.style.transform = "";
            title.style.webkitTransform = "";
        }

        animate({
            el: Scene1.div,
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutExpo"
        });

        animate({
            el: ReplayLink,
            translateY: ["50px", 0],
            duration: 1000
        });
    },

    scene2: function() {
        Scene2.image.style.opacity = 0;
        Scene2.content.style.opacity = 0;
        Scene2.div.style.display = "";

        animate({
            el: Scene2.image,
            translateY: ["400px", 0],
            opacity: [0, 1],
            duration: 1500,
            easing: "easeOutCubic 700"
        });

        animate({
            el: Scene2.content,
            translateX: ["100px", 0],
            opacity: [0, 1],
            duration: 1000,
            delay: 500,
            easing: "easeOutExpo",
            complete: function() {
                setTimeout(Exit.scene2, 3000);
                setTimeout(Enter.scene3, 4000);
            }
        });
    },

    scene3: function() {
        Scene3.image.style.opacity = 0;
        Scene3.content.style.opacity = 0;
        Scene3.scroller.style.webkitTransform = "translateY(-300px)";
        Scene3.scroller.style.transform = "translateY(-300px)";
        Scene3.div.style.display = "";

        animate({
            el: Scene3.content,
            translateX: ["-200px", 0],
            opacity: [0, 1],
            duration: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene3.image,
            opacity: [0, 1],
            duration: 1000,
            delay: 2000,
            easing: "easeOutExpo",
            complete: function() {
                Scene2.scroller.style.webkitTransform = "";
                Scene2.scroller.style.transform = "";
                Scene2.div.style.display = "none";

                setTimeout(Enter.scene3b, 1000);
            }
        });
    },

    scene3b: function() {
        animate({
            el: Scene3.content,
            translateX: [0, "-100%"],
            opacity: [1, 0],
            duration: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene3.image,
            translateX: [0, "-30%"],
            duration: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene3.scroller,
            translateY: ["-300px", "-150px"],
            duration: 4000,
            easing: "easeOutExpo"
        });


        animate({
            el: Scene3.image,
            translateX: ["-30%", "-30%"],
            // translateY: [0, "-110px"],
            opacity: [1, 0.2],
            duration: 2000,
            easing: "easeOutExpo",
            delay: 2000
        });

        animate({
            el: Scene3.logo,
            translateY: [0, "-100px"],
            scale: [0.5, 1],
            delay: 3000,
            begin: function() {
                Scene3.logo.style.display = "";
                Scene3.footer.style.opacity = "0";
                Scene3.footer.style.display = "";
            },
            complete: function() {
                animate({
                    el: Scene3.footer,
                    translateY: ["10%", 0],
                    opacity: [0, 1],
                    duration: 2000,
                    easing: "easeOutExpo",
                    complete: function() {
                        Exit.scene3();
                    }
                });
            }
        });

    }
}

var Exit = {
    scene1: function() {
        for (i = 0; i < Scene1.primaryTitles.length; i++) {
            var title = Scene1.primaryTitles[i];

            animate({
                el: title,
                translateY: [0, "100%"],
                opacity: [1, 0],
                duration: 1000,
                delay: (i * 400),
                easing: "easeOutExpo"
            });
        }

        animate({
            el: Scene1.secondaryTitle,
            opacity: [1, 0],
            duration: 1000,
            delay: 800,
            easing: "easeOutExpo",
            complete: function() {
                Scene1.div.style.display = "none";
            }
        });
    },

    scene2: function() {
        animate({
            el: Scene2.image,
            translateX: [0, "59.5%"],
            duration: 3000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene2.scroller,
            translateY: [0, "-300px"],
            duration: 3000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene2.content,
            translateX: [0, "100%"],
            opacity: [1, 0],
            duration: 1000,
            easing: "easeOutExpo"
        });
    },

    scene3: function() {
        animate({
            el: Scene3.image,
            translateX: ["-30%", "-30%"],
            translateY: ["0", "-300px"],
            opacity: [0.1, 0],
            duration: 2000,
            delay: 2000,
            easing: "easeOutExpo" 
        });

        animate({
            el: Scene3.logo,
            translateY: ["-100px", "-300px"],
            opacity: [1, 0],
            duration: 2000,
            delay: 2000,
            easing: "easeOutExpo"
        });

        animate({
            el: Scene3.footer,
            translateY: [0, "-300px"],
            opacity: [1, 0],
            duration: 2000,
            delay: 2000,
            easing: "easeOutExpo",
            complete: function() {
                Scene3.div.style.display = "none";
                Scene3.footer.style.display = "none";
                Scene3.logo.style.display = "none";

                var elementsToReset = [Scene3.content, Scene3.scroller, Scene3.image, Scene3.logo, Scene3.footer];
                for (i = 0; i < elementsToReset.length; i++) {
                    var element = elementsToReset[i];
                    element.style.transform = "";
                    element.style.webkitTransform = "";
                    element.style.opacity = "";
                }

                Enter.scene1b();
            }
        });
    }
}

window.onload = Enter.scene1;
ReplayLink.onclick = Enter.scene1;
