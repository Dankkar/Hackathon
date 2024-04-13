document.addEventListener('DOMContentLoaded', function () {
    var homeButton = document.querySelector('#logo');
    var homeLink = document.querySelector('#main-menu a[href="#"]');
    [homeButton, homeLink].forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            location.reload();
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    var elements = document.querySelectorAll('p'); 
    var index = 0;

    // Initially hide all elements
    elements.forEach(function(element) {
        element.style.display = 'none';
    });

    function animateText(element) {
        var text = element.innerText; 
        element.innerText = ''; 
        element.style.display = 'block'; // Show the element before starting the animation

        var i = 0;
        var interval = setInterval(function() {
            if (i < text.length) {
                element.append(text.charAt(i)); 
                i++;
            } else {
                clearInterval(interval);
                // Move to the next element
                index++;
                if (index < elements.length) {
                    animateText(elements[index]);
                }
            }
        }, 50); 
    }

    // Start the animation with the first element
    if (elements.length > 0) {
        animateText(elements[0]);
    }
});

