// Slideshow
function iniciarSlideShow() {
  const imagens = [
    'src/assets/banner1.jpg',
    'src/assets/banner2.jpg',
    'src/assets/banner3.jpg'
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

let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // troca a cada 3 segundos
}


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