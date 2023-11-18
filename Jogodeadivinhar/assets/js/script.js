// Espera até que a página esteja totalmente carregada.
document.addEventListener('DOMContentLoaded', function() {

    // Gera um número aleatório entre 1 e 50 e guarda na variável 'numero'.
    let numero = Math.floor(Math.random() * 50) + 1;

    // Pega elementos importantes da página usando seus IDs.
    let botao = document.getElementById('btn'); // Botão de enviar.
    let output = document.getElementById('outputext'); // Caixa para as mensagens.
    let tentativas = document.getElementById('tentativas'); // Exibe o número de tentativas.
    let botaoReset = document.getElementById('reiniciar'); // Botão de reiniciar.
    let contadorTentativas = 0; // Inicializa o contador de tentativas.
    let userInput = document.getElementById('user'); // Campo de entrada para o palpite do usuário.

    // Adiciona um ouvinte de eventos para quando o botão é clicado.
    botao.addEventListener("click", function() {
        verificarResposta(); // Chama a função para verificar a resposta.
    });

    // Adiciona um ouvinte de eventos para quando a tecla "Enter" é pressionada no campo de entrada.
    userInput.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            verificarResposta(); // Chama a função para verificar a resposta.
        }
    });

    // Função para verificar a resposta do usuário.
    function verificarResposta() {
        let input = parseInt(userInput.value); // Converte o valor do campo de entrada para um número.

        // Verifica se o input é um número válido entre 1 e 50.
        if (isNaN(input) || input < 1 || input > 50) {
            output.innerHTML = 'Digite um número válido (entre 1 e 50).';
        } else {
            // Verifica se o palpite está correto.
            if (input == numero) {
                output.innerHTML = `Você acertou o número e: ${numero}`;
                botaoReset.style.display = 'block'; // Mostra o botão de reiniciar.
            } else if (Math.abs(input - numero) > 10) {
                output.innerHTML = `Está muito frio, tente novamente.`;
            } else if (Math.abs(input - numero) > 5) {
                output.innerHTML = `Está frio, tente novamente.`;
            } else if (Math.abs(input - numero) > 2) {
                output.innerHTML = `Está quente, tente novamente.`;
            } else {
                output.innerHTML = `Está pegando fogo, tente novamente.`;
            }

            contadorTentativas += 1;
            tentativas.innerHTML = `Tentativas: ${contadorTentativas}`;
        }
    }

    // Adiciona um ouvinte de eventos para quando o botão de reiniciar é clicado.
    botaoReset.addEventListener("click", function() {
        reiniciarJogo(); // Chama a função para reiniciar o jogo.
    });

    // Função para reiniciar o jogo.
    function reiniciarJogo() {
        numero = Math.floor(Math.random() * 50) + 1; // Gera um novo número aleatório.
        output.innerHTML = ''; // Limpa a caixa de mensagens.
        userInput.value = ''; // Limpa o campo de entrada do usuário.
        contadorTentativas = 0; // Reinicia o contador de tentativas.
        tentativas.innerHTML = `Tentativas: 0`; // Atualiza a exibição do número de tentativas.
        botaoReset.style.display = 'none'; // Esconde o botão de reiniciar.
    }
});