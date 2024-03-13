function locomotive() {
    gsap.registerPlugin(ScrollTrigger);
  
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
  
      // for tablet smooth
      tablet: { smooth: true },
  
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
  
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
  
      // follwoing line is not required to work pinning on touch screen
  
      /* pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed"*/
    });
  
  
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
    ScrollTrigger.refresh();
  
  
  }
  locomotive();
  var nav = document.querySelector("#nav")
var page1img = document.querySelector("#page1 img")


var tl1 = gsap.timeline();
tl1.to("#page1 img", {
  
  delay: 1,
  scale: 2.2,
  
})
tl1.from("#nav2", {
  
    delay: 0,
    transition: "cubic-bezier(0.19, 1, 0.22, 1) 1s",
    y: -200,
    stagger: 1,
    opacity: 1,
    
  })
tl1.from("#nav1", {
  
  delay: 0,
  transition: "cubic-bezier(0.19, 1, 0.22, 1)",
  y: -100,
  stagger: 1,
  opacity: 1,
  
})
Shery.textAnimate("#page3 #collect h3",{
    style:1,
    y:10,
    delay:0.1,
    duration:3
})
Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

 Shery.makeMagnet("h3" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,

  });

  var arr=[{
    username:"Aditya Pawar",
    Image:"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
    para:"Good doctor. He is very simple and gentle in his behavior. He will give sufficient time to each patient.  I never found commercial nature in him.",
  
  },{
    username:"Aditya Trip.",
    Image:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    para:"I’m a delicate and sensitive person,  was treated first time when I met him in 2008 and the way he followed up. He is not only an Excellent Doctor , he is simple.",
  
  },
  {
    username:"Daksh Bawane",
    Image:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    para:"Very good doctor and kind at heart. Gives maximum time to hear patient views.  not just diagnosing correctly. One of the  His clinical diagnosis is very sharp.   ",
  
  },
  {
    username:"Keshav Gyan",
    Image:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
    para:"Dr.Sujeeth Kumar listens to you very patiently & gives you sufficient time to say your problems. He diagnosed in nbest doctors I visited"
  }
]

var big = document.querySelector("#big")
function show() {
    var clutter = ""
    arr.forEach(function (elem, index) {
        clutter += ` <div class="react">
        <img src="${elem.Image}"
            alt="">
        <div id="review">
            <h1>${elem.username}</h1>
            <p>${elem.para}</p>
        </div>
    </div>`

  
    })
    big.innerHTML = clutter
}
show();