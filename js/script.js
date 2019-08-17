function resize() {
    var $notebook = $(".notebook");
    var $wrapper = $(".wrapper");
    var $bookmark = $(".bookmark");

    var transformRule = 'translate(-50%, -50%)';

    if ($(window).width() > 500) {
        var wrapperHeight = $wrapper.height();
        var notebookHeight = $notebook.outerHeight() + $bookmark.height();

        var scale = Math.min($wrapper.width() / $notebook.outerWidth(), wrapperHeight / notebookHeight);

        transformRule = "translate(-50%, -50%) " + "scale(" + scale + ")"
    }

    $notebook.css({
        transform: transformRule
    });
}

$(window).resize(function () {
    resize();
});
$(window).on("orientationchange", function () {
    if ($(window).width() > 500) {
        resize();
    }
});
$(document).ready(function () {
    resize();
});