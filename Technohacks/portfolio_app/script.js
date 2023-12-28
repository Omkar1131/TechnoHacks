// sticky navbar
window.onscroll = () => {
    console.log('Scrolling...')
    let header = document.querySelector('.header');

    header.classList.toggle('sticky', window.scrollY > 20)
}