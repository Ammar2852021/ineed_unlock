

window.onload = function (){
    var divs = document.getElementsByClassName('content_div');
divs[0].style.display = 'block';};



function showDiv(divId) {
    var divs = document.getElementsByClassName('content_div');

    for (var i = 0; i < divs.length; i++) {
        divs[i].style.display = 'none';
    }
    document.getElementById(divId).style.display = 'block';}