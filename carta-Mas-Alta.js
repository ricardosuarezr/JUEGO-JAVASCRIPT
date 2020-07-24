var cartaMasAlta = {
jugar: function()
{
    //console.log(baraja);
    croupier.mezclar(baraja);
    //console.log(baraja);
    croupier.repartirJugador();
    //console.log(jugador.mano);
    //console.log(baraja);
    setTimeout (
        function() {
            croupier.repartirCroupier();
        } ,3000);
    //console.log(croupier.mano);
    //console.log(baraja);
    setTimeout(
        function (){
            croupier.compararCartas();
        }
            ,6000);
}
}
//invocamos la funcion aqui, luego agregamos un boton
document.getElementById('cartaA').onclick=cartaMasAlta.jugar;