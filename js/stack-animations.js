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
        var staticBoxes = document.getElementById("stack-animation__subscriptions").getElementsByClassName("stack-animation__static");
        var animatedBoxes = document.getElementById("stack-animation__subscriptions").getElementsByClassName("stack-animation__animated");

        for (i = 0; i < staticBoxes.length; i++) {
            var box = staticBoxes[i];
            var offset = (staticBoxes.length - i) * 9;

            box.style.transform = "translateY(" + offset + "px)";
            box.style.webkitTransform = "translateY(" + offset + "px)";

            animate({
                el: box,
                translateY: [offset + "px", 0],
                delay: 1000,
                duration: 300,
                easing: "easeOutExpo"
            });
        }

        for (i = 0; i < animatedBoxes.length; i++) {
            var box = animatedBoxes[i];

            box.style.opacity = 0;
            box.style.transform = "translateX(50px)";
            box.style.webkitTransform = "translateX(50px)";

            animate({
                el: box,
                opacity: [0, 1],
                translateX: ["50px", 0],
                delay: 2000,
                duration: 300,
                easing: "easeOutExpo"
            });
        }
    },

    developers: function() {
        var leftBoxes = document.getElementById("stack-animation__developers-left").querySelectorAll("div");
        var rightBoxes = document.getElementById("stack-animation__developers-right").querySelectorAll("div");
        var boxes = document.getElementById("stack-animation__developers").getElementsByClassName("stack-animation__box");
        var divider = document.getElementById("stack-animation__developers-divider");

        divider.style.opacity = "0";

        for (i = 0; i < boxes.length; i++) {
            boxes[i].style.opacity = 0;
            boxes[i].style.transform = "translateY(70px)";
            boxes[i].style.webkitTransform = "translateY(70px)";
        }

        animate({
            el: leftBoxes[0],
            opacity: [0, 1],
            translateX: [0, "-10px"],
            translateY: ["70px", 0],
            rotate: [0, "-45deg"],
            duration: 300,
            delay: 500,
            easing: "linear"
        });

        animate({
            el: leftBoxes[1],
            opacity: [0, 1],
            translateX: [0, "-10px"],
            translateY: ["70px", "7px"],
            rotate: [0, "45deg"],
            duration: 300,
            delay: 600,
            easing: "linear"
        });

        animate({
            el: rightBoxes[0],
            opacity: [0, 1],
            translateX: [0, "10px"],
            translateY: ["70px", 0],
            rotate: [0, "45deg"],
            duration: 300,
            delay: 700,
            easing: "linear"
        });

        animate({
            el: rightBoxes[1],
            opacity: [0, 1],
            translateX: [0, "10px"],
            translateY: ["70px", "7px"],
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
    payments: function() {
        this.stop('stack-animation__payments')
    },
    dashboard: function() {
        this.stop('stack-animation__dashboard')
    },
    subscriptions: function() {
        this.stop('stack-animation__subscriptions')
    },
    developers: function() {
        this.stop('stack-animation__developers')
    },
}
