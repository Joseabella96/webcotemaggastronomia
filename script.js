var imagenes = [
  "asset/slaiderrr.jpeg",
  "asset/slaiderrrr.jpeg",
  "asset/slaiderrrrr.jpeg",
];

cont = 0;

function carrousel(contenedor){
    contenedor. addEventlistener('click , e=>'){
        let back=  contenedor.querySelector('back'),
        forward = contenedor.querySelector('forward'),
        asset = contenedor.querySelector('asset'),
        tgt = e.target;


        if( tgt == back){
            if(cont > 0){
                img.src = imagenes[cont - 1];
                cont --;
            }else{
                img.src = imagenes[imagenes.length - 1 ];
                cont = imagenes.length - 1;

            }

            
        }

    }
}