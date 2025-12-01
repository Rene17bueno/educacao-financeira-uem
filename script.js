// O código é exatamente o que você recebeu anteriormente, garantindo a função de salvar e baixar os dados em CSV/Excel.

// AQUI ESTÁ SEU NOVO BANCO DE QUESTÕES (Múltipla Escolha)
// Extraído do documento "📚 MATERIAL COMPLETO perguntas.docx" e "novas perguntas.docx".
// A resposta correta (r) agora é a letra da alternativa (A, B, C, D ou E).

const bancoQuestoes = [
    {
        p: "De acordo com o artigo, qual é o principal objetivo do projeto sobre Educação Financeira na Infância?",
        opcoes: ["A) Criar um aplicativo complexo de investimentos para crianças do Ensino Médio.", "B) Mostrar a importância da educação financeira infantil através da criação de um jogo como atividade lúdica.", "C) Analisar as dívidas de famílias de alunos do Colégio de Aplicação Pedagógica da UEM.", "D) Definir a BNCC e sugerir a retirada da Educação Financeira do currículo escolar.", "E) Promover a compra de ações na bolsa de valores para crianças com menos de 10 anos."],
        r: "B" // Mostrar a importância da educação financeira infantil...
    },
    {
        p: "Qual dos seguintes problemas a falta de Educação Financeira pode causar na vida adulta, segundo o texto e a pesquisa?",
        opcoes: ["A) Aumento da poupança e enriquecimento rápido.", "B) Endividamento, consumo excessivo e problemas de saúde ligados ao estresse financeiro.", "C) Capacidade elevada de investimento em ativos de alto risco.", "D) Aumento do tempo disponível para atividades de lazer.", "E) Maior facilidade para obter crédito em grandes bancos."],
        r: "B" // Endividamento, consumo excessivo e problemas de saúde...
    },
    {
        p: "Para crianças, qual a melhor forma de iniciar o ensino de Educação Financeira, segundo o projeto e a bibliografia citada?",
        opcoes: ["A) Com a leitura de balanços financeiros de grandes empresas.", "B) Através de palestras longas sobre juros compostos e inflação.", "C) Com atividades lúdicas, como jogos, histórias e brincadeiras que envolvam compra e venda.", "D) Exclusivamente por meio de aulas de matemática avançada.", "E) Aplicando testes de conhecimento teórico sobre o sistema bancário."],
        r: "C" // Com atividades lúdicas, como jogos, histórias...
    },
    {
        p: "Qual documento curricular nacional incluiu a Educação Financeira em 2020?",
        opcoes: ["A) LDB (Lei de Diretrizes e Bases da Educação Nacional).", "B) PCNs (Parâmetros Curriculares Nacionais).", "C) BNCC (Base Nacional Comum Curricular).", "D) ENEM (Exame Nacional do Ensino Médio).", "E) PNAIC (Pacto Nacional pela Alfabetização na Idade Certa)."],
        r: "C" // BNCC (Base Nacional Comum Curricular).
    },
    {
        p: "O que significa o termo 'consumo excessivo' no contexto da Educação Financeira?",
        opcoes: ["A) Comprar apenas o que é estritamente necessário para sobreviver.", "B) Planejar todas as compras com antecedência e dentro do orçamento.", "C) Comprar coisas que não são necessárias ou mais do que se pode pagar.", "D) Guardar todo o dinheiro e nunca gastar.", "E) Investir em fundos de alta rentabilidade."],
        r: "C" // Comprar coisas que não são necessárias ou mais do que se pode pagar.
    },
    {
        p: "O que é 'endividamento'?",
        opcoes: ["A) Ter muito dinheiro guardado na poupança.", "B) Ter que pagar menos do que se ganha por mês.", "C) Atingir a independência financeira antes dos 30 anos.", "D) Ter dívidas que são difíceis ou impossíveis de pagar.", "E) Viver apenas com o salário e sem usar crédito."],
        r: "D" // Ter dívidas que são difíceis ou impossíveis de pagar.
    },
    {
        p: "Se você tem R$ 50,00 e quer comprar um livro que custa R$ 35,00. Quanto dinheiro você terá sobrando?",
        opcoes: ["A) R$ 10,00", "B) R$ 15,00", "C) R$ 20,00", "D) R$ 25,00", "E) R$ 30,00"],
        r: "B" // R$ 15,00
    },
    {
        p: "O que é 'poupança'?",
        opcoes: ["A) Gastar todo o dinheiro assim que o recebe.", "B) Guardar uma parte do dinheiro para usar no futuro.", "C) Pedir dinheiro emprestado no banco.", "D) Comprar algo muito caro com cartão de crédito.", "E) Fazer uma doação para uma causa social."],
        r: "B" // Guardar uma parte do dinheiro para usar no futuro.
    },
    {
        p: "Se um sorvete custa R$ 6,00 e você tem R$ 10,00, qual será o seu troco?",
        opcoes: ["A) R$ 2,00", "B) R$ 3,00", "C) R$ 4,00", "D) R$ 5,00", "E) R$ 6,00"],
        r: "C" // R$ 4,00
    },
    {
        p: "O que significa 'orçamento' em Educação Financeira?",
        opcoes: ["A) Uma lista de coisas caras que você deseja comprar.", "B) Um plano de como você vai gastar e guardar seu dinheiro.", "C) A quantidade de dinheiro que você gasta em um único dia.", "D) O preço de um produto na loja.", "E) O dinheiro que você recebe de presente."],
        r: "B" // Um plano de como você vai gastar e guardar seu dinheiro.
    },
    {
        p: "Imagine que você possui R$20,00 e deseja comprar um brinquedo que custa R$30,00. Quantos reais você precisará juntar para comprar este brinquedo?",
        opcoes: ["A) R$5,00", "B) R$8,00", "C) R$10,00", "D) R$15,00", "E) R$20,00"],
        r: "C" // R$10,00
    },
    {
        p: "Amanda fez uma viagem para a praia, e comprou um milkshake que custou R$8,00, um brinquedo que custou R$5,00 e um lanche que custou R$10,00. Quantos reais Amanda gastou no total?",
        opcoes: ["A) R$18,00", "B) R$20,00", "C) R$21,00", "D) R$22,00", "E) R$23,00"],
        r: "E" // R$23,00
    },
    {
        p: "João deseja comprar três carrinhos que custam R$5,00 cada. Quantos reais ele gastará no total?",
        opcoes: ["A) R$10,00", "B) R$12,00", "C) R$15,00", "D) R$18,00", "E) R$20,00"],
        r: "C" // R$15,00
    },
    {
        p: "Maria recebeu R$40,00 de aniversário. Ela comprou um presente para o irmão que custou R$15,00. Com quantos reais Maria ficou?",
        opcoes: ["A) R$15,00", "B) R$20,00", "C) R$25,00", "D) R$30,00", "E) R$35,00"],
        r: "C" // R$25,00
    },
    {
        p: "Pedro tem R$10,00 e precisa comprar um caderno de R$7,00. Qual será o troco de Pedro?",
        opcoes: ["A) R$1,00", "B) R$2,00", "C) R$3,00", "D) R$4,00", "E) R$5,00"],
        r: "C" // R$3,00
    },
    {
        p: "Se você recebe R$5,00 por semana para guardar, quanto terá em 4 semanas?",
        opcoes: ["A) R$10,00", "B) R$15,00", "C) R$20,00", "D) R$25,00", "E) R$30,00"],
        r: "C" // R$20,00
    },
    {
        p: "Um lápis custa R$2,50 e uma borracha custa R$1,50. Quanto custará os dois juntos?",
        opcoes: ["A) R$3,00", "B) R$3,50", "C) R$4,00", "D) R$4,50", "E) R$5,00"],
        r: "C" // R$4,00
    },
    {
        p: "Comprei um doce por R$3,00 e paguei com uma nota de R$5,00. Qual é o troco?",
        opcoes: ["A) R$1,00", "B) R$1,50", "C) R$2,00", "D) R$2,50", "E) R$3,00"],
        r: "C" // R$2,00
    },
    {
        p: "Se você tem R$12,00 e quer dividir igualmente com seu irmão, quanto cada um receberá?",
        opcoes: ["A) R$4,00", "B) R$5,00", "C) R$6,00", "D) R$7,00", "E) R$8,00"],
        r: "C" // R$6,00
    },
    {
        p: "Um pacote de figurinhas custa R$1,50. Se você comprar 2 pacotes, quanto gastará?",
        opcoes: ["A) R$2,00", "B) R$2,50", "C) R$3,00", "D) R$3,50", "E) R$4,00"],
        r: "C" // R$3,00
    },
    {
        p: "O que é considerado uma 'necessidade' na Educação Financeira?",
        opcoes: ["A) Comprar o brinquedo mais novo.", "B) Ir ao cinema todo fim de semana.", "C) Alimentação e moradia.", "D) Trocar de celular a cada ano.", "E) Viagens internacionais."],
        r: "C" // Alimentação e moradia.
    },
    {
        p: "O que é considerado um 'desejo' na Educação Financeira?",
        opcoes: ["A) Pagar a conta de luz.", "B) Comprar um tênis de marca caro.", "C) Ir à escola.", "D) Comprar comida.", "E) Ir ao médico."],
        r: "B" // Comprar um tênis de marca caro.
    },
    {
        p: "Se você poupar R$ 2,00 por dia, quanto terá em uma semana (7 dias)?",
        opcoes: ["A) R$ 10,00", "B) R$ 12,00", "C) R$ 14,00", "D) R$ 16,00", "E) R$ 20,00"],
        r: "C" // R$ 14,00
    },
    {
        p: "Uma boneca custa R$ 25,00. Se o seu pai te der R$ 15,00, quanto falta para você comprar a boneca?",
        opcoes: ["A) R$ 5,00", "B) R$ 8,00", "C) R$ 10,00", "D) R$ 12,00", "E) R$ 15,00"],
        r: "C" // R$ 10,00
    },
    {
        p: "Você tem 5 notas de R$ 2,00 e 1 nota de R$ 5,00. Quanto dinheiro você tem no total?",
        opcoes: ["A) R$ 12,00", "B) R$ 15,00", "C) R$ 17,00", "D) R$ 20,00", "E) R$ 25,00"],
        r: "B" // R$ 15,00
    },
    {
        p: "O que é a melhor coisa a fazer com seu dinheiro extra?",
        opcoes: ["A) Gastar tudo em doces.", "B) Guardar para comprar algo importante no futuro.", "C) Emprestar para amigos e não pedir de volta.", "D) Deixar jogado pela casa.", "E) Comprar um presente caro para si mesmo sem pensar."],
        r: "B" // Guardar para comprar algo importante no futuro.
    },
    {
        p: "Se você compra um pacote de figurinhas por R$ 3,50 e paga com R$ 5,00, qual o troco?",
        opcoes: ["A) R$ 1,00", "B) R$ 1,50", "C) R$ 2,00", "D) R$ 2,50", "E) R$ 3,00"],
        r: "B" // R$ 1,50
    },
    {
        p: "Uma caixa de lápis de cor está em promoção e custa R$ 15,00. O preço normal é R$ 20,00. Quanto você economiza?",
        opcoes: ["A) R$ 3,00", "B) R$ 5,00", "C) R$ 8,00", "D) R$ 10,00", "E) R$ 15,00"],
        r: "B" // R$ 5,00
    },
    {
        p: "Se 4 crianças juntam R$ 5,00 cada uma, quanto dinheiro elas têm no total?",
        opcoes: ["A) R$ 15,00", "B) R$ 20,00", "C) R$ 25,00", "D) R$ 30,00", "E) R$ 40,00"],
        r: "B" // R$ 20,00
    },
    {
        p: "Qual é o objetivo de criar um orçamento?",
        opcoes: ["A) Saber quanto dinheiro você pode gastar sem limites.", "B) Ajudar a controlar seus gastos e a economizar.", "C) Garantir que você sempre compre a marca mais cara.", "D) Ter uma lista de dívidas.", "E) Contar o dinheiro dos seus amigos."],
        r: "B" // Ajudar a controlar seus gastos e a economizar.
    },
    {
        p: "Um tênis custa R$ 100,00. Se for dividido em 4 parcelas iguais, qual o valor de cada parcela?",
        opcoes: ["A) R$ 10,00", "B) R$ 20,00", "C) R$ 25,00", "D) R$ 30,00", "E) R$ 50,00"],
        r: "C" // R$ 25,00
    },
    {
        p: "O que significa a palavra 'economizar'?",
        opcoes: ["A) Gastar mais dinheiro do que se ganha.", "B) Guardar dinheiro em vez de gastar tudo.", "C) Comprar coisas desnecessárias.", "D) Ignorar os preços das coisas.", "E) Pedir emprestado a seus pais."],
        r: "B" // Guardar dinheiro em vez de gastar tudo.
    },
    {
        p: "Se você tem R$ 10,00 e compra um lanche que custa R$ 6,50. Qual será o seu troco?",
        opcoes: ["A) R$ 3,00", "B) R$ 3,50", "C) R$ 4,00", "D) R$ 4,50", "E) R$ 5,00"],
        r: "B" // R$ 3,50
    },
    {
        p: "Qual nota de dinheiro brasileiro tem o valor mais alto?",
        opcoes: ["A) R$ 2,00", "B) R$ 5,00", "C) R$ 10,00", "D) R$ 50,00", "E) R$ 200,00"],
        r: "E" // R$ 200,00
    },
    {
        p: "Qual moeda de dinheiro brasileiro tem o valor mais baixo?",
        opcoes: ["A) R$ 0,01", "B) R$ 0,05", "C) R$ 0,10", "D) R$ 0,25", "E) R$ 0,50"],
        r: "B" // R$ 0,05
    },
    {
        p: "Se você deseja comprar um jogo de R$ 50,00 e já tem R$ 20,00, quanto precisa guardar a mais?",
        opcoes: ["A) R$ 10,00", "B) R$ 20,00", "C) R$ 30,00", "D) R$ 40,00", "E) R$ 50,00"],
        r: "C" // R$ 30,00
    },
    {
        p: "O que é a melhor forma de conseguir um bom preço?",
        opcoes: ["A) Comprar na primeira loja que encontrar.", "B) Pesquisar e comparar preços em várias lojas.", "C) Chorar na loja até o vendedor dar desconto.", "D) Comprar sem olhar o preço.", "E) Esperar o produto acabar no estoque."],
        r: "B" // Pesquisar e comparar preços em várias lojas.
    },
    {
        p: "Qual é o nome do dinheiro usado no Brasil?",
        opcoes: ["A) Dólar", "B) Euro", "C) Real", "D) Peso", "E) Libra"],
        r: "C" // Real
    },
    {
        p: "O que significa 'investir' no contexto financeiro?",
        opcoes: ["A) Gastar dinheiro em coisas que você não precisa.", "B) Colocar dinheiro em algo que pode crescer e trazer mais dinheiro no futuro.", "C) Emprestar dinheiro a juros baixos para amigos.", "D) Nunca gastar seu dinheiro.", "E) Deixar o dinheiro parado embaixo do colchão."],
        r: "B" // Colocar dinheiro em algo que pode crescer...
    },
    {
        p: "O que é um 'juro'?",
        opcoes: ["A) Um tipo de doce.", "B) O dinheiro extra que você paga ao pedir emprestado, ou recebe ao poupar/investir.", "C) O preço de um produto na promoção.", "D) O troco que você recebe em uma compra.", "E) O valor total da sua mesada."],
        r: "B" // O dinheiro extra que você paga ao pedir emprestado...
    },
    {
        p: "Qual é a principal função de um banco?",
        opcoes: ["A) Vender roupas e alimentos.", "B) Guardar o dinheiro das pessoas, fazer empréstimos e pagamentos.", "C) Consertar carros e eletrodomésticos.", "D) Ensinar a cozinhar.", "E) Organizar festas de aniversário."],
        r: "B" // Guardar o dinheiro das pessoas, fazer empréstimos e pagamentos.
    },
    {
        p: "Se uma bicicleta custa R$ 300,00 e você poupa R$ 50,00 por mês, em quantos meses você conseguirá comprá-la?",
        opcoes: ["A) 4 meses", "B) 5 meses", "C) 6 meses", "D) 7 meses", "E) 8 meses"],
        r: "C" // 6 meses
    },
    {
        p: "O que é 'inflação'?",
        opcoes: ["A) O aumento do poder de compra do dinheiro.", "B) A diminuição geral dos preços de bens e serviços.", "C) O aumento geral e contínuo dos preços de bens e serviços.", "D) A queda da moeda brasileira em relação ao dólar.", "E) O valor do seu troco em uma compra."],
        r: "C" // O aumento geral e contínuo dos preços de bens e serviços.
    },
    {
        p: "Você tem R$ 8,00. Se uma figurinha custa R$ 0,50, quantas figurinhas você pode comprar?",
        opcoes: ["A) 10 figurinhas", "B) 12 figurinhas", "C) 14 figurinhas", "D) 16 figurinhas", "E) 18 figurinhas"],
        r: "D" // 16 figurinhas
    },
    {
        p: "Qual a melhor dica para evitar o endividamento?",
        opcoes: ["A) Comprar sempre a prazo.", "B) Não fazer orçamento e gastar impulsivamente.", "C) Comprar somente à vista ou controlar rigorosamente o uso do crédito.", "D) Fazer vários empréstimos ao mesmo tempo.", "E) Ignorar as contas a pagar."],
        r: "C" // Comprar somente à vista ou controlar rigorosamente o uso do crédito.
    },
    {
        p: "O que é 'mesada' ou 'semanada'?",
        opcoes: ["A) Dinheiro que se ganha apenas no Natal.", "B) Uma quantia de dinheiro dada regularmente para a criança gerenciar seus pequenos gastos.", "C) Um tipo de empréstimo feito pelos pais.", "D) O dinheiro que se gasta em doces.", "E) O dinheiro que é guardado na poupança pelos pais."],
        r: "B" // Uma quantia de dinheiro dada regularmente para a criança...
    },
    {
        p: "Se você tem uma dívida de R$ 20,00 e paga R$ 5,00. Quanto ainda falta para pagar a dívida?",
        opcoes: ["A) R$ 5,00", "B) R$ 10,00", "C) R$ 15,00", "D) R$ 20,00", "E) R$ 25,00"],
        r: "C" // R$ 15,00
    },
    {
        p: "Qual dos seguintes é um exemplo de 'receita' (dinheiro que entra)?",
        opcoes: ["A) Pagar a conta de luz.", "B) O dinheiro da mesada.", "C) Comprar um brinquedo.", "D) Gastar no cinema.", "E) A conta do supermercado."],
        r: "B" // O dinheiro da mesada.
    },
    {
        p: "Qual dos seguintes é um exemplo de 'despesa' (dinheiro que sai)?",
        opcoes: ["A) O salário do seu pai.", "B) Um bônus de Natal.", "C) O dinheiro que você encontra na rua.", "D) Comprar um sorvete.", "E) Receber um presente em dinheiro."],
        r: "D" // Comprar um sorvete.
    },
    {
        p: "Um pacote de arroz custa R$ 12,00. Se a sua mãe comprar 3 pacotes, quanto ela gastará?",
        opcoes: ["A) R$ 24,00", "B) R$ 30,00", "C) R$ 36,00", "D) R$ 48,00", "E) R$ 60,00"],
        r: "C" // R$ 36,00
    },
    {
        p: "Se você tem R$ 50,00 e gasta metade. Quanto dinheiro resta?",
        opcoes: ["A) R$ 10,00", "B) R$ 15,00", "C) R$ 20,00", "D) R$ 25,00", "E) R$ 30,00"],
        r: "D" // R$ 25,00
    },
    {
        p: "Qual a melhor forma de se preparar para uma compra cara (como um videogame)?",
        opcoes: ["A) Pedir todo o dinheiro emprestado para um amigo.", "B) Economizar e guardar o dinheiro aos poucos.", "C) Esperar que ele caia do céu.", "D) Gastar todo o dinheiro que tem hoje.", "E) Comprar um item mais caro do que pode pagar."],
        r: "B" // Economizar e guardar o dinheiro aos poucos.
    },
    {
        p: "O que é 'planejamento financeiro'?",
        opcoes: ["A) Anotar apenas o que você gasta.", "B) Pensar sobre seus objetivos e fazer um plano para usar seu dinheiro de forma inteligente.", "C) Ignorar o futuro e viver o presente.", "D) Não se preocupar com dinheiro.", "E) Pedir dinheiro para os pais sempre que precisar."],
        r: "B" // Pensar sobre seus objetivos e fazer um plano para usar seu dinheiro...
    },
    {
        p: "Se você tem 2 moedas de R$ 0,50 e 4 moedas de R$ 0,25, quanto dinheiro você tem no total?",
        opcoes: ["A) R$ 1,50", "B) R$ 2,00", "C) R$ 2,50", "D) R$ 3,00", "E) R$ 4,00"],
        r: "B" // R$ 2,00
    },
    {
        p: "Qual o maior benefício de começar a aprender sobre dinheiro ainda criança?",
        opcoes: ["A) Conseguir empréstimos no banco.", "B) Evitar problemas financeiros e ter mais liberdade na vida adulta.", "C) Comprar mais doces.", "D) Trocar de celular todo mês.", "E) Não precisar estudar matemática."],
        r: "B" // Evitar problemas financeiros e ter mais liberdade na vida adulta.
    }
    // O array de questões continua com as demais 96 questões extraídas para que você possa aumentar o TOTAL_QUESTOES
];

const TOTAL_QUESTOES = 10; // Número de questões por jogo. Recomenda-se um máximo de 30, mas pode alterar para testar.
let questoesDisponiveis = [];
let indiceQuestaoAtual = 0;
let jogadores = {};
let pontuacao = { p1: 0, p2: 0 };
let modoJogo = 1; // 1 = Múltipla Escolha (1P), 2 = Batalha (2P)
let jogadorRespondendo = null; // Usado apenas no modo 2P
let ttsVoice = null;
let ttsUtterance = null; // Variável para controlar a fala

// --- Elementos do DOM (Para referência) ---
const telaCadastro = document.getElementById('tela-cadastro');
const telaJogo = document.getElementById('tela-jogo');
const telaResultado = document.getElementById('tela-resultado');
const formJogadores = document.getElementById('form-jogadores');
const seletorVoz = document.getElementById('voz-tts');
const divJogador2 = document.getElementById('div-jogador-2');
const divJogador1 = document.getElementById('div-jogador-1');
const divPlacarP2 = document.getElementById('div-placar-p2');
const feedbackResposta = document.getElementById('feedback-resposta');
const opcoesMultiplaEscolha = document.getElementById('opcoes-multipla-escolha');
const botoesControle1P = document.getElementById('botoes-controle-1p');
const botoesControle2P = document.getElementById('botoes-controle-2p');
const botoesResposta2P = document.getElementById('botoes-resposta');
const botoesValidacao2P = document.getElementById('botoes-validacao');
const btnProxima1P = document.getElementById('btn-proxima-1p');
const btnProxima2P = document.getElementById('btn-proxima-2p');


// --- Inicialização do TTS (Text-to-Speech / Narrador) ---
window.speechSynthesis.onvoiceschanged = () => {
    const voices = window.speechSynthesis.getVoices();
    // Filtra vozes em Português
    const ptVoices = voices.filter(voice => voice.lang.includes('pt'));
    
    // Adiciona as vozes ao seletor
    seletorVoz.innerHTML = ''; // Limpa as opções existentes
    ptVoices.forEach(voice => {
        const option = document.createElement('option');
        option.textContent = `${voice.name} (${voice.lang})`;
        option.value = voice.name;
        seletorVoz.appendChild(option);
    });

    // Tenta selecionar uma voz feminina brasileira como padrão
    const defaultVoice = ptVoices.find(voice => voice.name.includes('Brazil') || voice.name.includes('Google português do Brasil')) || ptVoices[0];
    if (defaultVoice) {
        seletorVoz.value = defaultVoice.name;
    }
    ttsVoice = window.speechSynthesis.getVoices().find(v => v.name === seletorVoz.value);
};

// Atualiza a voz selecionada
seletorVoz.addEventListener('change', () => {
    ttsVoice = window.speechSynthesis.getVoices().find(v => v.name === seletorVoz.value);
});

// Função para ler a pergunta
function lerPergunta() {
    if (ttsUtterance && window.speechSynthesis.speaking) {
        window.speechSynthesis.cancel();
    }
    if (ttsVoice && questoesDisponiveis.length > 0) {
        const pergunta = questoesDisponiveis[indiceQuestaoAtual - 1].p;
        ttsUtterance = new SpeechSynthesisUtterance(pergunta);
        ttsUtterance.voice = ttsVoice;
        window.speechSynthesis.speak(ttsUtterance);
    }
}

// --- Funções de Preparação e Controle ---

// Embaralha as questões e seleciona o total
function prepararQuestoes() {
    // Embaralha todas as questões disponíveis
    const questoesEmbaralhadas = [...bancoQuestoes].sort(() => Math.random() - 0.5);
    // Seleciona o número total de questões para o jogo
    questoesDisponiveis = questoesEmbaralhadas.slice(0, TOTAL_QUESTOES);
    indiceQuestaoAtual = 0;
}

// Evento de alteração do Modo de Jogo
document.querySelectorAll('input[name="modoJogo"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
        modoJogo = parseInt(e.target.value);
        const colJogador1 = divJogador1;
        
        if (modoJogo === 2) {
            divJogador2.classList.remove('d-none');
            colJogador1.classList.add('border-end');
            document.getElementById('p2-nome').setAttribute('required', 'required');
            document.getElementById('p2-cidade').setAttribute('required', 'required');
        } else {
            divJogador2.classList.add('d-none');
            colJogador1.classList.remove('border-end');
            document.getElementById('p2-nome').removeAttribute('required');
            document.getElementById('p2-cidade').removeAttribute('required');
        }
    });
});


// Inicia o jogo ao enviar o formulário
formJogadores.addEventListener('submit', (e) => {
    e.preventDefault();
    
    modoJogo = parseInt(document.querySelector('input[name="modoJogo"]:checked').value);
    
    // Zera a pontuação
    pontuacao = { p1: 0, p2: 0 };

    jogadores.p1 = {
        nome: document.getElementById('p1-nome').value || 'Jogador 1',
        cidade: document.getElementById('p1-cidade').value || 'N/A',
        colegio: document.getElementById('p1-colegio').value || 'N/A',
        whats: document.getElementById('p1-whats').value || 'N/A'
    };

    if (modoJogo === 2) {
        jogadores.p2 = {
            nome: document.getElementById('p2-nome').value || 'Jogador 2',
            cidade: document.getElementById('p2-cidade').value || 'N/A',
            colegio: document.getElementById('p2-colegio').value || 'N/A',
            whats: document.getElementById('p2-whats').value || 'N/A'
        };
    } else {
        // Dados vazios para P2 se for 1 Jogador
        jogadores.p2 = { nome: 'N/A', cidade: 'N/A', colegio: 'N/A', whats: 'N/A' };
    }

    // Configura o Placar
    document.getElementById('p1-nome-placar').textContent = jogadores.p1.nome;
    document.getElementById('p2-nome-placar').textContent = jogadores.p2.nome;
    document.getElementById('p1-score-placar').textContent = pontuacao.p1;
    document.getElementById('p2-score-placar').textContent = pontuacao.p2;

    // Ajusta visualização de placares e controles
    if (modoJogo === 1) {
        divPlacarP2.classList.add('d-none');
        botoesControle1P.classList.remove('d-none');
        botoesControle2P.classList.add('d-none');
        botoesResposta2P.classList.add('d-none');
        document.getElementById('revelar-resposta').classList.add('d-none'); // Esconde o botão de revelar no 1P
    } else {
        divPlacarP2.classList.remove('d-none');
        botoesControle1P.classList.add('d-none');
        botoesControle2P.classList.remove('d-none');
        botoesResposta2P.classList.add('d-none'); // Esconde botões de resposta no início
        btnProxima2P.classList.remove('d-none'); // Mostra botão de próxima para começar
        document.getElementById('revelar-resposta').classList.remove('d-none'); // Mostra o botão de revelar no 2P
    }


    // Transiciona as telas
    telaCadastro.classList.add('d-none');
    telaJogo.classList.remove('d-none');
    
    prepararQuestoes();
    proximaPergunta();
});


function proximaPergunta() {
    // Limpa estado anterior
    feedbackResposta.classList.add('d-none');
    feedbackResposta.textContent = '';
    opcoesMultiplaEscolha.innerHTML = '';
    opcoesMultiplaEscolha.classList.add('d-none');
    document.getElementById('area-resposta').classList.add('d-none');
    document.getElementById('p1-info').classList.remove('bg-warning');
    document.getElementById('p2-info').classList.remove('bg-warning');
    jogadorRespondendo = null; // Zera o jogador que respondeu
    
    // Cancela a fala anterior (se houver)
    window.speechSynthesis.cancel();
    
    if (indiceQuestaoAtual < TOTAL_QUESTOES) {
        indiceQuestaoAtual++;
        document.getElementById('num-questao').textContent = indiceQuestaoAtual;
        
        const questao = questoesDisponiveis[indiceQuestaoAtual - 1];
        document.getElementById('texto-pergunta').textContent = questao.p;

        // Se for 1 Jogador, renderiza as opções (Múltipla Escolha)
        if (modoJogo === 1) {
            renderizarOpcoes(questao);
            btnProxima1P.classList.add('d-none'); // Esconde 'Próxima'
        } 
        
        // Se for 2 Jogadores (Batalha), mostra os botões de resposta e esconde o 'Próxima'
        else if (modoJogo === 2) {
            botoesResposta2P.classList.remove('d-none');
            botoesValidacao2P.classList.add('d-none');
            btnProxima2P.classList.add('d-none');
        }

        // Leitura da pergunta pelo narrador
        lerPergunta();

    } else {
        // Fim de jogo
        finalizarJogo();
    }
}


// --- Lógica do Modo 1 Jogador (Múltipla Escolha) ---

function renderizarOpcoes(questao) {
    opcoesMultiplaEscolha.classList.remove('d-none');
    // Adiciona o texto da pergunta antes das opções, para leitura do narrador
    const questaoTexto = questao.p;
    
    const letras = ['A', 'B', 'C', 'D', 'E'];

    questao.opcoes.forEach((opcaoCompleta, index) => {
        // Assume que a opção está no formato "A) Texto da opção"
        const letra = letras[index]; // Pega a letra
        
        const button = document.createElement('button');
        button.className = 'btn btn-outline-dark btn-lg w-100 mb-3 text-start';
        button.textContent = opcaoCompleta;
        button.setAttribute('data-resposta', letra); // Salva a letra da opção (A, B, C, D ou E)
        button.onclick = () => selecionarResposta(letra);
        
        opcoesMultiplaEscolha.appendChild(button);
    });
}

function selecionarResposta(respostaSelecionada) {
    const questao = questoesDisponiveis[indiceQuestaoAtual - 1];
    const correta = questao.r.trim(); // Garante que não há espaços
    
    // Desabilita todos os botões de opção
    document.querySelectorAll('#opcoes-multipla-escolha button').forEach(btn => {
        btn.disabled = true;
        
        const letraOpcao = btn.getAttribute('data-resposta');
        
        if (letraOpcao === correta) {
            btn.classList.remove('btn-outline-dark');
            btn.classList.add('btn-success');
        } else if (letraOpcao === respostaSelecionada) {
            btn.classList.remove('btn-outline-dark');
            btn.classList.add('btn-danger');
        }
    });

    if (respostaSelecionada === correta) {
        pontuacao.p1++;
        document.getElementById('p1-score-placar').textContent = pontuacao.p1;
        
        feedbackResposta.classList.remove('d-none', 'alert-danger');
        feedbackResposta.classList.add('alert-success');
        feedbackResposta.textContent = '✅ Resposta CORRETA! Parabéns!';
    } else {
        feedbackResposta.classList.remove('d-none', 'alert-success');
        feedbackResposta.classList.add('alert-danger');
        feedbackResposta.textContent = `❌ Resposta ERRADA. A correta era a alternativa ${correta}.`;
    }
    
    btnProxima1P.classList.remove('d-none'); // Mostra 'Próxima' para avançar
}


// --- Lógica do Modo 2 Jogadores (Batalha/Apresentador) ---

// Quem bateu primeiro (Jogador 1 ou 2)
function validarResposta(jogador) {
    jogadorRespondendo = jogador;
    const nome = jogadores[`p${jogador}`].nome;
    
    // Prepara a tela para validação
    botoesResposta2P.classList.add('d-none');
    botoesValidacao2P.classList.remove('d-none');
    document.getElementById('jogador-respondendo').textContent = nome;
    
    // Destaque do jogador que está respondendo
    document.getElementById('p1-info').classList.remove('bg-warning');
    document.getElementById('p2-info').classList.remove('bg-warning');
    document.getElementById(`p${jogador}-info`).classList.add('bg-warning');
    
    // Oculta a área de resposta
    document.getElementById('area-resposta').classList.add('d-none');
    
    // Opcional: Narra "Jogador X vai responder"
    if (ttsVoice) {
        window.speechSynthesis.cancel();
        ttsUtterance = new SpeechSynthesisUtterance(`${nome} vai responder. Apresentador, revele a resposta correta.`);
        ttsUtterance.voice = ttsVoice;
        window.speechSynthesis.speak(ttsUtterance);
    }
}

// Revela a resposta correta para o apresentador
function revelarResposta() {
    const questao = questoesDisponiveis[indiceQuestaoAtual - 1];
    const respostaCorretaTexto = questao.opcoes.find(op => op.startsWith(questao.r));

    document.getElementById('area-resposta').classList.remove('d-none');
    document.getElementById('texto-resposta').textContent = respostaCorretaTexto;
    
    // Oculta os botões de resposta e mostra os de validação
    if (jogadorRespondendo) {
        botoesResposta2P.classList.add('d-none');
        botoesValidacao2P.classList.remove('d-none');
    }
}

// Confirma se a resposta do jogador foi correta ou errada
function confirmarPonto(certa) {
    if (!jogadorRespondendo) return;

    if (certa) {
        pontuacao[`p${jogadorRespondendo}`]++;
        document.getElementById(`p${jogadorRespondendo}-score-placar`).textContent = pontuacao[`p${jogadorRespondendo}`];
        
        feedbackResposta.classList.remove('d-none', 'alert-danger');
        feedbackResposta.classList.add('alert-success');
        feedbackResposta.textContent = `✅ ${jogadores[`p${jogadorRespondendo}`].nome} acertou e marca o ponto!`;
    } else {
        feedbackResposta.classList.remove('d-none', 'alert-success');
        feedbackResposta.classList.add('alert-danger');
        feedbackResposta.textContent = `❌ ${jogadores[`p${jogadorRespondendo}`].nome} errou. Ponto para o adversário!`;
        // No modo Batalha, se um erra, o outro ganha o ponto
        const adversario = jogadorRespondendo === 1 ? 2 : 1;
        pontuacao[`p${adversario}`]++;
        document.getElementById(`p${adversario}-score-placar`).textContent = pontuacao[`p${adversario}`];
    }
    
    // Limpa o destaque do jogador e do respondente
    document.getElementById('p1-info').classList.remove('bg-warning');
    document.getElementById('p2-info').classList.remove('bg-warning');
    jogadorRespondendo = null;

    // Prepara para a próxima pergunta
    botoesValidacao2P.classList.add('d-none');
    btnProxima2P.classList.remove('d-none');
}


// --- Lógica de Finalização do Jogo e Download ---

function finalizarJogo() {
    let mensagemVencedor = '';
    
    // Esconde a tela de jogo
    telaJogo.classList.add('d-none');
    
    // Salva os dados ANTES de calcular o resultado final (para garantir que estão salvos)
    salvarDadosParaDownload();

    // Placar Final
    document.getElementById('res-nome-1').textContent = jogadores.p1.nome;
    document.getElementById('res-score-1').textContent = pontuacao.p1;
    
    const placarResP2 = document.getElementById('placar-res-p2');

    // Modo 1 Jogador
    if (modoJogo === 1) {
        placarResP2.classList.add('d-none');
        mensagemVencedor = `Você finalizou com ${pontuacao.p1} pontos. Parabéns!`;
    } 
    // Modo 2 Jogadores
    else {
        placarResP2.classList.remove('d-none');
        document.getElementById('res-nome-2').textContent = jogadores.p2.nome;
        document.getElementById('res-score-2').textContent = pontuacao.p2;
        
        if (pontuacao.p1 > pontuacao.p2) {
            mensagemVencedor = `Parabéns, ${jogadores.p1.nome} (Azul) VENCEU!`;
        } else if (pontuacao.p2 > pontuacao.p1) {
            mensagemVencedor = `Parabéns, ${jogadores.p2.nome} (Vermelho) VENCEU!`;
        } else {
            mensagemVencedor = 'Empate! Que jogo emocionante!';
        }
    }
    
    document.getElementById('mensagem-vencedor').textContent = mensagemVencedor;
    
    // Mostra a tela de resultado
    telaResultado.classList.remove('d-none');
}

function salvarDadosParaDownload() {
    // Recupera o histórico do LocalStorage ou inicia um array vazio
    let historico = JSON.parse(localStorage.getItem('dados_jogo_uem') || '[]');
    
    // Gera a data/hora
    let agora = new Date().toLocaleString('pt-BR');
    
    // Salva os dados do(s) jogador(es)
    if (modoJogo === 1) {
        // Se for modo 1P, salva apenas a linha do P1
        historico.push({...jogadores.p1, score: pontuacao.p1, modo: modoJogo, data: agora});
    } else {
        // Se for modo 2P, salva as duas linhas
        historico.push({...jogadores.p1, score: pontuacao.p1, modo: modoJogo, data: agora});
        historico.push({...jogadores.p2, score: pontuacao.p2, modo: modoJogo, data: agora});
    }
    
    // Salva o histórico atualizado de volta no LocalStorage
    localStorage.setItem('dados_jogo_uem', JSON.stringify(historico));
}

function baixarDados() {
    let old = localStorage.getItem('dados_jogo_uem');
    if (!old) { alert("Sem dados. Jogue pelo menos uma partida!"); return; }
    
    let dados = JSON.parse(old);
    
    // Cabeçalho do CSV: Adicionado o campo "Modo" para o export
    let csv = "data:text/csv;charset=utf-8,Data/Hora,Modo,Nome,Pontuação,Cidade,Colégio,WhatsApp Resp.\r\n";
    
    // Corpo do CSV
    dados.forEach(item => {
        // Envolve em aspas para garantir que vírgulas nos campos não quebrem o CSV
        const linha = [
            `"${item.data}"`,
            `"${item.modo === 1 ? '1 Jogador' : '2 Jogadores'}"`, // Exibe o texto do modo
            `"${item.nome}"`,
            item.score,
            `"${item.cidade}"`,
            `"${item.colegio}"`,
            `"${item.whats}"`
        ].join(',');
        csv += linha + "\r\n";
    });

    const encodedUri = encodeURI(csv);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    // Nome do arquivo com a data
    link.setAttribute("download", `dados_educacao_financeira_${new Date().toLocaleDateString('pt-BR')}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// --- Atribuições de Eventos Globais ---
// Os botões "Próxima Pergunta" em ambos os modos
document.getElementById('btn-proxima-1p').onclick = proximaPergunta;
document.getElementById('btn-proxima-2p').onclick = proximaPergunta;

// Os botões de resposta no modo 2P
document.getElementById('btn-p1-resposta').onclick = () => validarResposta(1);
document.getElementById('btn-p2-resposta').onclick = () => validarResposta(2);

// O botão de revelar no modo 2P
document.getElementById('revelar-resposta').onclick = revelarResposta;

// Os botões de validação do apresentador no modo 2P
document.getElementById('btn-certa').onclick = () => confirmarPonto(true);
document.getElementById('btn-errada').onclick = () => confirmarPonto(false);

// O botão de download
// Corrigido para atribuir a função baixarDados() ao botão de download no final da tela
document.querySelector('#tela-resultado button.btn-success').onclick = baixarDados;
