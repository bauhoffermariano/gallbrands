//texto
const dueño = document.getElementById("dueño");
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

//tween de flecha que me quedo al reves 
const flecha5tween = gsap.to(flecha5, { strokeDashoffset: 0 }).reverse();

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


const tlMindmap = gsap.timeline();

tlMindmap.from(dueño,{opacity:0})
         .to(flecha1,{strokeDashoffset:0})
         .from(no1, {opacity:0},"<50%")
         .from(agenda,{opacity:0})
         .to(flecha2,{strokeDashoffset:0})
         .from(si1, {opacity:0},"<50%")
         .from(posicionarMarca,{opacity:0})
         .to(flecha3,{strokeDashoffset:0})
         .from(si2, {opacity:0},"<50%")
         .from(branding,{opacity:0})
         .to(flecha4,{strokeDashoffset:0})
         .from(no2, {opacity:0},"<50%")
         .from(excelente,{opacity:0})
         .from(iconoLike,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")
         .from(aumentarVentas,{opacity:0})
         .to(flecha5,{strokeDashoffset:0})
         .from(si3, {opacity:0},"<50%")
         .from(estrategia,{opacity:0})
         .to(flecha6,{strokeDashoffset:0})
         .to(flecha7,{strokeDashoffset:0},"<")
         .from(agendaBig,{opacity:0})
         .from(agendaBigBg,{opacity:0},"<")
         .to(flecha8,{strokeDashoffset:0})
         .from(no3, {opacity:0},"<10%")
         .from(camino,{opacity:0})
         .from(iconoTick,{opacity:0,scale:.5,transformOrigin:"50% 50%", ease:"bounce.out",duration:.8},"<")
    
         .to(flechaF1,{strokeDashoffset:0},"<")
         .from(logoYamatec,{opacity:0},)
         .to(flechaF2,{strokeDashoffset:0},"<")
         .from(logoUdana,{opacity:0},)
         .to(flechaF3,{strokeDashoffset:0},"<")
         .from(logoSound,{opacity:0},"<+80%")
         .to(flechaF4,{strokeDashoffset:0},"<")
         .from(logoX,{opacity:0},"<+80%")
         .to(flechaF5,{strokeDashoffset:0},"<")
         .from(logoBelen,{opacity:0},"<+80%")
         .to(flechaF6,{strokeDashoffset:0},"<")
         .from(logoGallmarquez,{opacity:0},"<+80%")
 

