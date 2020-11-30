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


// Frame 1
gsap.from(title1,{duration: 1, x: 150, opacity: 0})
gsap.from(title2,{duration: .8, x: -200, opacity: 0, delay: .5} );
gsap.from(car,{duration: .8, x: -200, opacity: 0, delay: .5} );
gsap.from(exploreCont, {duration: .5, delay:1.8, css:{ width: "0px"}});
gsap.from([arrow1, arrow2], {duration: .5, delay:2, stagger: .2, opacity: 0, ease: "power2.in"});
gsap.from(explore, {duration: .8, delay:2.5, opacity: 0, ease: "power2.in" });
gsap.from(logo, {duration: .8, delay: 2.7, opacity: 0, ease: "power2.in" })

// Frame 2
gsap.to(title1, {duration:.5, delay: 4.2, x: -150, opacity: 0});
gsap.to(title2, {duration:.5, delay: 4.4, x: 150, opacity: 0});
gsap.from(title3, {duration: 1, delay:4.2, x: 150, opacity: 0});
gsap.from(title4, {duration: .8, x: -200, delay: 4.4, opacity: 0} );
gsap.fromTo(bannerFrame,{css:{background: "#00a4ab"}}, {duration: .2, delay: 4.5, css:{background: "#eb8100"}});
gsap.fromTo(lights, {opacity: 0}, {duration: .2, delay: 5.5, repeat:1, repeatDelay: .1,  opacity: 1 });
gsap.to(lights, {delay:7, duration: .2, opacity: 0});

// Frame 3
gsap.to(bannerFrame,{duration: .2, delay: 7.5, css:{background: "#a20006"}});
gsap.fromTo(lights, {opacity: 0}, {duration: .2, delay: 8.5, repeat:1, repeatDelay: .1,  opacity: 1 });
gsap.to(lights, {delay:9.5, duration: .2, opacity: 0});
gsap.to([car, title4, title3], {duration: .3, stagger: .1, x: 50, opacity: 0, delay: 10});
gsap.to([arrow1,arrow2, logo, explore, exploreCont ], {opacity: 0, delay: 10.3});


// Frame 4

gsap.to(bannerFrame,{duration: .2, delay: 10.3, css:{background: "#000"}});
gsap.to(bgLogo, {duration: 1.5, delay: 10.5, css:{opacity: "1"}, ease: "power2.in" });
gsap.to(bannerFrame, {duration: 1.5, delay: 10.5, ease: "bounce.out", css:{
    boxShadow: "inset 0px 0px 0px 10px #00a4ab"

}});

gsap.to(bgLogo,{duration: 1.5, delay: 13, css:{opacity: "0"}, ease: "power2.out"});

// Frame 5
gsap.from(title5, {duration: 1, delay: 15, opacity:0});
gsap.from([blue,orange, red], {duration:.8, delay: 16, opacity: 0, x: 50, stagger: .5 });
gsap.from(blueCar, {duration: 1, delay: 17, opacity: 0});
// gsap.to(exploreCont, {duration: .5, delay:17.5, css:{ width: "150px"}});
// gsap.to([arrow1, arrow2], {duration: .5, delay:17.7, stagger: .2, opacity: 1, ease: "power2.in"});
// gsap.to(explore, {duration: .8, delay:18.2, opacity: 1, ease: "power2.in" });
gsap.to([arrow1,arrow2, logo, explore, exploreCont ], {opacity: 1, delay: 18});

bannerFrame.addEventListener('mouseenter', ()=>{
    gsap.to(arrow2, {duration: .5, x: 12})
})

bannerFrame.addEventListener('mouseleave', ()=>{
    gsap.to(arrow2, {duration: .5, x: 0})
})


// Color picker
orange.addEventListener('mouseenter', addSelected);
blue.addEventListener('mouseenter', addSelected);
red.addEventListener('mouseenter', addSelected);

function addSelected(){
    let oldSelect = document.getElementsByClassName('selected');
    let selectedCar = document.getElementsByClassName('cselected');
    
   
    oldSelect[0].classList.remove('selected');
    this.classList.add('selected');

    if(orange.classList.contains("selected")){
        gsap.to(selectedCar[0], {duration: 1, ease: 'power2.out', css:{opacity: 0}})
        selectedCar[0].classList.remove('cselected');
        orangeCar.classList.add('cselected')
        gsap.to(orangeCar, {duration: .5, ease: 'power2.in', css:{opacity: 1}});
    } else if(blue.classList.contains("selected")){
        gsap.to(selectedCar[0], {duration: 1, ease: 'power2.out', css:{opacity: 0}})
        selectedCar[0].classList.remove('cselected');
        blueCar.classList.add('cselected')

        gsap.to(blueCar, {duration: .5, ease: 'power2.in', css:{opacity: 1}});

    }else{
        gsap.to(selectedCar[0], {duration: 1, ease: 'power2.out', css:{opacity: 0}})
        selectedCar[0].classList.remove('cselected');
        redCar.classList.add('cselected')
        gsap.to(redCar, {duration: .5, ease: 'power2.in', css:{opacity: 1}});
        
    }
   
}

