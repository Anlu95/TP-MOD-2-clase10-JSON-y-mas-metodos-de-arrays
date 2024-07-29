let datosBici = require('./datosBici.js');
 let dhBici = {
    bicicleta: datosBici.leerJSON(), 

    buscarBici: function(id) {
        let biciEnc = this.bicicleta.filter(bici => bici.id === id); 
            return biciEnc.length > 0 ? biciEnc [0]: null;
    },

    venderBici: function(id) {
        let bici = this.buscarBici(id)
        if (bici) {
            bici.vendida = "true"; return bici;
        } else { 
            return "Bicicleta no encontrada"
        }
    },

    biciParaLaVenta: function() {
        return this.bicicleta.filter (bici => bici.vendida === "false");
    },

    totalDeVentas: function() {
        return this.bicicleta.filter (bici => bici.vendida === "true") .reduce((total, bici) => total + bici.precio,0)
    },

    aumentoBici: function(porcentaje) {
        return this.bicicleta.map(bici => {
            let nuevaBici = {...bici }; nuevaBici.precio += (nuevaBici.precio * porcentaje) / 100 
            return nuevaBici;
        })

    },

    biciPorRodado: function(rodado) {
         return this.bicicleta.filter (bici => bici.rodado === rodado);
       },

    listarTodasLasBici: function() {
        for (let bici of this.bicicleta) 
            {console.log(bici);}

    } 
  
    
}

  

//console.log(dhBici)

//console.log(dhBici.buscarBici(2))

//console.log(dhBici.venderBici(7))

//console.log(dhBici.biciParaLaVenta())

//console.log(dhBici.totalDeVentas())

//console.log(dhBici.aumentoBici(50))

//console.log(dhBici.biciPorRodado(16))

//dhBici.listarTodasLasBici()