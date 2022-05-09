const robot = document.querySelector('.robots .robot');
const socialIcons = document.querySelectorAll('.social-icons a');


window.addEventListener("load",function(){
    gsap.from(robot,{width:650,height:650,autoAlpha:0,duration:1});
    gsap.fromTo(robot,{fontSize:"5rem"},{color:"purple",fontSize:"5.4rem", duration:0.8,repeat:-1});
    
    rotateIcons();
});
window.addEventListener("mousemove", function(event) {
    // event.preventDefault();
    moveRobots(event.pageX,event.pageY);
});

  function rotateIcons(){
    let TL=gsap.timeline();
    TL.from(socialIcons,{autoAlpha:0,y:"120", duration:1,stagger:0.6})
    .fromTo(socialIcons,{rotation:"180"},{rotation:"0",duration:1.8,ease: "elastic.out(1, 0.3)",stagger:0.6},'-=2');

    // gsap.fromTo(socialIcons,{autoAlpha:1,rotation:"180"},{autoAplha:0,rotation:"0",duration:2,ease: "elastic.out(1, 0.3)",stagger:0.4});
  }

  function moveRobots(x,y){

    gsap.to(robot, {x: x+"px",y:y+"px",ease:"power4.out",delay:0.4})


    
  }
