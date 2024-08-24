const linea = document.querySelector("#path9")
const length = linea.getTotalLength();

linea.style.strokeDasharray = length;
linea.style.strokeDashoffset = length;

gsap.to("#path9",{
    strokeDashoffset:0,
    duration: 2,
    ease: "power2.inOut"
})