# Projeto Estágio - Target Sistemas

Este projeto foi desenvolvido como parte do teste técnico para a vaga de estágio na Target Sistemas. Ele inclui soluções para uma série de desafios de programação.

## Estrutura do Projeto

- **/src**: Contém o código-fonte do projeto.
  - `calculadoraFibonacci.js`: Função para verificar se um número pertence à sequência de Fibonacci.
  - `analiseFaturamento.js`: Funções para analisar dados de faturamento.
  - `percentuaisEstado.js`: Função para calcular a representação percentual de estados no faturamento.
  - `inverterString.js`: Função para inverter os caracteres de uma string.
  - `somaNumeros.js`: Função para calcular a soma dos números até um índice dado.
- **/tests**: Contém os testes automatizados para o código.
  - `calculadoraFibonacci.test.js`: Testes para a função de Fibonacci.
  - `analiseFaturamento.test.js`: Testes para a análise de faturamento.
  - `percentuaisEstado.test.js`: Testes para o cálculo de percentuais de estados.
  - `inverterString.test.js`: Testes para a função de inversão de string.
  - `somaNumeros.test.js`: Testes para a função de soma de números.
- **/data**: Contém dados de exemplo para os testes.
  - `faturamentoDiario.json`: Arquivo JSON com dados de faturamento diário.
- **package.json**: Arquivo de configuração do projeto.
- **.gitignore**: Arquivo para ignorar arquivos e diretórios no Git.
- **README.md**: Este arquivo com a documentação do projeto.

## Instalação

Para instalar e configurar o projeto, siga estas etapas:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seu-usuario/projeto-estagio.git
   cd projeto-estagio
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   ```

## Execução

Este projeto utiliza o Jest para testes. Para rodar os testes, use:

```bash
npm test
```

## Como Usar

Aqui estão alguns exemplos de como utilizar as funções do projeto:

1. **Calculadora de Fibonacci** (`calculadoraFibonacci.js`):

   ```javascript
   import { pertenceASequenciaFibonacci } from './src/calculadoraFibonacci';

   const numero = 21;
   console.log(
     `O número ${numero} pertence à sequência de Fibonacci? ${pertenceASequenciaFibonacci(
       numero
     )}`
   );
   ```

2. **Análise de Faturamento** (`analiseFaturamento.js`):

   ```javascript
   import { carregarDados } from './src/analiseFaturamento';

   const resultado = carregarDados();
   console.log('Análise de Faturamento:', resultado);
   ```

3. **Percentuais de Estado** (`percentuaisEstado.js`):

   ```javascript
   import { calcularPercentuais } from './src/percentuaisEstado';

   const faturamento = {
     SP: 67836.43,
     RJ: 36678.66,
     MG: 29229.88,
     ES: 27165.48,
     Outros: 19849.53,
   };

   console.log(
     'Percentuais de Representação por Estado:',
     calcularPercentuais(faturamento)
   );
   ```

4. **Inversão de String** (`inverterString.js`):

   ```javascript
   import { inverterString } from './src/inverterString';

   const texto = 'hello';
   console.log(`Texto invertido: ${inverterString(texto)}`);
   ```

5. **Soma de Números** (`somaNumeros.js`):

   ```javascript
   import { calcularSoma } from './src/somaNumeros';

   const indice = 13;
   console.log(
     `Soma dos números até o índice ${indice}: ${calcularSoma(indice)}`
   );
   ```

## Testes

Para garantir que o código está funcionando corretamente, o projeto inclui testes automatizados. Execute o seguinte comando para rodar os testes:

```bash
npm test
```

Os testes estão localizados na pasta `/tests` e cobrem todas as funcionalidades implementadas. Os testes usam o Jest para garantir que as funções retornem os resultados esperados.

## Contribuições

Contribuições são bem-vindas! Se você tiver sugestões para melhorar o projeto ou encontrar um bug, acesse [Contribuição](CONTRIBUICAO.md).

## Licença

Este projeto é licenciado sob a [Licença Mozilla](LICENSE).

Feito com 💖 por Leandro Medeiros.  
📅 31/ago/2024
