# Calculadora

Este é um projeto de uma calculadora implementada em JavaScript. A calculadora possui uma interface interativa onde os usuários podem realizar operações matemáticas básicas. O projeto também inclui funcionalidades adicionais, como a capacidade de copiar o resultado para a área de transferência e alternar entre temas claro e escuro.

## Acessar Online

Você pode acessar a calculadora online através do GitHub Pages. [Clique aqui](https://dev-3rick.github.io/Calculadora.js/) para abrir a calculadora no seu navegador.

## Funcionalidades

O projeto possui as seguintes funcionalidades:

- Adicionar valores de entrada clicando nos botões correspondentes;
- Limpar o campo de entrada;
- Tratar eventos de digitação do teclado, permitindo apenas os caracteres válidos;
- Calcular o resultado da operação matemática ao clicar no botão de igualdade;
- Copiar o resultado para a área de transferência ao clicar no botão correspondente;
- Alternar entre temas claro e escuro ao clicar no botão de alternar tema.

## Como executar o projeto

Para executar o projeto localmente, siga as etapas abaixo:

1. Clone o repositório para sua máquina local.
2. Abra o arquivo `index.html` em um navegador da web compatível.
3. Utilize os botões da calculadora para inserir os valores desejados e realizar as operações matemáticas.
4. Você também pode utilizar o teclado para digitar os valores e realizar as operações.
5. Para copiar o resultado para a área de transferência, clique no botão "Copy".
6. Para alternar entre temas claro e escuro, clique no botão de alternar tema.

## Estrutura do código

O código do projeto está organizado da seguinte forma:

- O arquivo `calculate.js` contém a função `calculate()` que é responsável por calcular o resultado da operação matemática. O resultado é exibido em um elemento de input na interface.

- O arquivo `copiarResultado.js` contém a função `copiador(event, resultInput)` que é responsável por copiar o resultado para a área de transferência ao clicar no botão "Copy".

- O arquivo `functionTemplete.js` contém a função `templete()` que é responsável por alternar entre os temas claro e escuro da interface.

- O arquivo `tratateclas.js` contém as funções `trataTeclas(ev)`, `clear()`, e `handleTyping(ev)` que são responsáveis por tratar os eventos de teclado, permitindo apenas os caracteres válidos e realizando ações correspondentes.

- O arquivo `index.html` contém a estrutura HTML da interface da calculadora e as referências aos arquivos JavaScript.

## Contribuindo

Se você deseja contribuir com este projeto, fique à vontade para enviar pull requests ou abrir issues no repositório do projeto no GitHub.

Espero que você aproveite a calculadora implementada neste projeto!
