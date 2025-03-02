# Binary Search

Vamos supor que você tem um banco com 1000 registros e precisa realizar uma busca. Se essa busca for feita de forma linear, ou seja, verificando os registros um por um (1, 2, 3, 4...), levaria muito tempo para encontrar um valor específico. No pior caso, se o registro que você procura for o último (1000), seria necessário percorrer os 999 registros anteriores. Esse método é conhecido como busca linear e não é a forma mais eficiente de realizar essa operação.

Uma abordagem muito mais eficiente é a busca binária, que utiliza a estratégia de dividir para conquistar. Em vez de percorrer todos os registros um por um, dividimos a busca pela metade a cada iteração. No mesmo cenário acima, a busca pelo número 1000 seguiria esta sequência:

```
midIndex: 499
midIndex: 749
midIndex: 874
midIndex: 937
midIndex: 968
midIndex: 984
midIndex: 992
midIndex: 996
midIndex: 998
```

Com isso, encontramos o número desejado em apenas 9 etapas, reduzindo drasticamente o tempo de busca. Agora, como podemos implementar esse algoritmo?

Abaixo está um exemplo de implementação em JavaScript:

```
function binary_search(sortedArray, item) {
  let firstIndex = 0;
  let lastindex = sortedArray.length - 1;

  while (firstIndex <= lastindex) {
    let midIndex = Math.floor((firstIndex + lastindex) / 2);
    console.log(`midIndex: ${midIndex}`);
    if (sortedArray[midIndex] == item) {
      return midIndex;
    }
    if (sortedArray[midIndex] > item) {
      lastindex = midIndex - 1;
    } else {
      firstIndex = midIndex + 1;
    }
  }
  return null;
}
const myArray = Array.from({ length: 1000 }, (_, i) => i + 1);

console.log(`Result: ${binary_search(myArray, 999)}`);
```

Como funciona essa implementação?
Vamos entender passo a passo o funcionamento do código. O número que estamos procurando, representado pela variável item no código, será chamado de X para facilitar a explicação.

Inicialização das variáveis:

firstIndex: representa o primeiro índice do array, começando em 0.

lastIndex: representa o último índice do array, que é array.length - 1, pois os índices começam em zero, mas length retorna o tamanho total do array.

Loop while:

Enquanto firstIndex for menor ou igual a lastIndex, significa que ainda há elementos para buscar, então continuamos o processo.
Se firstIndex se tornar maior que lastIndex, significa que percorremos todo o array e o número X não foi encontrado.

Definição do índice do meio (midIndex):

Calculamos midIndex pegando a média entre firstIndex e lastIndex.
Esse índice nos dá o elemento central do intervalo atual da busca.

Verificação do elemento central:

Se sortedArray[midIndex] for igual a X, encontramos o valor e retornamos o índice.
Se sortedArray[midIndex] for maior que X, significa que o valor procurado está na metade inferior do array. Então, ajustamos lastIndex para midIndex - 1, reduzindo o intervalo de busca.

Se sortedArray[midIndex] for menor que X, significa que o valor procurado está na metade superior do array. Então, ajustamos firstIndex para midIndex + 1.

Esse processo continua até encontrarmos X ou percorrermos todo o array sem encontrá-lo.
