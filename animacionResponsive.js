const tlMobile = gsap.timeline({paused:true});
const tlDesktop = gsap.timeline({paused:true});

tlMobile.to("#mindMap",{x:200})
tlDesktop.to("#mindMap",{x:-200})

if (window.innerWidth < 768) {
    tlMobile.play(); // Activar la animación para dispositivos móviles
  } else {
    tlDesktop.play(); // Activar la animación para dispositivos grandes
  }