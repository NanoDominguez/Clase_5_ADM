 //--------------------clase 4--------------------------
var appCinco= new Vue({
  el: '#appCinco',
  data: {
    contador: 0,
    listasDeElementos : [],
    email:'',
    listaEmails: [],/*Se crea una lista de email como data */
  },
  methods: {
    //agregarTexto: function() {...},
    //agregarTitulo: function() {...},
    mostrarTextoEnConsola: function() {
      console.log("Texto en consola");
    },
    enviar: function() {
       alert("Estamos enviando");
    },
    agregarEmail: function() {
      //1- se crea un Objeto
      // const infoDeEmail = [];
      // infoDeEmail['saludo'] = "HOLA";
      // infoDeEmail['despedida'] = "CHAU";

      const infoDeEmail = {
        email: this.email,
        check: false,
        show: true,
      }

      this.listaEmails.push(infoDeEmail);
      this.email = "";//se resetea porque es bidireccional el codigo
    },/*Se crea un metodo que se llama "agrgarEmail", que agarra a la lista de emails y pushea lo que tiene email, despues se renderiza en HTML */
    
    eliminarEmail: function() {
      for(let item of this.listaEmails) {
       if(item.check) {
        item.show = false;
       }
      }
    },
    
    limpiarListaEmails: function() {
      this.listaEmails = [];
    },

    obtenerMailsVisibles: function() {
      //return this.listaEmails.filter((item) => item.show)
      const listaVisible = []
      for(let item of this.listaEmails) {
        if(item.show) {
         listaVisible.push(item);
        }
       }
       return listaVisible;
    }
  }
});