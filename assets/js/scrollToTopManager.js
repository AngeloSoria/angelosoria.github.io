function toggleScroller() {
    var scrollPosition = window.scrollY;
    if (scrollPosition > 700) {
        if (scrollToTop.classList.contains('hideScrollToTop') === true) {
            scrollToTop.classList.remove('hideScrollToTop')
        }
    } else {
        if (scrollToTop.classList.contains('hideScrollToTop') === false) {
            scrollToTop.classList.add('hideScrollToTop')
        }
    }
}

const scrollToTop = document.querySelector("#scrollToTop");
scrollToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    })
})

window.addEventListener('scroll', toggleScroller);
window.onload = () => {
    toggleScroller()
}

