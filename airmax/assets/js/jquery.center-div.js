$(function() {
    centerDiv();
    $(window).resize(centerDiv);
});

function centerDiv() {
    var divHeight=$('#centered-div').height(),
        divWidth=$('#centered-div').width(),
        divAction=$('#centered-div');

    divAction.css({
        "height":divHeight,
        "width":divWidth,
        "position": 'absolute',
        "left":'50%',
        "top":'50%',
        "margin-top":-(divHeight/2),
        "margin-left":-(divWidth/2)
    });
    
};
