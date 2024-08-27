//texto
const dueño = document.getElementById("owner");
const agenda= document.getElementById("agenda");
const posicionarMarca= document.getElementById("posicionarMarca");
const branding= document.getElementById("branding");
const excelente= document.getElementById("excelente");
const aumentarVentas= document.getElementById("aumentarVentas");
const agendaBig= document.getElementById("agendaBig");
const agendaBigBg= document.getElementById("agendaBigBg");
const estrategia= document.getElementById("estrategia");
const camino= document.getElementById("camino");

//si/no
const si1= document.getElementById("si1");
const si2= document.getElementById("si2");
const si3= document.getElementById("si3");
const no1= document.getElementById("no1");
const no2= document.getElementById("no2");
const no3= document.getElementById("no3");

// flechas recorrido principal 
//loopeo entre los elementos con id flechaX y les cambio la propiedad del trazo
for (let i = 1; i <= 8; i++) {
  const flecha = document.getElementById(`flecha${i}`);
  const flechaLength = flecha.getTotalLength();


  flecha.style.strokeDasharray = flechaLength;
  flecha.style.strokeDashoffset = flechaLength;

  window[`flecha${i}`] = flecha;
}

// //tween de flecha que me quedo al reves 

// flechaFinal
for (let i = 1; i <= 6; i++) {
  const flechaF = document.getElementById(`flechaF${i}`);
  const flechaFLength = flechaF.getTotalLength();
  flechaF.style.strokeDasharray = flechaFLength;
  flechaF.style.strokeDashoffset = flechaFLength;
  window[`flechaF${i}`] = flechaF;
}

//like & tick
const iconoLike = document.getElementById("iconoLike");
const iconoTick = document.getElementById("iconoTick");



//logos+array
const logoYamatec= document.getElementById("logoYamatec");
const logoUdana= document.getElementById("logoUdana");
const logoSound= document.getElementById("logoSound");
const logoX= document.getElementById("logoX");
const logoBelen= document.getElementById("logoBelen");
const logoGallmarquez= document.getElementById("logoGallmarquez");
const arrayLogo = [logoYamatec, logoUdana, logoSound, logoX, logoBelen, logoGallmarquez];

let mm = gsap.matchMedia();
// let tlMindmap;


mm.add("(max-width: 767px)", () => {
    const tlMindmap = gsap.timeline({ 
    // scrollTrigger:{
    //   trigger: ".hero__ani",
    //   scrub: true,
    //   markers:true,
    //   pin:true,
    //   pinSpacing:true,
    //   start: "top 10%",
    //   end: "500% 110%"
    // }
  })

  tlMindmap.to(dueño, {x:100, duration:1})
});







// matchMedia.add("(min-width: 767px)", () => {
//   const tlMindmap2 = gsap.timeline({
//     scrollTrigger:{
//       trigger: ".hero__ani",
//       scrub: true,
//       markers:true,
//       pin:true,
//       pinSpacing:true,
//       start: "top 10%",
//       end: "500% 110%"
//     }
//   })
// });

// tlMindmap2
//          .from(dueño,{opacity:0})
//          .to(flecha1,{strokeDashoffset:0})
//          .from(no1, {opacity:0},"<50%")
//          .from(agenda,{opacity:0})
//          .to(flecha2,{strokeDashoffset:0})
//          .from(si1, {opacity:0},"<50%")
//          .from(posicionarMarca,{opacity:0})
//          .to(flecha3,{strokeDashoffset:0})
//          .from(si2, {opacity:0},"<50%")
//          .from(branding,{opacity:0})
//          .to(flecha4,{strokeDashoffset:0})
//          .from(no2, {opacity:0},"<50%")
//          .from(excelente,{opacity:0})
//          .from(iconoLike,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")
//          .from(aumentarVentas,{opacity:0})
//          .to(flecha5,{strokeDashoffset:0})
//          .from(si3, {opacity:0},"<50%")
//          .from(estrategia,{opacity:0})
//          .to(flecha6,{strokeDashoffset:0})
//          .to(flecha7,{strokeDashoffset:0},"<")
//          .from(agendaBig,{opacity:0})
//          .from(agendaBigBg,{opacity:0},"<")
//          .to(flecha8,{strokeDashoffset:0})
//          .from(no3, {opacity:0},"<10%")
//          .from(camino,{opacity:0})
//          .from(iconoTick,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")

//          .to(flechaF1,{strokeDashoffset:0},"<")
//          .from(logoYamatec,{opacity:0},)
//          .to(flechaF2,{strokeDashoffset:0},"<")
//          .from(logoUdana,{opacity:0},)
//          .to(flechaF3,{strokeDashoffset:0},"<")
//          .from(logoSound,{opacity:0},"<+80%")
//          .to(flechaF4,{strokeDashoffset:0},"<")
//          .from(logoX,{opacity:0},"<+80%")
//          .to(flechaF5,{strokeDashoffset:0},"<")
//          .from(logoBelen,{opacity:0},"<+80%")
//          .to(flechaF6,{strokeDashoffset:0},"<")
//          .from(logoGallmarquez,{opacity:0},"<+80%")

// tlMindmap2
//          .from(dueño,{opacity:0})
//          .to(flecha1,{strokeDashoffset:0})
//          .from(no1, {opacity:0},"<50%")
//          .from(agenda,{opacity:0})
//          .to(flecha2,{strokeDashoffset:0})
//          .from(si1, {opacity:0},"<50%")
//          .from(posicionarMarca,{opacity:0})
//          .to(flecha3,{strokeDashoffset:0})
//          .from(si2, {opacity:0},"<50%")
//          .from(branding,{opacity:0})
//          .to(flecha4,{strokeDashoffset:0})
//          .from(no2, {opacity:0},"<50%")
//          .from(excelente,{opacity:0})
//          .from(iconoLike,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")
//          .from(aumentarVentas,{opacity:0})
//          .to(flecha5,{strokeDashoffset:0})
//          .from(si3, {opacity:0},"<50%")
//          .to("#mindMap",{y:-100},"<")
//          .from(estrategia,{opacity:0})
//          .to(flecha6,{strokeDashoffset:0})
//          .to(flecha7,{strokeDashoffset:0},"<")
//          .from(agendaBig,{opacity:0})
//          .from(agendaBigBg,{opacity:0},"<")
//          .to(flecha8,{strokeDashoffset:0})
//          .from(no3, {opacity:0},"<10%")
//          .to("#mindMap",{y:-200},"<")
//          .from(camino,{opacity:0})
//          .from(iconoTick,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")

//          .to("#mindMap",{y:-350},"<")
//          .to(flechaF1,{strokeDashoffset:0},"<")
//          .from(logoYamatec,{opacity:0},)
//          .to(flechaF2,{strokeDashoffset:0},"<")
//          .from(logoUdana,{opacity:0},)
//          .to(flechaF3,{strokeDashoffset:0},"<")
//          .from(logoSound,{opacity:0},"<+80%")
//          .to(flechaF4,{strokeDashoffset:0},"<")
//          .from(logoX,{opacity:0},"<+80%")
//          .to(flechaF5,{strokeDashoffset:0},"<")
//          .from(logoBelen,{opacity:0},"<+80%")
//          .to(flechaF6,{strokeDashoffset:0},"<")
//          .from(logoGallmarquez,{opacity:0},"<+80%")

 
// if (window.innerWidth < 768) {
//   tlMindmap.play(); // Activar la animación para dispositivos móviles
// } else {
//   tlMindmap2.play(); // Activar la animación para dispositivos grandes
// }
        



// Configuración de GSAP matchMedia
// let mm = gsap.matchMedia();

// mm.add("(max-width: 767px)", () => {
//   // Animación para pantallas menores a 768px (tlMindmap)
//   const tlMindmap = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".hero__ani",
//       scrub: true,
//       markers: true,
//       pin: true,
//       pinSpacing: true,
//       start: "top 10%",
//       end: "500% 110%"
//     }
//   });

  
// });

// mm.add("(min-width: 768px)", () => {
//   // Animación para pantallas mayores a 768px (tlMindmap2)
//   const tlMindmap2 = gsap.timeline({
//     scrollTrigger: {
//       trigger: ".hero__ani",
//       scrub: true,
//       markers: true,
//       pin: true,
//       pinSpacing: true,
//       start: "top 10%",
//       end: "500% 110%"
//     }
//   });

//   tlMindmap2
//     // Aquí puedes agregar las animaciones específicas para pantallas más grandes
//     .from("#mindMap", { y: 100, opacity: 0 }) // Ejemplo de movimiento vertical
//     .from(dueño, { opacity: 0 })
//     .to(flecha1, { strokeDashoffset: 0 })
//     .from(no1, { opacity: 0 }, "<50%")
//     .from(agenda, { opacity: 0 })
//     .to(flecha2, { strokeDashoffset: 0 })
//     .from(si1, { opacity: 0 }, "<50%")
//     .from(posicionarMarca, { opacity: 0 })
//     .to(flecha3, { strokeDashoffset: 0 })
//     .from(si2, { opacity: 0 }, "<50%")
//     .from(branding, { opacity: 0 })
//     .to(flecha4, { strokeDashoffset: 0 })
//     .from(no2, { opacity: 0 }, "<50%")
//     .from(excelente, { opacity: 0 })
//     .from(iconoLike, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%", ease: "bounce.out", duration: 0.8 }, "<")
//     .from(aumentarVentas, { opacity: 0 })
//     .to(flecha5, { strokeDashoffset: 0 })
//     .from(si3, { opacity: 0 }, "<50%")
//     .from(estrategia, { opacity: 0 })
//     .to(flecha6, { strokeDashoffset: 0 })
//     .to(flecha7, { strokeDashoffset: 0 }, "<")
//     .from(agendaBig, { opacity: 0 })
//     .from(agendaBigBg, { opacity: 0 }, "<")
//     .to(flecha8, { strokeDashoffset: 0 })
//     .from(no3, { opacity: 0 }, "<10%")
//     .from(camino, { opacity: 0 })
//     .from(iconoTick, { opacity: 0, scale: 0.5, transformOrigin: "50% 50%", ease: "bounce.out", duration: 0.8 }, "<")
//     .to(flechaF1, { strokeDashoffset: 0 }, "<")
//     .from(logoYamatec, { opacity: 0 })
//     .to(flechaF2, { strokeDashoffset: 0 }, "<")
//     .from(logoUdana, { opacity: 0 })
//     .to(flechaF3, { strokeDashoffset: 0 }, "<")
//     .from(logoSound, { opacity: 0 }, "<+80%")
//     .to(flechaF4, { strokeDashoffset: 0 }, "<")
//     .from(logoX, { opacity: 0 }, "<+80%")
//     .to(flechaF5, { strokeDashoffset: 0 }, "<")
//     .from(logoBelen, { opacity: 0 }, "<+80%")
//     .to(flechaF6, { strokeDashoffset: 0 }, "<")
//     .from(logoGallmarquez, { opacity: 0 }, "<+80%");
// });

// Esto limpia los ScrollTriggers y animaciones no aplicables al cambiar el tamaño de la pantalla
// mm.add("all", () => {
//   return () => {
//     ScrollTrigger.getAll().forEach(st => st.kill());
//   };
// });