console.log('Loaded!');
var img=document.getElementById("madi");
var marginLeft = 0;
function moveRight (){
    marginLeft = marginLeft =40;
    img.style.marginLeft = marginLeft = '40px';
}
img.onclick = function moveRight () {
    var interval = setInterval(moveRight,100);
};
