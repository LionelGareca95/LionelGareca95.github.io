window.sr = ScrollReveal();

    sr.reveal('#timeline', {
        duration: 3000,
        origin: 'right', 
        distance: '-100px'
    });

    sr.reveal('.header', {
        duration: 3000,
        origin: 'left',
        distance: '300px'
    });
    sr.reveal('#nav',  {
        duration: 3000,
        origin: 'right',
        distance: '-300px'
    });

    /* Scrolling top*/

        addEventListener('DOMContentLoaded', () => {
        const boton_ir_arriba = document.querySelector('#ir_arriba_boton')
        const barra_indicador = document.querySelector('.indicador_scroll')

        const obtener_pixeles_inicio = () => document.documentElement.scrollTop || document.body.scrollTop

        const irArriba = () => {
            if (obtener_pixeles_inicio() > 0) {
                scrollTo(0,0)
            }
        }

        const indicador_scroll = () => {
            if(obtener_pixeles_inicio() > 50) {
                boton_ir_arriba.className = 'mostrar'
            } else {
                boton_ir_arriba.className = 'ocultar'
            }
            let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight
            let avance_scroll = (obtener_pixeles_inicio() / alto ) * 100
            barra_indicador.style.width = `${avance_scroll}%`
        }

        boton_ir_arriba.addEventListener('click', irArriba)
        window.addEventListener('scroll', indicador_scroll)
    })