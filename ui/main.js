console.log('Loaded!');
var img=document.getElementById("madi");
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft =100;
    img.style.marginLeft = marginLeft = '100px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,25);
};
