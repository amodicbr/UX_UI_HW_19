//I want the javascript to rotate the class rotate when the mouse enters the Element.
//onHover is the function. 
//Target it to the correct Element. 
//Element doesn't have class typically but it's added. 
//Mouse leave would rotate it back. 

/*const mouseTarget = document.getElementsByClassName('rotate');

mouseTarget.addEventListener('mouseenter', (Event)); {
    mouseTarget.style.transform = 'rotate (90deg)';
}

function rotateImg() */

/*const mouseTarget = document.getElementsByClassName('rotate');

mouseTarget.addEventListener('mouseenter', (e) => {
    mouseTarget.style.border = '5px hotpink';
  });

  function addEventListener()*/

function rotateImg(){
    document.getElementsByClassName('rotate').addEventListener('onMouseOver', rotateImg);

}

console.log(rotateImg);



