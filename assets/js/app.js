const robot = document.querySelector('.robots .robot');
const socialIcons = document.querySelectorAll('.social-icons a');
const menuIcons=document.querySelectorAll('.navigation .nav-item');
const menuTexts=document.querySelectorAll('.menu-text-item');
const menuSquare=menuIcons[0];
const menuTriangle=menuIcons[1];
const menuX=menuIcons[2];
const menuCircle=menuIcons[3];
const profilePic=document.querySelector('.pic-container');
const sections=document.querySelectorAll('.sections section');
const elements=document.querySelectorAll('.elements');
const windowWidth=window.outerWidth;
const windowHeight=window.outerHeight;
const element=[profilePic];
const drawerButton=document.querySelector('.draw-button');
const drawer=document.querySelector('#drawer');
const menuLinks=document.querySelectorAll('.link');

const fontColors=[
  "#3CA55C",
  "#a00bcc",
  "#2948ff",
  "#f80759"
];
const arrowRight=document.querySelector('.right');
const arrowLeft=document.querySelector('.left');

drawerButton.addEventListener("click",()=>{
  openDrawer();
});
//menu links event registration
menuLinks.forEach(function(elem,index){
  elem.addEventListener("click",function(){
    handleClick(index);
  });
})
//mouse click animations
menuIcons.forEach(function(elem,index) {
  elem.addEventListener("mouseover", function() {
    enterScale(menuIcons[index],index);
  });
  elem.addEventListener("mouseleave", function() {
    leaveScale(menuIcons[index],index);
  });
  elem.addEventListener("click",function(){
    handleClick(index);
  });
  gsap.set(menuIcons[index],{color:fontColors[index]});
});

let isDrawerOpen=false;
function openDrawer(){
  // let drawTL=gsap.timeline();
  if(isDrawerOpen){
    gsap.to(drawer,{left:-164,duration:1,ease:"power4"});
  
  } else{
    gsap.to(drawer,{left:0,duration:1,ease:"power4"});
    gsap.from(profilePic,{y:"-120%",duration:1,ease:"elastic.out(1, 0.7)",delay:0.4});
    gsap.from('.title',{autoAlpha:0,y:-160+'%',duration:1.6,ease:"power4"});
    gsap.from('.sub-title',{autoAlpha:0,y:160+'%',duration:1.6,ease:"power4"},"-=1");
    gsap.from(menuLinks,{x:"-100%",opacity:0.3,duration:0.6,ease:"power4",stagger:0.4});
  } 
               
  isDrawerOpen=!isDrawerOpen;
}
let clickedSection=undefined;
let TL=gsap.timeline();
function handleClick(ind){
  if (TL.isActive()) { return; }
  loadArrows();
  let index=parseInt(ind);

  if(clickedSection!==undefined){
    if(clickedSection===index){
      negate(index);
      return;
    }  
    clickedSection > index ? 
    scrollLeft(sections[clickedSection],index):scrollRight(sections[clickedSection],index) ;

  
  }else{
    clickedSection=index;
    firstPull(sections[index],clickedSection);
    

  }

  gsap.to([".title",".sub-title",socialIcons,menuIcons[index],"a"],{color:fontColors[index]});

}

function negate(index){

    gsap.to(sections[parseInt(clickedSection)],{
      keyframes: [
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 4 },
        { duration: 0.1, x: -4 },
        { duration: 0.1, x: 0 },
      ]
    });
    return;
}

function scrollLeft(section,index){
  if (TL.isActive()) { return; }
  TL.to(sections[clickedSection],
    {x:-(windowWidth/2),rotateY:-50,autoAlpha:0,display:"none",visibility:"hidden",duration:1.2,ease: "back.out(1.7)"});
  TL.fromTo(sections[index],
    {x:(windowWidth/2),rotateY:50,autoAlpha:1,display:"none",visibility:"hidden"},
    {x:0,rotateY:0,autoAlpha:1,display:"block",visibility:"visible",duration:1.2,ease: "back.out(1.7)"});
  clickedSection=parseInt(index);
}

function scrollRight(section,index){
  if (TL.isActive()) { return; }
  

  TL.to(sections[clickedSection],
    {x:(windowWidth/2),rotateY:-50,autoAlpha:0,display:"none",visibility:"hidden",duration:1.2,ease: "back.out(1.7)"});
  TL.fromTo(sections[index],
    {x:-(windowWidth/2),rotateY:50,autoAlpha:1,display:"none",visibility:"hidden"},
    {rotateY:0,x:0,autoAlpha:1,display:"block",visibility:"visible",duration:1.2,ease: "back.out(1.7)"});
  clickedSection=parseInt(index);
}

function firstPull(section,index){
  clickedSection=parseInt(index);
  gsap.fromTo(section,
    {y:500,autoAlpha:0,display:"none"},
    {y:0,autoAlpha:1,display:"block",duration:1,ease: "back.out(1.7)"});
  // moveElements(1);

}
arrowRight.addEventListener("click",function(){
  if((clickedSection+1)==sections.length){
    negate(clickedSection);
  }else{
    handleClick(clickedSection+1);
  }
});
arrowLeft.addEventListener("click",function(){
  if((clickedSection)==0){
    negate(clickedSection);
  }else{
    handleClick(clickedSection-1);
  }
  
});
function enterScale(item,indexText){
  
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1.2", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],
    {color:fontColors[index],autoAlpha:1,left:0,ease:"power4", duration:0.6},"-=0.6");
  
  
}
function leaveScale(item,indexText){
  let TL=gsap.timeline();
  let index=parseInt(indexText);
  TL.to(item,{scale:"1", duration:0.6, ease:"power4"});
  TL.to(menuTexts[index],
    {autoAlpha:0,left:160+"px",display:'none',ease:"power4", duration:0.6,onComplete(){
    // gsap.to(menuTexts[index],{left:-160+"px"})
  }},"-=0.6");
  TL.set(menuTexts[index], {clearProps:"all"});
}
let arrowsLoaded=false;

function loadArrows(){
  let arrowTL=gsap.timeline();
  if(!arrowsLoaded){
    arrowTL.fromTo('.right',{autoAlpha:0,display:"none",x:10},{autoAlpha:1,display:"block",x:0,duration:2,ease:"power4"});
       arrowTL.fromTo('.left',{autoAlpha:0,x:-10,display:"none"},{autoAlpha:1,x:0,display:"block",duration:2,ease:"power4"},"-=2");
       arrowsLoaded=true;
  }else{
    return;
  }
}


window.addEventListener("load",() => {
    // gsap.from(robot,{width:650,height:650,autoAlpha:0,duration:1});
    // gsap.fromTo(robot,{fontSize:"5rem"},{color:"purple",fontSize:"5.4rem", duration:0.8,repeat:-1});
    
    let TL=gsap.timeline(
      {onComplete:rotateIcons}
    );
    TL.delay(1);
    TL.fromTo([menuSquare,menuTriangle],
      {scale:1.2,display:"none",visibility:'hidden',x:-200},
      {scale:1,display:"block",visibility:"visible",x:0,y:0,duration:2.5,ease:"power4"});
    TL.fromTo([menuX,menuCircle],
      {scale:1.2,display:"none",visibility:'hidden',x:200},
      {scale:1,display:"block",visibility:"visible",x:0,y:0,duration:2.5,ease:"power4"},'-=2.5');
    TL.to('nav',{paddingTop:2+'%',duration:1});

});
function moveElements(index){
    // let tl_robots=gsap.timeline();
    // tl_robots.stop();
    // tl_robots.timeScale( Math.random() * 0.8);
    // tl_robots.to(profilePic, 
    //   {
    //     x:"random(-120%, 200%, 50)",
    //     y:"random(-120%, 120%, 50)",
    //     duration:  "random(2, 5, 1)",
    //     repeat:-1,
    //     repeatRefresh:true
    //   });
      // tl_robots.to(".elements img", 
      //   {
      //     autoAlpha:1,
      //     x:"random(0%, 100%, 10)",
      //     y:"random(0%, 100%, 10)",
      //     duration:  "random(5, 10, 1)",
      //     repeat:-1,
      //     repeatRefresh:true
      //   });
}


  function rotateIcons(){
    let TL=gsap.timeline();
    TL.from(socialIcons,{autoAlpha:0,x:"100", duration:1,stagger:0.6})
    .fromTo(socialIcons,
      {rotation:"180"},
      {rotation:"0",duration:1.8,ease: "elastic.out(1, 0.3)",stagger:0.6},'-=2');
  }

  // function moveRobots(x,y){
  //   // gsap.to(robot, {x: x+"px",y:y+"px",ease:"power4.out",delay:0.4});
  //   let tl_robots=gsap.timeline();
  //   tl_robots.timeScale(0.1);
  //   tl_robots.to(profilePic, {marginTop: y+"px",marginLeft:x+"px"});
  // }

