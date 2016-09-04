$(function() {
    calcHeight();
    $(window).resize(calcHeight);
});

function calcHeight() {
    var leftDivHeight=$('#block-l').height(),
        centerDivHeight=$('#block-c').height(),
        rightDivHeight=$('#block-r').height(),
        leftDiv=$('#block-l'),
        centerDiv=$('#block-c'),
        rightDiv=$('#block-r');

    if (leftDivHeight>centerDivHeight) {
        if (leftDivHeight>rightDivHeight) {
            centerDiv.css({
                "height":leftDivHeight
            });
            rightDiv.css({
                "height":leftDivHeight
            });
        };
    } else if (centerDivHeight>rightDivHeight) {
        leftDiv.css({
            "height":centerDivHeight
        });
        rightDiv.css({
            "height":centerDivHeight
        });
    } else {
        centerDiv.css({
            "height":rightDivHeight
        });
        leftDiv.css({
            "height":rightDivHeight
        });
    };
    
};


