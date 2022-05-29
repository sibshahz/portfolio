const robot = document.querySelector('.robots .robot');
const socialIcons = document.querySelectorAll('.social-icons a');
const menuIcons=document.querySelectorAll('.navigation .nav-item');
const menuTexts=document.querySelectorAll('.menu-text-item');
const menuSquare=menuIcons[0];
const menuTriangle=menuIcons[1];
const menuX=menuIcons[2];
const menuCircle=menuIcons[3];
const sections=document.querySelectorAll('.sections section');
const fontColors=[
  "#3CA55C",
  "#a00bcc",
  "#2948ff",
  "#f80759"
];

//mouse click animations
menuIcons.forEach(function(elem,index) {
  elem.addEventListener("mouseover", function() {
    enterScale(menuIcons[index],index);
  });
  elem.addEventListener("mouseleave", function() {
    leaveScale(menuIcons[index],index);
  });
  elem.addEventListener("click",function(){
    handleClick(menuIcons[index],index);
  });
  gsap.set(menuIcons[index],{color:fontColors[index]});
});
let clickedSection=undefined;
let TL=gsap.timeline();
function handleClick(item,ind){
  let index=parseInt(ind);
  if (TL.isActive()) { return; }
  
  if(clickedSection!==undefined){
    

    TL.to(sections[parseInt(clickedSection)],{autoAlpha:0,display:"none",visibility:"hidden",duration:1});
    clickedSection=index;
    TL.to(sections[parseInt(clickedSection)],{autoAlpha:1,display:"block",visibility:"visible",duration:1});
    
  }else{
    clickedSection=index;
    gsap.to(sections[index],{autoAlpha:1,display:"block",visibility:"visible",duration:1});
  }

  gsap.to([".title",".sub-title",socialIcons,menuIcons[index],"a"],{color:fontColors[index]});
}

function enterScale(item,indexText){
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1.2", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],{color:fontColors[index],autoAlpha:1,left:0+"px",ease:"power4", duration:0.6},"-=0.6");
  
  
}
function leaveScale(item,indexText){
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],{autoAlpha:0,left:160+"px",display:'none',ease:"power4", duration:0.6,onComplete(){
    gsap.to(this.target,{left:-160+"px"})
  }},"-=0.6");
  TL.set(menuTexts[index], {clearProps:"all"});
}


window.addEventListener("load",() => {
    // gsap.from(robot,{width:650,height:650,autoAlpha:0,duration:1});
    // gsap.fromTo(robot,{fontSize:"5rem"},{color:"purple",fontSize:"5.4rem", duration:0.8,repeat:-1});
    
    let TL=gsap.timeline(
      {onComplete:rotateIcons}
    );
    TL.delay(1);
    TL.fromTo([menuSquare,menuTriangle],{scale:1.2,display:"none",visibility:'hidden',x:-200},{scale:1,display:"block",visibility:"visible",x:0,y:0,duration:2.5,ease:"power4"});
    TL.fromTo([menuX,menuCircle],{scale:1.2,display:"none",visibility:'hidden',x:200},{scale:1,display:"block",visibility:"visible",x:0,y:0,duration:2.5,ease:"power4"},'-=2.5');
    TL.to('nav',{paddingTop:2+'%',duration:1});
    TL.from('.title',{autoAlpha:0,y:-160+'%',duration:1.6,ease:"power4"},'+=1');
    TL.from('.sub-title',{autoAlpha:0,y:160+'%',duration:1.6,ease:"power4"},"-=2");
});
// window.addEventListener("mousemove", function(event) {
//     moveRobots(event.pageX,event.pageY);
// });

  function rotateIcons(){
    let TL=gsap.timeline();
    TL.from(socialIcons,{autoAlpha:0,x:"100", duration:1,stagger:0.6})
    .fromTo(socialIcons,{rotation:"180"},{rotation:"0",duration:1.8,ease: "elastic.out(1, 0.3)",stagger:0.6},'-=2');
  }

  function moveRobots(x,y){
    gsap.to(robot, {x: x+"px",y:y+"px",ease:"power4.out",delay:0.4})

  }

