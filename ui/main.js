console.log('Loaded!');
var img=document.getElementById("madi");
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft =400;
    img.style.marginLeft = marginLeft = '400px';
}
img.onclick = function () {
    var interval = setInterval(moveRight,50);
};
