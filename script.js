const canvas=document.getElementById("canvas"); //"canvas" is object
console.dir(canvas)
const canvasWidth=canvas.width=960;
const canvasHeight=canvas.height=480;
const ctx=canvas.getContext("2d"); //This helps you to create 2d figures like triangle,rectangle
//Creating a rectangle
console.log(Math.random()*255); //Range[0,1)
// ctx.fillRect(x,y,width,height);
let x0=0;
let y0=0;

function animate(){
    ctx.fillStyle=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    ctx.fillRect(Math.random()*canvasWidth*0.95,Math.random()*canvasHeight*0.95,20,20);
    canvas.style.boxShadow=`0 0 25px 20px rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
    //Converting function into an infinite loop;
    requestAnimationFrame(()=>{
        setTimeout(animate,500)
    });
};
animate();