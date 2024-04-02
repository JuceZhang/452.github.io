document.addEventListener('DOMContentLoaded', function() {  
    var imageElement = document.getElementById('myImage');  
    var buttonElement = document.getElementById('switchButton');  
    var imageArray = ['1.jpg', '2.jpg'];  
    var currentIndex = 0;  
  
    buttonElement.addEventListener('click', function() {  
        currentIndex = (currentIndex + 1) % imageArray.length;  
        imageElement.src = imageArray[currentIndex]; 
    });  
});