function calculadora () {
    const operacao = Number(prompt('escolha a operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    if (!operacao || operacao >= 7 || operacao <= -1) {
        alert('Erro! Operação invalida!');
        calculadora();
    }
    else {
        let n1 = Number(prompt ("Insira o primeiro Valor"));
        let n2 = Number(prompt ("Insira o segundo Valor"));
        let resultado;
        
        if (!n1 || !n2) {
            alert('Digite apenas números!');
            calculadora();
        }
        else {
            function soma() {
                resultado = n1 + n2;
                alert (`${n1} Mais ${n2} é = ${resultado}`)
                novafunção();
            }
            function subtração() {
                resultado = n1 - n2;
                alert (`${n1} Menos ${n2} é = ${resultado}`)
                novafunção();
            }
            function multiplicação() {
                resultado = n1 * n2;
                alert (`${n1} Vezes ${n2} é = ${resultado}`)
                novafunção();
            }
            function divisãoReal() {
                resultado = n1 / n2;
                alert (`${n1} Dividido por ${n2} é = ${resultado}`)
                novafunção();
            }
            function divisãoInteira() {
                resultado = n1 % n2;
                alert (`O resto de ${n1} divido por ${n2} é = ${resultado}`)
                novafunção();    
            }
            function potenciação() {
                resultado = n1 ** n2;
                alert (`${n1} elevado á ${n2} é = ${resultado}`)
                novafunção();
            }
            
            function novafunção () {
                let opção = Number(prompt('Deseja calcular novamente?\n 1 - SIM\n 2 -NÃO'))
                if (opção == 1) {
                    calculadora();
                }
                else if (opção == 2) {
                    alert('Até Mais!');
                }
                else {
                    alert('insira uma opção válida!')
                    novafunção ();
                }
            }
        
            // if (operacao == 1) {
            //     soma();
            // }
            // else if (operacao == 2) {
            //     subtração();
            // }
            // else if (operacao == 3) {
            //     multiplicação();
            // }
            // else if (operacao == 4) {
            //     divisãoReal();
            // }
            // else if (operacao == 5) {
            //     divisãoInteira();
            // }  
            // else if (operacao == 6) {
            //     potenciação();
            // }
            switch (operacao) {
                case 1:
                    soma();
                    break
                case 2:
                    subtração();
                    break
                case 3:
                    multiplicação();
                    break
                case 4:
                    divisãoReal();
                    break
                case 5:
                    divisãoInteira();
                    break
                case 6:
                    potenciação();
                    break    
            }
        }}

        

}      
    
   
calculadora();