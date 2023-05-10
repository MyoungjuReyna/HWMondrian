

// screensize 938 x 755


var borderBarx = 600;
var borderBary = 800;
var pageHeight = 1500;
var pageWidth = 2500;

var canvas = document.getElementById('creativeCoding');
var ctx = canvas.getContext('2d');
dpi = window.devicePixelRatio;


function fix_dpi() {
    let style = {
      height() {
        return +getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);
      },
      width() {
        return +getComputedStyle(canvas).getPropertyValue('width').slice(0,-2);
      }
    }
  canvas.setAttribute('width', style.width() * dpi);
  canvas.setAttribute('height', style.height() * dpi);
}


function draw() {
  var canvas = document.getElementById('creativeCoding');
  if (canvas.getContext) {
   
    fix_dpi(); 
    var ctx = canvas.getContext('2d');
    // Black
    ctx.fillStyle = 'rgb(0, 0, 0)'; 
    ctx.fillRect(borderBarx - 100, 0, 30, pageWidth);
    ctx.fillRect(0 , borderBary, pageWidth, 30 );

    // TOPLEFT
    ctx.fillStyle = 'rgb(255, 0, 0)'
    ctx.fillRect(0, 0, 500, 800)

    // Blue
    ctx.fillStyle = 'rgb(51, 51, 255)'; 
    ctx.fillRect( 1300 ,  borderBary+25, borderBarx, 300);
     // Black
     ctx.fillStyle = 'rgb(0, 0, 0)'; 
     ctx.fillRect(borderBarx + 700, borderBary, 30, borderBary + pageHeight );
     // Black
     ctx.fillStyle = 'rgb(0, 0, 0)'; 
     ctx.fillRect(1300, borderBary + 300, pageWidth-borderBary, 40 );
    
     // Yellow
    ctx.fillStyle = 'rgb(255, 255, 0)'; 
    ctx.fillRect( borderBarx - 70,  borderBary + 700, borderBary -400, 150);

    // Gray Box
    ctx.fillStyle = 'rgb(160, 160, 160)'; 
    ctx.fillRect( borderBarx + 300,  borderBary + 700, borderBary -400, 150);

    // Black
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(borderBarx - 80, pageHeight -20 , borderBary, 30);
    // Black
    ctx.fillStyle = 'rgb(0, 0, 0)'; 
    ctx.fillRect(900, borderBary +700, 30, borderBary + pageHeight );
    
    }
  }










