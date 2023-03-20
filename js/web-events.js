
const scrollToTop = document.querySelector("#scrollToTop");

function modifyHider(request) {
    if (scrollToTop) {
        if (request == 'show') {
            if (scrollToTop.classList.contains('hideScrollToTop')) {
                scrollToTop.classList.remove('hideScrollToTop')
                scrollToTop.classList.add('showScrollToTop')
            }
        } else if (request == 'hide') {
            if (scrollToTop.classList.contains('showScrollToTop')) {
                scrollToTop.classList.remove('showScrollToTop')
                scrollToTop.classList.add('hideScrollToTop')
            }
        }
    }
}

scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 500) {
        modifyHider('show')
    } else {
        modifyHider('hide')
    }
});

