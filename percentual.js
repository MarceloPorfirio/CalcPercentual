let valor_produto = 500


for (let contador =1; contador <=5; contador ++){
    let valor_parcela = valor_produto/contador
    console.log('o valor da parcela é '+ valor_parcela.toFixed(2))

}

let valor_produto = 500
let valor_parcela = 8  // determinando a quantidade de parcela
for (let contador = 1; contador <= valor_parcela; contador ++){//verifica se o contador é < que o valor da parcela, enquanto isso , soma 1
    let valor_parcela = valor_produto/contador
    console.log('o valor da parcela é ' + valor_parcela.toFixed(2))
}
