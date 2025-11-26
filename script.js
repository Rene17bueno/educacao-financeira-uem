// --- BANCO DE QUESTÕES (Baseado no seu documento) ---
const bancoQuestoes = [
    { p: "Imagine que você possui 20 reais e deseja comprar um brinquedo que custa 30 reais. Quanto falta?", r: "10 reais" },
    { p: "Amanda comprou um milkshake de 8 reais, um brinquedo de 5 e um lanche de 10. Quanto gastou?", r: "23 reais" },
    { p: "João quer três carrinhos de 5 reais cada. Quanto ele gastará no total?", r: "15 reais" },
    { p: "Maria deseja comprar uma flor que custa 20 reais, mas ela possui apenas 10. Quanto falta?", r: "10 reais" },
    { p: "Laura ganhou vinte balas e deseja dividi-las entre ela e seus três amigos. Quantas balas cada um ganhará?", r: "5 balas" },
    { p: "Carlos ganha 30 reais por dia em seu trabalho e deseja ir ao cinema gastando 90 reais. Quantos dias ele precisará trabalhar?", r: "3 dias" },
    { p: "Helena adora comer chocolates e deseja comprar um chocolate que custa 5 reais, mas ela possui apenas 2. Quanto ela precisa juntar?", r: "3 reais" },
    { p: "Ana possuía 5 reais e ganhou mais 3 de sua avó. Quantos reais ela possui agora?", r: "8 reais" },
    { p: "Pedro encontrou 2 reais em sua mochila e ganhou 4 de mesada. Total?", r: "6 reais" },
    { p: "Júlia guardou 7 reais hoje e 5 ontem. Qual o total economizado?", r: "12 reais" },
    { p: "Lucas tinha 10 reais e gastou 4 com suco. Quanto sobrou?", r: "6 reais" },
    { p: "Tiago comprou um brinquedo de 12 reais e pagou com uma nota de 15. Qual o troco?", r: "3 reais" },
    { p: "Carla economiza 5 reais por semana para comprar algo de 20. Quantas semanas precisa?", r: "4 semanas" },
    { p: "Miguel tinha 12, pôs mais 3, gastou 4. Quanto sobrou?", r: "11 reais" },
    { p: "Clara guarda 2 reais por dia. Em 5 dias terá quanto?", r: "10 reais" },
    { p: "Ingresso é 15 reais. João tem 10. Quanto precisa pedir?", r: "5 reais" },
    { p: "Lara gastou 2 em adesivo e 4 em caneta. Total?", r: "6 reais" },
    { p: "Picolé custa 5. Gabriel tem 8. Quanto sobra?", r: "3 reais" },
    { p: "Bola custa 18. Você ganhou 10 do irmão e 5 da mãe. Quanto falta?", r: "3 reais" },
    { p: "Luís tem 20 reais. Quer 2 carrinhos de 7 reais cada. Dá pra comprar?", r: "Sim" },
    { p: "Paula ganhou 4 reais de 3 tios diferentes. Total?", r: "12 reais" },
    { p: "Jogo custa 30. Felipe tem 22. Quanto falta?", r: "8 reais" },
    { p: "Lápis custa 3 e caderno 9. Total da compra?", r: "12 reais" },
    { p: "João tem 5 reais. Quer doce de 2,50 e adesivo de 1,50. O dinheiro dá?", r: "Sim" },
    { p: "Compra de 8 reais paga com nota de 10. Troco?", r: "2 reais" },
    { p: "Lucas ganha 3 reais por semana. Em 4 semanas terá?", r: "12 reais" },
    { p: "Livro custa 20. Sofia guarda 4 por semana. Quantas semanas?", r: "5 semanas" },
    { p: "Caneta custa 1,50. Pedro quer 3. Total?", r: "4,50 reais" },
    { p: "Loja A: estojo 12 reais. Loja B: 9,50. Qual a economia na B?", r: "2,50 reais" },
    { p: "Clara possuía 15 reais e doou 5. Sobrou?", r: "10 reais" },
    { p: "Ana regou plantas 6 vezes por 2 reais cada vez. Ganhou?", r: "12 reais" },
    { p: "Presente de 40 reais dividido por 2 pessoas. Quanto cada paga?", r: "20 reais" },
    { p: "Chiclete de 0,75 pago com 1 real. Troco?", r: "0,25 centavos" },
    { p: "4 moedas de 0,50 e 3 de 1 real. Total?", r: "5 reais" },
    { p: "Boneca custa 18, na promoção é 14,50. Qual a economia?", r: "3,50 reais" },
    { p: "Lanche 6,50 e figurinha 3,50. Gasto total?", r: "10 reais" },
    { p: "Você tem 7 reais, quer carrinho de 12. Falta?", r: "5 reais" }
];

// --- VARIÁVEIS DE CONTROLE E VOZ ---
let jogadores = { p1: {}, p2: {} };
let pontuacao = { p1: 0, p2: 0 };
let questoesRodada = [];
let questaoAtualIndex = 0;
let jogadorRespondendoAtual = 0;
const synth = window.speechSynthesis;
let vozSelecionada = null;
let voicesList = [];

const seletorVoz = document.getElementById('seletor-voz');

// Funções de Voz
function loadVoices() {
    voicesList = synth.getVoices().filter(voice => voice.lang.startsWith('pt'));
    
    if (voicesList.length === 0) {
        // Se não encontrar nenhuma voz 'pt', apenas retorna.
        seletorVoz.innerHTML = '<option value="">Nenhuma voz em Português encontrada.</option>';
        return;
    }

    // 1. Encontra a voz feminina brasileira (padrão)
    let defaultVoice = voicesList.find(voice => 
        voice.lang.startsWith('pt-BR') && !/male|masculino|man/i.test(voice.name)
    );
    // 2. Se não encontrar uma feminina pt-BR, pega a primeira pt-BR
    if (!defaultVoice) {
        defaultVoice = voicesList.find(voice => voice.lang.startsWith('pt-BR'));
    }
    // 3. Se não encontrar nenhuma pt-BR, pega a primeira pt
    if (!defaultVoice) {
        defaultVoice = voicesList[0];
    }

    // Preenche o seletor com todas as vozes PT
    seletorVoz.innerHTML = voicesList.map(voice => 
        `<option value="${voice.name}" data-lang="${voice.lang}">${voice.name} (${voice.lang})</option>`
    ).join('');

    // Define o valor padrão no seletor e na variável de controle
    if (defaultVoice) {
        seletorVoz.value = defaultVoice.name;
        vozSelecionada = defaultVoice;
    }
}

// Evento disparado quando as vozes do sistema são carregadas
if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = loadVoices;
} else {
    loadVoices();
}

// Evento de mudança no seletor pelo usuário
seletorVoz.addEventListener('change', () => {
    const selectedName = seletorVoz.value;
    vozSelecionada = voicesList.find(voice => voice.name === selectedName);
});

function falar(texto) {
    if (synth.speaking) return;
    const utter = new SpeechSynthesisUtterance(texto);
    
    utter.lang = 'pt-BR'; // Mantém o lang como pt-BR para pronúncia
    utter.rate = 1.0; 
    
    // Aplica a voz selecionada pelo usuário/padrão
    if (vozSelecionada) {
        utter.voice = vozSelecionada;
        // Ajusta o lang da fala para corresponder ao da voz (melhor pronúncia)
        utter.lang = vozSelecionada.lang;
    }
    
    synth.speak(utter);
}

// 1. Iniciar Jogo
document.getElementById('form-jogadores').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Assegura que a voz final seja capturada antes de começar
    const selectedName = seletorVoz.value;
    vozSelecionada = voicesList.find(voice => voice.name === selectedName);

    jogadores.p1 = {
        nome: document.getElementById('p1-nome').value,
        cidade: document.getElementById('p1-cidade').value,
        colegio: document.getElementById('p1-colegio').value,
        whats: document.getElementById('p1-whats').value
    };
    jogadores.p2 = {
        nome: document.getElementById('p2-nome').value,
        cidade: document.getElementById('p2-cidade').value,
        colegio: document.getElementById('p2-colegio').value,
        whats: document.getElementById('p2-whats').value
    };
    salvarLocal();
    
    document.getElementById('nome-placar-1').innerText = jogadores.p1.nome.split(' ')[0];
    document.getElementById('nome-placar-2').innerText = jogadores.p2.nome.split(' ')[0];

    // Sorteia 5 questões
    questoesRodada = bancoQuestoes.sort(() => 0.5 - Math.random()).slice(0, 5);

    document.getElementById('tela-cadastro').classList.add('d-none');
    document.getElementById('tela-jogo').classList.remove('d-none');
    
    falar(`Bem vindos ${jogadores.p1.nome} e ${jogadores.p2.nome}! Vamos começar o desafio de perguntas financeiras.`);
});

// 2. Lógica do Jogo
function proximaPergunta() {
    if (questaoAtualIndex >= 5) {
        finalizarJogo();
        return;
    }
    
    document.getElementById('area-resposta').classList.add('d-none');
    document.getElementById('botoes-controle').classList.add('d-none');
    document.getElementById('botoes-resposta').classList.remove('d-none');
    document.getElementById('botoes-validacao').classList.add('d-none');

    document.getElementById('num-questao').innerText = questaoAtualIndex + 1;
    let q = questoesRodada[questaoAtualIndex];
    document.getElementById('texto-pergunta').innerText = q.p;
    document.getElementById('texto-resposta').innerText = q.r;

    setTimeout(() => { falar(q.p); }, 500);
}

function lerPergunta() {
    if (questaoAtualIndex < 5) {
        falar(questoesRodada[questaoAtualIndex].p);
    }
}

function revelarResposta() {
    document.getElementById('area-resposta').classList.remove('d-none');
}

function validarResposta(num) {
    jogadorRespondendoAtual = num;
    let nome = num === 1 ? jogadores.p1.nome : jogadores.p2.nome;
    document.getElementById('jogador-respondendo').innerText = nome;
    
    document.getElementById('botoes-resposta').classList.add('d-none');
    document.getElementById('botoes-validacao').classList.remove('d-none');
    revelarResposta();
}

function confirmarPonto(acertou) {
    if (acertou) {
        falar("Correto!");
        if (jogadorRespondendoAtual === 1) {
            pontuacao.p1++;
            document.getElementById('score-1').innerText = pontuacao.p1;
        } else {
            pontuacao.p2++;
            document.getElementById('score-2').innerText = pontuacao.p2;
        }
        questaoAtualIndex++;
        document.getElementById('botoes-validacao').classList.add('d-none');
        document.getElementById('botoes-controle').classList.remove('d-none');
    } else {
        falar("Incorreto. O adversário pode tentar.");
        document.getElementById('botoes-validacao').classList.add('d-none');
        document.getElementById('botoes-resposta').classList.remove('d-none');
    }
}

function finalizarJogo() {
    document.getElementById('tela-jogo').classList.add('d-none');
    document.getElementById('tela-resultado').classList.remove('d-none');
    
    document.getElementById('res-nome-1').innerText = jogadores.p1.nome;
    document.getElementById('res-score-1').innerText = pontuacao.p1;
    document.getElementById('res-nome-2').innerText = jogadores.p2.nome;
    document.getElementById('res-score-2').innerText = pontuacao.p2;

    let msg = pontuacao.p1 > pontuacao.p2 ? 
        `Parabéns ${jogadores.p1.nome}! Você venceu!` : 
        (pontuacao.p2 > pontuacao.p1 ? `Parabéns ${jogadores.p2.nome}! Você venceu!` : "Empate! Vocês são muito inteligentes!");
    
    document.getElementById('mensagem-vencedor').innerText = msg;
    falar("Fim de jogo. " + msg);
}

// 3. Salvar Dados (Excel/CSV)
let historico = [];
function salvarLocal() {
    let old = localStorage.getItem('dados_jogo_uem');
    if (old) historico = JSON.parse(old);
    
    let agora = new Date().toLocaleString();
    historico.push({...jogadores.p1, data: agora});
    historico.push({...jogadores.p2, data: agora});
    
    localStorage.setItem('dados_jogo_uem', JSON.stringify(historico));
}

function baixarDados() {
    let old = localStorage.getItem('dados_jogo_uem');
    if (!old) { alert("Sem dados. Jogue pelo menos uma partida!"); return; }
    
    let csv = "data:text/csv;charset=utf-8,Nome,Cidade,Colegio,WhatsApp,Data\n";
    JSON.parse(old).forEach(d => {
        csv += `${d.nome},${d.cidade},${d.colegio},${d.whats},${d.data}\n`;
    });
    
    let link = document.createElement("a");
    link.href = encodeURI(csv);
    link.download = "participantes.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
