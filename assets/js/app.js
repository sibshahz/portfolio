const robot = document.querySelector('.robots .robot');
const socialIcons = document.querySelectorAll('.social-icons a');
const menuIcons=document.querySelectorAll('.navigation .nav-item');
const menuTexts=document.querySelectorAll('.menu-text-item');
const menuSquare=menuIcons[0];
const menuTriangle=menuIcons[1];
const menuX=menuIcons[2];
const menuCircle=menuIcons[3];

//mouse click animations
menuSquare.addEventListener("click", () => {
  console.log("Square Event fired");
});

menuTriangle.addEventListener("click", () => {
  console.log("Triangle Event fired");
});

menuX.addEventListener("click", () => {
  console.log("X Event fired");
});

menuCircle.addEventListener("click", () => {
  console.log("Circle Event fired");
});

//mouse over and leave animations
menuSquare.addEventListener("mouseover",()=>{
  enterScale(menuSquare,0);
});
menuSquare.addEventListener("mouseleave",()=>{
  leaveScale(menuSquare,0);
});
menuTriangle.addEventListener("mouseover",()=>{
  enterScale(menuTriangle,1);
});
menuTriangle.addEventListener("mouseleave",()=>{
  leaveScale(menuTriangle,1);
});
menuX.addEventListener("mouseover",()=>{
  enterScale(menuX,2);
});
menuX.addEventListener("mouseleave",()=>{
  leaveScale(menuX,2);
});
menuCircle.addEventListener("mouseover",()=>{
  enterScale(menuCircle,3);
});
menuCircle.addEventListener("mouseleave",()=>{
  leaveScale(menuCircle,3);
});

function enterScale(item,indexText){
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1.2", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],{autoAlpha:1,left:0+"px",ease:"power4", duration:0.6},"-=0.6");
  
  // TL.from(menuTexts[index],{autoAlpha:0,marginLeft:-100 ,duration:0.6,ease:"power4"},"-=0.6");


  // TL.fromTo(menuTexts[index],{autoAlpha:0},{autoAlpha:1, duration:0.7});
  // TL.fromTo(menuTexts[index],{autoAlpha:0,marginLeft:-100},{marginLeft:0,marginRight:0 ,duration:0.6,ease:"power4"},'-=0.6');
}
function leaveScale(item,indexText){
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],{autoAlpha:0,left:160+"px",display:'none',ease:"power4", duration:0.6,onComplete(){
    gsap.to(this.target,{left:-160+"px"})
  }},"-=0.6");
  TL.set(menuTexts[index], {clearProps:"all"});
  // TL.to(menuTexts,{marginLeft:-160+"px",visibility:'hidden',display:"none"});
  // TL.to(menuTexts[index],{autoAlpha:1,marginLeft:100,duration:0.6,ease:"power4"},"-=0.6");
  
  // TL.fromTo(menuTexts[index],{autoAlpha:1},{autoAlpha:0, duration:0.6});
  // TL.fromTo(menuTexts[index],{x:0+"px"},{x:150+"px", duration:0.6},'-=1');
}


// const rect=document.querySelector('nav .nav-item svg rect');

// const gradientGreen=background: #16A085;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to right, #F4D03F, #16A085);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to right, #F4D03F, #16A085); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */


/**
 * The function is called rotateIcons. It creates a timeline called TL. The timeline animates the
 * socialIcons divs from opacity 0 to 1, and from y position 100 to 0, over a duration of 1 second.
 * Then, the timeline animates the socialIcons divs from a rotation of 180 degrees to 0 degrees, over
 * a duration of 1.8 seconds, using the elastic.out(1, 0.3) ease. The stagger is 0.6 seconds. The
 * animation is offset by 2 seconds.
 */
window.addEventListener("load",() => {
    // gsap.from(robot,{width:650,height:650,autoAlpha:0,duration:1});
    // gsap.fromTo(robot,{fontSize:"5rem"},{color:"purple",fontSize:"5.4rem", duration:0.8,repeat:-1});
    rotateIcons();
    // loadMenu();
});
// window.addEventListener("mousemove", function(event) {
//     moveRobots(event.pageX,event.pageY);
// });
  function loadMenu(){
    let TL=gsap.timeline();
    TL.fromTo([menuSquare,menuTriangle],{scale:15,display:"none",visibility:'hidden',x:-100},{scale:1,display:"block",visibility:"visible",x:0,duration:2,ease:"power4"});
    TL.fromTo([menuX,menuCircle],{scale:15,display:"none",visibility:'hidden',x:100},{scale:1,display:"block",visibility:"visible",x:0,duration:2,ease:"power4"},'-=2');
  }

  function rotateIcons(){
    let TL=gsap.timeline();
    TL.from(socialIcons,{autoAlpha:0,y:"100", duration:1,stagger:0.6})
    .fromTo(socialIcons,{rotation:"180"},{rotation:"0",duration:1.8,ease: "elastic.out(1, 0.3)",stagger:0.6},'-=2');
    setTimeout(loadMenu, 1800);
  }

  function moveRobots(x,y){
    gsap.to(robot, {x: x+"px",y:y+"px",ease:"power4.out",delay:0.4})

  }


  //barba transitions
  barba.init({
    transitions: [{
      name: 'opacity-transition',
      leave(data) {
        return gsap.to(data.current.container, {
          opacity: 0,
          y:-500,
          duration:3,
          ease:"power4"
        });
      },
      enter(data) {
        return gsap.from(data.next.container, {
          opacity: 0,
          y:560,
          duration:3,
          ease:"power4"
        });
      }
    }]
  });