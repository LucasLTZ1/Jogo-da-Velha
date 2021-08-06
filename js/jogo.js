var rodada = 1;
var matriz_jogo = Array(3);

matriz_jogo['a'] = Array(3);
matriz_jogo['b'] = Array(3);
matriz_jogo['c'] = Array(3);

matriz_jogo['a'][1] = 0;
matriz_jogo['a'][2] = 0;
matriz_jogo['a'][3] = 0;

matriz_jogo['b'][1] = 0;
matriz_jogo['b'][2] = 0;
matriz_jogo['b'][3] = 0;

matriz_jogo['c'][1] = 0;
matriz_jogo['c'][2] = 0;
matriz_jogo['c'][3] = 0;    



$(document).ready( function(){

    $('#btn-play').click( function(){

        if ($('#nomejogador1').val() == ''){
            alert('Digite um nome para o Jogador 1');
            return false;
        }

        if ($('#nomejogador2').val() == ''){
            alert('Digite um nome para o Jogador 2');
            return false;
        }

        $('#inicio').hide();
        $('#jogo').show();

    });

    $('.jogada').click( function(){

        alert('teste do click');
    });

    $('.jogada').click( function(){

        var id_campo = this.id;
        $('#'+id_campo).off();
        jogada(id_campo);

    });

    function jogada(id){

        var icone = '';

        var ponto = 0;

        if((rodada % 2) == 1){

            icone = 'url("img/m1.png")';

            ponto = -1;

             } else { 

             icone = 'url("img/m2.png")';

             ponto = 1;
        }
        
        rodada++;

        $('#'+id).css('background-image', icone);

        alert(id);
    } 

});
