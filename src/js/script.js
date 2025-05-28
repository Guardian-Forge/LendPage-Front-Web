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

  const quizEl = document.getElementById("quiz");
  const nextBtn = document.getElementById("next");

  function loadQuestion() {
    const q = quizData[current];
    quizEl.innerHTML = `
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

    if (selected.value === quizData[current].answer) {
      score++;
    }

    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });

  function showResult() {
    let msg;
    if (score === 10) {
      msg = "Excelente! 🌟 Você é um verdadeiro defensor contra enchentes!";
    } else if (score >= 7) {
      msg = "Muito bom! 👏 Você entende bastante sobre prevenção.";
    } else if (score >= 4) {
      msg = "Você está no caminho! Aprenda mais para ajudar o Pixel.";
    } else {
      msg = "Ops! 🚨 Vamos estudar mais sobre como prevenir enchentes.";
    }

    quizEl.innerHTML = `
      <div class="result">
        Você acertou ${score} de ${quizData.length} perguntas.<br/><br/>
        ${msg}
      </div>
    `;
    nextBtn.style.display = "none";
  }

  loadQuestion();function showResult() {
    let msg;
    if (score === 10) {
      msg = "Excelente! 🌟 Você é um verdadeiro defensor contra enchentes!";
    } else if (score >= 7) {
      msg = "Muito bom! 👏 Você entende bastante sobre prevenção.";
    } else if (score >= 4) {
      msg = "Você está no caminho! Aprenda mais para ajudar o Pixel.";
    } else {
      msg = "Ops! 🚨 Vamos estudar mais sobre como prevenir enchentes.";
    }