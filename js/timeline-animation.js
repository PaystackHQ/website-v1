function demoTimeline() {
    document.getElementById('timeline-animation').style.display = "";
    document.getElementsByClassName('timeline-animation__line')[0].style.display = "block";
    document.getElementsByClassName('timeline-tree')[0].style.display = "block";

    var header = document.getElementsByClassName('timeline-animation__header')[0];
    var branches = document.getElementsByClassName("timeline-tree__branch");

    animate({
        el: header,
        opacity: [0, 1],
        translateX: ["-100px", 0],
        duration: 700,
        easing: "easeOutExpo"
    });

    for (i = 0; i < branches.length; i++) {
        branch = branches[i];
        animate({
            el: branch,
            opacity: [0, 1],
            translateX: ["20px", 0],
            duration: 300,
            delay: 1000 + (i * 1000),
            easing: "easeOutExpo"
        });
    }
}
