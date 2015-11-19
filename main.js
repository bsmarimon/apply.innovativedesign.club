
var hexDigits = new Array
        ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

//Function to convert hex format to a rgb color
function rgb2hex(rgb) {
 rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
 return hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
  return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

$( document ).ready(function() {

    console.log(1738);

    var page = document.getElementsByTagName("html")[0];
    var text1 = document.getElementsByClassName("circle")[0];
    var text2 = document.getElementsByClassName("circle")[1];

    var pink = Math.random();
    
    if (pink < 0.4 && pink < 0.7) {
    	page.style.backgroundColor = "#D43E7D";
    	text1.style.color = "#D43E7D";
    	text2.style.color = "#D43E7D";
    } 
    if (pink > 0.7 && pink < 1) {
    	page.style.backgroundColor = "#2D3236";
    	text1.style.color = "#2D3236";
    	text2.style.color = "#2D3236";
    }
});