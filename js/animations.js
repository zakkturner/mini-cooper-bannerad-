let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let car = document.getElementById("car");
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let explore = document.getElementById("explore");
let exploreCont = document.getElementById("exploreCont");
let logo = document.getElementById("logo");
let bannerFrame = document.getElementById("bannerFrame");
let title3 = document.getElementById("title3");
let title4 = document.getElementById("title4");
let lights = document.getElementById("lights");
let bgLogo = document.getElementById("bgLogo");
let title5 = document.getElementById("title5");
let blue = document.getElementById("blue");
let orange = document.getElementById("orange");
let red = document.getElementById("red");
let blueCar = document.getElementById("bcar");
let redCar = document.getElementById("rcar");
let orangeCar = document.getElementById("ocar");
let replay = document.getElementById("replay");


const Timeline = {
    init: function(){
        Timeline.frame1();
        setTimeout(()=>{Timeline.colorPick()},16000)
    },
    replay: function(){
        replay.addEventListener('click', function(){
            Timeline.frame1();
        setTimeout(()=>{Timeline.colorPick()},16000)
        })
    }, 
    frame1: function(){
        TweenLite.from(title1,{duration: 1, x: 150, opacity: 0})
        TweenLite.from(title2,{duration: .8, x: -200, opacity: 0, delay: .5} );
        TweenLite.from(car,{duration: .8, x: -200, opacity: 0, delay: .5} );
        TweenLite.from(exploreCont, {duration: .5, delay:1.8, css:{ width: "0px"}});
        TweenLite.from([arrow1, arrow2], {duration: .5, delay:2, stagger: .2, opacity: 0, ease: "power3.inOut"});
        TweenLite.from(explore, {duration: .8, delay:2.5, opacity: 0, ease: "power3.inOut" });
        TweenLite.from(logo, {duration: .8, delay: 2.7, opacity: 0, ease: "power3.inOut" })

        Timeline.frame2();
    },

    frame2: function(){
        TweenLite.to(title1, {duration:.5, delay: 4.2, x: -150, opacity: 0});
        TweenLite.to(title2, {duration:.5, delay: 4.4, x: 150, opacity: 0});
        TweenLite.from(title3, {duration: 1, delay:4.2, x: 150, opacity: 0});
        TweenLite.from(title4, {duration: .8, x: -200, delay: 4.4, opacity: 0} );
        TweenLite.fromTo(bannerFrame,{css:{background: "#00a4ab"},  ease: Power1.easeOut,}, {duration: .5, delay: 4.5, css:{background: "#eb8100"}, ease: Power1.easeIn});
        TweenLite.fromTo(lights, {opacity: 0}, {duration: .2, delay: 5.5, repeat:1, repeatDelay: .1,  opacity: 1 });
        TweenLite.to(lights, {delay:7, duration: .2, opacity: 0}); 

        Timeline.frame3();
    },

    frame3: function(){
        TweenLite.to(bannerFrame,{duration: .5, delay: 7.5, css:{background: "#a20006"}, ease: Power1.easeIn});
        TweenLite.fromTo(lights, {opacity: 0}, {duration: .2, delay: 8.5, repeat:1, repeatDelay: .1,  opacity: 1 });
        TweenLite.to(lights, {delay:9.5, duration: .2, opacity: 0});
        TweenLite.to([car, title4, title3], {duration: .3, stagger: .1, x: 150, opacity: 0, delay: 10});
        TweenLite.to([arrow1,arrow2, logo, explore, exploreCont ], {opacity: 0, delay: 10.3});

        Timeline.frame4();
    },
    frame4: function(){
        TweenLite.to(bannerFrame,{duration: .2, delay: 10.3, css:{background: "#000"}});
        TweenLite.to(bgLogo, {duration: 1.5, delay: 10.5, css:{opacity: "1"}, ease: "power3.inOut" });
        TweenLite.to(bannerFrame, {duration: 1.5, delay: 10.5, ease: "bounce.out", css:{
            boxShadow: "inset 0px 0px 0px 10px #00a4ab"
        }});
        TweenLite.to(bgLogo,{duration: 1.5, delay: 13, css:{opacity: "0"}, ease: "power2.out"});

        Timeline.frame5();
    },
    frame5: function(){
        TweenLite.from(title5, {duration: 1, delay: 15, opacity:0});
        TweenLite.from([blue,orange, red], {duration:1, delay: 16, opacity: 0, x: 50, stagger: .2, ease:"power3.inOut"});
        TweenLite.from(blueCar, {duration: 1, delay: 17, opacity: 0});
        TweenLite.to([arrow1,arrow2, logo, explore, exploreCont ], {duration: 1, opacity: 1, delay: 18, ease: "power3.inOut"});
        bannerFrame.addEventListener('mouseenter', ()=>{
            TweenLite.to(arrow2, {duration: .5, x: 12})
        });
        bannerFrame.addEventListener('mouseleave', ()=>{
            TweenLite.to(arrow2, {duration: .5, x: 0})
        });
        TweenLite.from(replay, {duration: .8, delay: 17, css:{display: "none"}, x: 100, ease: "power3.inOut"});
        Timeline.arrowHover();
    },
    colorPick: function(){
        orange.addEventListener('mouseenter', ()=>{
            TweenLite.to(orangeCar, .6, {opacity:1, ease: Power1.easeOut});
            TweenLite.to(blueCar, .6, {opacity:0, ease: Power1.easeOut});
            TweenLite.to(redCar, .6, {opacity:0, ease: Power1.easeOut});
            orange.style.border = "2px solid #ffffff";
            blue.style.border = "none";
            red.style.border = "none";
        })
        blue.addEventListener('mouseenter', ()=>{
            TweenLite.to(orangeCar, .6, {opacity:0, ease: Power1.easeOut});
            TweenLite.to(blueCar, .6, {opacity:1, ease: Power1.easeOut});
            TweenLite.to(redCar, .6, {opacity:0, ease: Power1.easeOut});
            blue.style.border = "2px solid #ffffff";
            orange.style.border = "none";
            red.style.border = "none";
        });
        red.addEventListener('mouseenter', ()=>{
            TweenLite.to(orangeCar, .6, {opacity:0, ease: Power1.easeOut});
            TweenLite.to(blueCar, .6, {opacity:0, ease: Power1.easeOut});
            TweenLite.to(redCar, .6, {opacity:1, ease: Power1.easeOut});
            red.style.border = "2px solid #ffffff";
            orange.style.border = "none";
            blue.style.border = "none";
        });
    },
    arrowHover: function(){
        bannerFrame.addEventListener('mouseenter', ()=>{
            TweenLite.to(arrow2, {duration: .5, x: 12})
        })
        bannerFrame.addEventListener('mouseleave', ()=>{
            TweenLite.to(arrow2, {duration: .5, x: 0})
        })
    }

}

Timeline.init();
Timeline.replay();