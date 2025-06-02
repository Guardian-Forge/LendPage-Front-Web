// Slideshow home
function iniciarSlideShow() {
  const imagens = [
    'src/assets/banner1.png',
    'src/assets/banner2.png',
    'src/assets/banner3.png'
  ];
  let i = 0;
  const tempo = 3000;
  const hero = document.querySelector('.hero-home');

  function slideShow() {
    if (hero) {
      hero.style.backgroundImage = `url('${imagens[i]}')`;
    }
    i = (i + 1) % imagens.length;
    setTimeout(slideShow, tempo);
  }

  if (hero) slideShow();
}

// Slideshow problemas
const images = [
  '../assets/enchente1.jpg',
  '../assets/enchente2.jpg',
  '../assets/enchente3.jpg'
];

function createSlideShow(containerId, images) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const slideShowDiv = document.createElement('div');
  slideShowDiv.classList.add('slideshow-container');

  images.forEach((src, index) => {
    const slideDiv = document.createElement('div');
    slideDiv.classList.add('slide');
    if (index === 0) slideDiv.style.display = 'block';

    const img = document.createElement('img');
    img.src = src;
    img.alt = `Imagem ${index + 1}`;

    slideDiv.appendChild(img);
    slideShowDiv.appendChild(slideDiv);
  });

  container.appendChild(slideShowDiv);

  let currentIndex = 0;
  const slides = slideShowDiv.getElementsByClassName('slide');

  setInterval(() => {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].style.display = 'block';
  }, 4000);
}

// Inicializa o slideshow
window.onload = () => {
  createSlideShow('slideShowRoot', images);
};

// Menu sanduíche
function iniciarMenuSanduiche() {
  const headerMenu = document.querySelector('.header-menu');
  const sanduiche = document.querySelector('.sanduiche');

  if (headerMenu && sanduiche) {
    function toggleMenu() {
      sanduiche.classList.toggle('active');
      headerMenu.classList.toggle('active');
    }

    sanduiche.addEventListener('click', toggleMenu);
    headerMenu.addEventListener('click', (e) => {
      if (e.target.classList.contains('item-menu')) toggleMenu();
    });
  }
}

// Mudar cor de fundo
const bgButtons = document.querySelectorAll('.header-buttons button');

bgButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-bg');
    document.body.style.backgroundColor = color;
  });
});

// Quiz
function iniciarQuiz() {
  const quizEl = document.getElementById("quiz");
  const nextBtn = document.getElementById("next");
  if (!quizEl || !nextBtn) return;

  const quizData = [
    {
      question: "1. Qual é a principal função do robô Pixel?",
      options: ["Combater incêndios", "Coletar lixo", "Prevenir enchentes", "Monitorar trânsito"],
      answer: "Prevenir enchentes"
    },
    {
      question: "2. O que o robô Pixel monitora para prevenir enchentes?",
      options: ["Temperatura", "Nível da água", "Poluição do ar", "Movimento de carros"],
      answer: "Nível da água"
    },
    {
      question: "3. Qual tipo de sensor é essencial para detectar alagamentos?",
      options: ["Sensor de luz", "Sensor ultrassônico", "Sensor de som", "Sensor de vento"],
      answer: "Sensor ultrassônico"
    },
    {
      question: "4. Como a população pode ajudar Pixel?",
      options: ["Jogando lixo na rua", "Ignorando alertas", "Compartilhando informações", "Desligando sensores"],
      answer: "Compartilhando informações"
    },
    {
      question: "5. O que fazer ao receber alerta de enchente do Pixel?",
      options: ["Ignorar", "Compartilhar com vizinhos", "Ficar parado", "Caminhar até áreas alagadas"],
      answer: "Compartilhar com vizinhos"
    },
    {
      question: "6. Por que é importante evitar lixo nas ruas?",
      options: ["Deixa a cidade mais bonita", "Evita entupimento de bueiros", "Atrai pássaros", "Ajuda o Pixel a voar"],
      answer: "Evita entupimento de bueiros"
    },
    {
      question: "7. Qual tecnologia ajuda o Pixel a andar em áreas alagadas?",
      options: ["Rodas de madeira", "Rastreamento GPS", "Hélices e rodas anfíbias", "Câmera de selfie"],
      answer: "Hélices e rodas anfíbias"
    },
    {
      question: "8. Enchentes são causadas principalmente por:",
      options: ["Sol forte", "Excesso de árvores", "Chuvas intensas e entupimentos", "Sinal de celular fraco"],
      answer: "Chuvas intensas e entupimentos"
    },
    {
      question: "9. O robô Pixel atua em quais locais?",
      options: ["Somente em rios", "Somente em florestas", "Áreas urbanas de risco", "Somente em desertos"],
      answer: "Áreas urbanas de risco"
    },
    {
      question: "10. Qual é o maior benefício do robô Pixel?",
      options: ["Economizar energia", "Prevenir desastres e salvar vidas", "Fazer vídeos para redes sociais", "Cuidar de jardins"],
      answer: "Prevenir desastres e salvar vidas"
    }
  ];

  let current = 0;
  let score = 0;

  function loadQuestion() {
    const q = quizData[current];
    const showHomeLink = current === 0;

    quizEl.innerHTML = `
      ${showHomeLink ? `<a href="../../index.html" class="top-left-home">← Voltar para Home</a>` : ""}
      <div class="question">${q.question}</div>
      <div class="answers">
        ${q.options.map(opt => `
          <label>
            <input type="radio" name="answer" value="${opt}"> ${opt}
          </label>
        `).join("")}
      </div>
    `;
  }

  nextBtn.addEventListener("click", () => {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      alert("Por favor, selecione uma resposta!");
      return;
    }

    if (selected.value === quizData[current].answer) score++;
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    quizEl.innerHTML = `
      <a href="../../index.html" class="top-left-home">← Voltar para Home</a>
      <div class="result">
        Você acertou ${score} de ${quizData.length} perguntas.<br/><br/>
        ${getMessage(score)}
      </div>
    `;
    nextBtn.style.display = "none";
  }

  function getMessage(score) {
    if (score === 10) return "Excelente! 🌟 Você é um verdadeiro defensor contra enchentes!";
    if (score >= 7) return "Muito bom! 👏 Você entende bastante sobre prevenção.";
    if (score >= 4) return "Você está no caminho! Aprenda mais para ajudar o Pixel.";
    return "Ops! 🚨 Vamos estudar mais sobre como prevenir enchentes.";
  }

  nextBtn.style.display = "block";
  loadQuestion();
}

// Inicializações
iniciarSlideShow();
iniciarMenuSanduiche();
iniciarQuiz();

// Gráfico de nível do rio
const ctx = document.getElementById('graficoNivelRio')?.getContext('2d');

if (ctx) {
  const dadosNivelRio = {
    labels: [
      "Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5",
      "Dia 6", "Dia 7", "Dia 8", "Dia 9", "Dia 10"
    ],
    datasets: [
      {
        label: "Nível do Rio (m)",
        data: [0.3, 0.6, 1.1, 1.7, 1.9, 2.1, 2.5, 2.7, 2.3, 1.8],
        fill: true,
        borderColor: "#0077cc",
        backgroundColor: "rgba(0, 119, 204, 0.2)",
        tension: 0.4,
        pointBackgroundColor: "#0077cc",
        pointRadius: 5
      },
      {
        label: "Limite de Risco (2m)",
        data: Array(10).fill(2),
        borderColor: "red",
        borderWidth: 2,
        borderDash: [5, 5],
        pointRadius: 0,
        fill: false
      }
    ]
  };

  const opcoesGrafico = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 3,
        title: {
          display: true,
          text: 'Altura (metros)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Dias'
        }
      }
    },
    plugins: {
      legend: {
        display: true
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.dataset.label}: ${context.parsed.y.toFixed(2)}m`;
          }
        }
      }
    }
  };

  new Chart(ctx, {
    type: 'line',
    data: dadosNivelRio,
    options: opcoesGrafico
  });
}

// Validação do formulário de login
document.getElementById('login-form').addEventListener('submit', function (event) {
  const email = document.getElementById('email');
  const senha = document.getElementById('senha');
  const emailError = document.getElementById('email-error');
  const senhaError = document.getElementById('senha-error');

  let isValid = true;

  // Limpa mensagens anteriores
  emailError.textContent = '';
  senhaError.textContent = '';

  // Validação do email
  if (email.value.trim() === '') {
    emailError.textContent = 'Por favor, informe o seu email.';
    isValid = false;
  }

  // Validação da senha
  if (senha.value.trim() === '') {
    senhaError.textContent = 'Por favor, informe a sua senha.';
    isValid = false;
  }

  // Se houver erro, bloqueia envio
  if (!isValid) {
    event.preventDefault();
  }
});
