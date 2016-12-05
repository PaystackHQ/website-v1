var animationLoop;
var runAnimation = {
    payments: function() {
        var leftBoxes = document.getElementById("stack-animation__payments-left").querySelectorAll("div");
        var rightBoxes = document.getElementById("stack-animation__payments-right").querySelectorAll("div");

        for (i = 0; i < leftBoxes.length; i++) {
            var box = leftBoxes[i];
            var origin = -300;
            var _translate = [origin, 0];
            var _rotate = ["-25deg", 0];
            var _duration = 300 + ((rightBoxes.length - i) * 200);

            animate({
                el: box,
                translateY: _translate,
                rotate: _rotate,
                duration: _duration,
                easing: "linear"
            });
        }

        for (i = 0; i < rightBoxes.length; i++) {
            var box = rightBoxes[i];
            var origin = -300;
            var _translate = [origin, 0];
            var _rotate = ["25deg", 0];
            var _duration = 300 + ((rightBoxes.length - i) * 200);

            animate({
                el: box,
                translateY: _translate,
                rotate: _rotate,
                duration: _duration,
                easing: "linear"
            });
        }
    },

    dashboard: function() {
        var boxes = document.getElementById("stack-animation__dashboard").querySelectorAll("div");
        for (i = 0; i < boxes.length; i++) {
            animate({
                el: boxes[i],
                translateY: ["400px", 0],
                delay: 200 + (i * 100),
                duration: 300,
                easing: "easeInQuad"
            });
        }
    },

    subscriptions: function() {
        var boxes = document.getElementById("stack-animation__subscriptions").querySelectorAll("div");

        function animateThis() {
            boxes[0].style.transform = "translateY(-180px)";
            boxes[0].style.webkitTransform = "translateY(-180px)";

            for (i = 1; i < boxes.length; i++) {
                boxes[i].style.transform = "translateY(0)";
                boxes[i].style.webkitTransform = "translateY(0)";
            }

            animate({
                el: boxes[0],
                translateY: ["-180px", 0],
                delay: 200,
                duration: 300,
                easing: "linear"
            });

            animate({
                el: boxes[boxes.length - 1],
                translateY: [0, "200px"],
                duration: 700,
                delay: 1000,
                easing: "linear"
            });

            for (j = 0; j < boxes.length - 1; j++) {
                animate({
                    el: boxes[j],
                    translateY: [0, "7px"],
                    duration: 200,
                    delay: 1100,
                    easing: "linear"
                });
            }
        }

        animateThis();
        animationLoop = setInterval(animateThis, 2200);
    },

    developers: function() {
        var leftBoxes = document.getElementById("stack-animation__developers-left").querySelectorAll("div");
        var rightBoxes = document.getElementById("stack-animation__developers-right").querySelectorAll("div");
        var boxes = document.getElementById("stack-animation__developers").getElementsByClassName("stack-animation__box");
        var divider = document.getElementById("stack-animation__developers-divider");

        divider.style.opacity = "0";
        for (i = 0; i < boxes.length; i++) {
            boxes[i].style.transform = "";
            boxes[i].style.webkitTransform = "";
        }

        animate({
            el: leftBoxes[0],
            translateX: [0, "-10px"],
            translateY: [0, "-70px"],
            rotate: [0, "-45deg"],
            duration: 300,
            delay: 500,
            easing: "linear"
        });

        animate({
            el: leftBoxes[1],
            translateX: [0, "-10px"],
            translateY: [0, "-60px"],
            rotate: [0, "45deg"],
            duration: 300,
            delay: 600,
            easing: "linear"
        });

        animate({
            el: rightBoxes[0],
            translateX: [0, "10px"],
            translateY: [0, "-70px"],
            rotate: [0, "45deg"],
            duration: 300,
            delay: 700,
            easing: "linear"
        });

        animate({
            el: rightBoxes[1],
            translateX: [0, "10px"],
            translateY: [0, "-60px"],
            rotate: [0, "-45deg"],
            duration: 300,
            delay: 800,
            easing: "linear"
        });

        animate({
            el: divider,
            opacity: [0, 1],
            duration: 300,
            delay: 1200,
            easing: "linear"
        });
    }
}

var endAnimation = {
    stop: function(id) {
        var boxes = document.getElementById(id).querySelectorAll("div");
        animate.stop(boxes);
    },
    payments: function() {},
    dashboard: function() {},
    subscriptions: function() {
        window.clearInterval(animationLoop);
    },
    developers: function() {},
}
