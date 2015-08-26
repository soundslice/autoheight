(function() {
function pageY(elem) {
    return elem['offsetParent'] ? (elem['offsetTop'] + pageY(elem['offsetParent'])) : elem['offsetTop'];
}
function autoheight(iframeId) {
    var ssiframe = document.getElementById(iframeId),
        resizeIframe = function() {
            var height = window.innerHeight - pageY(ssiframe);
            if (height < 0) {
                height = 0;
            }
            ssiframe.style.height = height + 'px';
        };
    document.addEventListener('DOMContentLoaded', resizeIframe, false);
    window.addEventListener('resize', resizeIframe, false);
}
window['autoheight'] = autoheight;
})();
