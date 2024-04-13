document.addEventListener('DOMContentLoaded', function () {
    var imageBoxes = document.querySelectorAll('.image-box');
  
    imageBoxes.forEach(function (box) {
      box.addEventListener('click', function () {
        imageBoxes.forEach(function (otherBox) {
            if (otherBox !== box) {
              otherBox.remove();
            }
          });
        var description = this.querySelector('.image-description').textContent;
        
        var content = document.querySelector('#content');
        content.innerHTML = '<h1>' + description + '</h1><p>Đây là mô tả cho ' + description + '</p>';
      });
    });
  });
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
