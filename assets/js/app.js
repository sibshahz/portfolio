const robot = document.querySelector('.robots .robot');
const mouse={
    x:undefined,
    y:undefined
}
window.addEventListener("load",function(){
    gsap.from(robot,{width:650,height:650,autoAlpha:0,duration:1});
});
window.addEventListener("mousemove", function(event) {
    // event.preventDefault();
    moveRobots(event.pageX,event.pageY);
});

  function moveRobots(x,y){

    gsap.to(robot, {x: x+"px",y:y+"px",ease:"elastic.out(0.3, 0.1)", duration: 1.8,delay:0.2})


    
  }
