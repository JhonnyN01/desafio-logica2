// 3 DESAFIO LANCADO PELA DIO

function calcularNivel(vitorias, derrotas){
    const saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if(vitorias <10) {
        nivel = "Ferro";
    }
    else if(vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";     
    }
    else if(vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    }
    else if(vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    }
    else if(vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    }
    else if(vitorias >= 90 && vitorias <= 100) {
        nivel = "Lendario";
    }
    else{
        nivel = "Imortal";
    }

    console.log(`O Heroi tem saldo de ${saldoVitorias} e esta no nivel de ${nivel}`);
}

calcularNivel(105,50);
