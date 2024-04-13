document.addEventListener('DOMContentLoaded', function () {
    // ... (your existing code)

    var homeButton = document.querySelector('#logo');
    var homeLink = document.querySelector('#main-menu a[href="#"]');
    [homeButton, homeLink].forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            location.reload();
        });
    });
});
