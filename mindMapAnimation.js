//texto
const dueño = document.getElementById("dueño");
const agenda= document.getElementById("agenda");
const posicionarMarca= document.getElementById("posicionarMarca");
const branding= document.getElementById("branding");
const excelente= document.getElementById("excelente");
const aumentarVentas= document.getElementById("aumentarVentas");
const agendaBig= document.getElementById("agendaBig");
const estrategia= document.getElementById("estrategia");
const camino= document.getElementById("camino");

//si/no
const si1= document.getElementById("si1");
const si2= document.getElementById("si2");
const si3= document.getElementById("si3");
const no1= document.getElementById("no1");
const no2= document.getElementById("no2");
const no3= document.getElementById("no3");

//lineas recorrido principal
const linea1= document.getElementById("linea1");
const linea1Length = linea1.getTotalLength(); 
linea1.style.strokeDasharray = linea1Length;
linea1.style.strokeDashoffset = -linea1Length;

const linea2= document.getElementById("linea2");
const linea2Length = linea2.getTotalLength(); 
linea2.style.strokeDasharray = linea2Length;
linea2.style.strokeDashoffset = -linea2Length;

const linea3= document.getElementById("linea3");
const linea3Length = linea3.getTotalLength(); 
linea3.style.strokeDasharray = linea3Length;
linea3.style.strokeDashoffset = -linea3Length;

const linea4= document.getElementById("linea4");
const linea4Length = linea4.getTotalLength();
linea4.style.strokeDasharray = linea4Length;
linea4.style.strokeDashoffset = -linea4Length;

const linea5= document.getElementById("linea5");
const linea5Length = linea5.getTotalLength(); 
linea5.style.strokeDasharray = linea5Length;
linea5.style.strokeDashoffset = -linea5Length;

const linea6= document.getElementById("linea6");
const linea6Length = linea6.getTotalLength();
linea6.style.strokeDasharray = linea6Length;
linea6.style.strokeDashoffset = -linea6Length;

const linea7= document.getElementById("linea7");
const linea7Length = linea7.getTotalLength();
linea7.style.strokeDasharray = linea7Length;
linea7.style.strokeDashoffset = -linea7Length;

const linea8= document.getElementById("linea8");
const linea8Length = linea8.getTotalLength(); 
linea8.style.strokeDasharray = linea8Length;
linea8.style.strokeDashoffset = -linea8Length;


//flechas recorrido principal
const flecha1= document.getElementById("flecha1"); 
const flecha2= document.getElementById("flecha2"); 
const flecha3= document.getElementById("flecha3"); 
const flecha4= document.getElementById("flecha4"); 
const flecha5= document.getElementById("flecha5"); 
const flecha6= document.getElementById("flecha6"); 
const flecha7= document.getElementById("flecha7"); 
const flecha8= document.getElementById("flecha8"); 

//lineaFinal+array
const lineaFinal1= document.getElementById("lineaFinal1");
const lineaFinal1Length = lineaFinal1.getTotalLength();
lineaFinal1.style.strokeDasharray=lineaFinal1Length;
lineaFinal1.style.strokeDashoffset=-lineaFinal1Length;

const lineaFinal2= document.getElementById("lineaFinal2");
const lineaFinal2Length = lineaFinal2.getTotalLength();
lineaFinal2.style.strokeDasharray=lineaFinal2Length;
lineaFinal2.style.strokeDashoffset=-lineaFinal2Length;

const lineaFinal3= document.getElementById("lineaFinal3");
const lineaFinal3Length = lineaFinal3.getTotalLength();
lineaFinal3.style.strokeDasharray=lineaFinal3Length;
lineaFinal3.style.strokeDashoffset=-lineaFinal3Length;

const lineaFinal4= document.getElementById("lineaFinal4");
const lineaFinal4Length = lineaFinal4.getTotalLength();
lineaFinal4.style.strokeDasharray=lineaFinal4Length;
lineaFinal4.style.strokeDashoffset=-lineaFinal4Length;

const lineaFinal5= document.getElementById("lineaFinal5");
const lineaFinal5Length = lineaFinal5.getTotalLength();
lineaFinal5.style.strokeDasharray=lineaFinal5Length;
lineaFinal5.style.strokeDashoffset=-lineaFinal5Length;

const lineaFinal6= document.getElementById("lineaFinal6");
const lineaFinal6Length = lineaFinal6.getTotalLength();
lineaFinal6.style.strokeDasharray=lineaFinal6Length;
lineaFinal6.style.strokeDashoffset=-lineaFinal6Length;

const arrayLineaFinal = [lineaFinal1, lineaFinal2,lineaFinal3, lineaFinal4,lineaFinal5,lineaFinal6]

//flechaFinal+array
const flechaFinal1= document.getElementById("flechaFinal1");
const flechaFinal2= document.getElementById("flechaFinal2");
const flechaFinal3= document.getElementById("flechaFinal3");
const flechaFinal4= document.getElementById("flechaFinal4");
const flechaFinal5= document.getElementById("flechaFinal5");
const flechaFinal6= document.getElementById("flechaFinal6");
const arrayFlechaFinal = [flechaFinal1,flechaFinal2,flechaFinal3,flechaFinal4,flechaFinal5,flechaFinal6]

//logos+array
const logoYamatec= document.getElementById("logoYamatec");
const logoUdana= document.getElementById("logoUdana");
const logoSound= document.getElementById("logoSound");
const logoX= document.getElementById("logoX");
const logoBelen= document.getElementById("logoBelen");
const logoGallmarquez= document.getElementById("logoGallmarquez");
const arrayLogo = [logoYamatec, logoUdana, logoSound, logoX, logoBelen, logoGallmarquez];

const timeLinePrincipal = gsap.timeline();

timeLinePrincipal.to(linea1, {
    strokeDashoffset: 0,
    duration: 3
}).from(flecha1,{
    opacity: 0
})