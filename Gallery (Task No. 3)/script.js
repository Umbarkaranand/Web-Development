var car = document.getElementsByClassName('car');
var plane = document.getElementsByClassName('plane');
var bike = document.getElementsByClassName('bike');

var removedCarElements = Array.from(car);
var removedPlaneElements = Array.from(plane);
var removedBikeElements = Array.from(bike);

function remove() {
    for (var i = removedCarElements.length - 1; i >= 0; i--) {
        removedCarElements[i].style.display = "none";
    }
    for (var i = removedBikeElements.length - 1; i >= 0; i--) {
        removedBikeElements[i].style.display = "none";
    }
    for (var i = removedPlaneElements.length - 1; i >= 0; i--) {
        removedPlaneElements[i].style.display = "none";
    }
}


function All()
{
    remove();
    showAll();
}

function showAll() {
    removedCarElements.forEach(function(element) {
        element.style.display = "block";
    });

    removedBikeElements.forEach(function(element) {
        element.style.display = "block";
    });

    removedPlaneElements.forEach(function(element) {
        element.style.display = "block";
    });
}

function showBike()
{
    remove();
    removedBikeElements.forEach(function(elements) {
        elements.style.display = "block";
    });
}

function showCar()
{
    remove();
    removedCarElements.forEach(function(element) {
        element.style.display = "block";
    });
}
function showPlane()
{
    remove();
    removedPlaneElements.forEach(function(elements){
        elements.style.display="block";
    });

}