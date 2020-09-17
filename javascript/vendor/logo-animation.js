$("#logo").on("click",
            function(){
  tl.restart();
});

let tl = gsap.timeline();

tl.set(".cir",{
  scale: 0,
  transformOrigin: "center"
})
.set("#logo",{
  scale: 0.27,
  transformOrigin: "center",
  opacity: 0
})
.to(".cir",{
      ease: "back.out(3)",
  duration: 4,
  scale: gsap.utils.distribute({
    base: 1,
    amount: 3,
    from: "end",
  }),
  stagger: {
    each: 0.4,

  }
})
.to("#logo",{
  scale: 0.9,
  transformOrigin: "center",
  opacity: 1,
  duration: 3
},"-=1.5") ;