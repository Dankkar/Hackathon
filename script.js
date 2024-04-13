document.addEventListener('DOMContentLoaded', function () {
    var imageBoxes = document.querySelectorAll('.image-box');
    var subMenuItems = document.querySelectorAll('.sub-menu li a');
  
    function displayContent(description) {
        var content = document.querySelector('#content');
        content.innerHTML = '<h1>' + description + '</h1><p>Đây là mô tả cho ' + description + '</p>';
    }
    function hideOtherBoxes(clickedBox) {
        imageBoxes.forEach(function (box) {
            if (box !== clickedBox) {
                box.style.display = 'none';
            } else {
                box.style.display = 'block';
            }
        });
    }
    

    function removeOtherBoxes(clickedBox) {
        imageBoxes.forEach(function (box) {
            if (box !== clickedBox) {
                box.remove();
            }
        });
    }
  
    imageBoxes.forEach(function (box) {
        box.addEventListener('click', function () {
            var description = this.querySelector('.image-description').textContent;
            displayContent(description);
            hideOtherBoxes(this);
        });
    });
    
    subMenuItems.forEach(function (item, index) {
        item.addEventListener('click', function (event) {
            event.preventDefault();
            var description = this.textContent;
            displayContent(description);
            hideOtherBoxes(imageBoxes[index]);
        });
    });

    var homeButton = document.querySelector('#logo');
    var homeLink = document.querySelector('#main-menu a[href="#"]');

    [homeButton, homeLink].forEach(function (element) {
        element.addEventListener('click', function (event) {
            event.preventDefault();
            location.reload();
        });
    });
});
