const options = {
    particles:{
        number:{
            value:5
        },
        color: "#003399",
        links:{
            enable: false,
            distance: 30,
            color: "#003399",
        },
        move:{
            enable: true
        },
        size:{
            value:{min:1, max:50}
        }
     
    }
}

tsParticles.load("bgHero", options)