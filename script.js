
function showPage(pageId){

    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const pageToShow = document.getElementById(pageId);
    if (pageToShow) {

        pageToShow.classList.add('active');
    }
}