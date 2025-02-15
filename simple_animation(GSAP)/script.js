window.addEventListener('mousemove',function (event) {
    const rectangle = document.getElementById('rectangle');

    let val = gsap.utils.mapRange(
        0,
        window.innerWidth,
        100 + rectangle.getBoundingClientRect().width/2,
        window.innerWidth - (100 + rectangle.getBoundingClientRect().width/2),
        event.clientX
    )
  gsap.to("#rectangle", {
    left:val,
    ease:'power3.out',
  })  
})