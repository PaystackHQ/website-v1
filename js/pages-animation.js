function demoPaymentPages() {
    document.getElementById('pages-animation').style.opacity = "1";
    var successPanel = document.getElementById("pages-animation__success");
    var formPanel = document.getElementById("pages-animation__form");
    var formGroups = document.getElementsByClassName("pages-animation__form-group");

    for (i = 0; i < formGroups.length; i++) {
        formGroups[i].style.opacity = 0;
    }

    var showFormGroup = function(i, delay) {
        var group = formGroups[i];
        var input = group.getElementsByTagName('input')[0];
        var defaultValue = input.value;
        input.value = "";

        animate({
            el: group,
            translateY: ["20px", 0],
            opacity: [0, 1],
            delay: delay || 0,
            duration: 500,
            easing: "easeOutExpo",
            complete: function() {
                var nextIndex = i + 1;
                playInputText(input, defaultValue);

                if (nextIndex < formGroups.length) {
                    showFormGroup(nextIndex, 1500);
                } else {
                    showSuccessPanel();
                }
            }
        });
    }

    showFormGroup(0);

    var playInputText = function(input, defaultValue) {
        for (j = 0; j < defaultValue.length; j++) {
            var character = defaultValue[j];
            addCharacterToInput(input, character, j * 100);
        }
    }

    var addCharacterToInput = function(input, character, delay) {
        setTimeout(function() {
            input.value = input.value + character;
        }, delay);
    }

    var showSuccessPanel = function() {
        animate({
            el: formPanel,
            translateX: [0, "-200px"],
            opacity: [1, 0.5],
            delay: 2000,
            duration: 500,
            easing: "easeOutExpo"
        });

        animate({
            el: successPanel,
            translateX: ["100px", 0],
            opacity: [0, 1],
            delay: 2000,
            duration: 500,
            easing: "easeOutExpo"
        });
    }
}
