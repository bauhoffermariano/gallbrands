const options = {
    particles:{
        number:{
            value:100
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
        },
        opacity: {
            value: 0.8
        }
     
    },
    responsive: [
        {
            breakpoint: 600,
            options: {
                particles: {
                    number: {
                        value: 30 // Valor para pantallas menores a 600px
                    },
                    size:{
                        value:{min:10, max:30}
                    },
                }
            }
        }
    ]
}

tsParticles.load("bgHero", options)