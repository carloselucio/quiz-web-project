const quiz1 = [
    {
        question: "¿Cuál fue el primer lenguaje de programación universal que tuvo un gran éxito?",
        a: "C",
        b: "Fortran",
        c: "Python",
        d: "Pascal",
        correct: "b"
    }, {
        question: "En términos de programación orientada a objetos, ¿qué es la herencia?",
        a: "Mecanismo de POO utilizado con los objetivos de alcanzar la reutilización y extensibilidad",
        b: "Propiedad por la que es posible enviar mensajes sintácticamente iguales a objetos de tipos distintos",
        c: "Plantilla que define de manera genérica cómo van a ser los objetos de determinado tipo",
        d: "Característica que permite que todo lo referente a un objeto quede aislado dentro de éste",
        correct: "a"
    }, {
        question: "Entre los siguientes lenguajes de programación, ¿cuál es el menos utilizado en el mundo?",
        a: "Java",
        b: "Python",
        c: "Ruby",
        d: "C++",
        correct: "c"
    }, {
        question: "Los siguientes son frameworks que pueden ser utilizados para desarrollar Single Page Applications, excepto:",
        a: "EmberJS",
        b: "React Native",
        c: "Vue.js",
        d: "AngularJS",
        correct: "b"
    }
];

const quiz2 = [
    {
        question: "¿Cuántos jugadores por equipo participan en un partido de voleibol?",
        a: "4",
        b: "5",
        c: "6",
        d: "7",
        correct: "c"
    }, {
        question: "¿Qué equipo ha ganado más Champions League en la historia?",
        a: "Ajax",
        b: "Chelsea",
        c: "Milan",
        d: "Real Madrid",
        correct: "d"
    }, {
        question: "¿Quién ganó cuatro mundiales consecutivos de Fórmula 1?",
        a: "Lewis Hamilton",
        b: "Sebastián Vettel",
        c: "Sergio Pérez",
        d: "Alberto Ascari",
        correct: "b"
    }, {
        question: "¿Cuántos anillos de la NBA ha conseguido Shaquille O’Neal?",
        a: "3",
        b: "4",
        c: "5",
        d: "6",
        correct: "b"
    }
];

const quiz3 = [
    {
        question: "¿Cuál es el libro más vendido en el mundo después de la Biblia?",
        a: "El Señor de los Anillos",
        b: "El Principito",
        c: "La Odisea",
        d: "Don Quijote de la Mancha",
        correct: "d"
    }, {
        question: "¿Cuáles son los representantes más destacados de la literatura renacentista?",
        a: "Miguel de Cervantes, William Shakespeare",
        b: "Leonardo da Vinci, Miguel Angel Buonarroti",
        c: "Jorge Isaac, José Martí",
        d: "Caravaggio, Victor Hugo",
        correct: "a"
    }, {
        question: "¿Quién pintó la obra 'Guernica'?",
        a: "Pablo Picasso",
        b: "Diego Rivera",
        c: "Frida Kahlo",
        d: "Salvador Dalí",
        correct: "a"
    }, {
        question: "¿Quién es el autor de 'El Príncipe'?",
        a: "Charles de Gales",
        b: "Friedrich Nietzche",
        c: "Nicolás Maquiavelo",
        d: "Antoine de Saint-Exupery",
        correct: "c"
    }
];

let currentQuiz;
const quiz = document.getElementById("quiz");
const quiz1Btn = document.getElementById("quiz1");
const quiz2Btn = document.getElementById("quiz2");
const quiz3Btn = document.getElementById("quiz3");

let currentQuestion = 0;
let score = 0;

function loadQuiz() {

    const currentQuestionData = currentQuiz[currentQuestion];
    const answerEls = document.querySelectorAll(".answer");
    const questionEl = document.getElementById("question");
    const a_text = document.getElementById("a_text");
    const b_text = document.getElementById("b_text");
    const c_text = document.getElementById("c_text");
    const d_text = document.getElementById("d_text");
    const submitBtn = document.getElementById("submit");

    submitBtn.addEventListener("click", () => {
        // check to see the answer
        let answer = undefined;

        answerEls.forEach((answerEl) => {
            if (answerEl.checked) {
                answer = answerEl.id;
            }
        });
    
        if (answer) {
            if (answer === currentQuiz[currentQuestion].correct) {
                score++;
            }
    
            currentQuestion++;
            if (currentQuestion < currentQuiz.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `
                    <div class="quiz-header">
                        <h2>Contestaste correctamente ${score}/${currentQuiz.length} preguntas.</h2>
                    </div>
                `;
            }
        }
    });

    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });

    questionEl.innerText = currentQuestionData.question;
    a_text.innerText = currentQuestionData.a;
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function startQuiz() {
    quiz.innerHTML = `
    <div class="quiz-header">
        <h2 id="question">Question</h2>
        <ul class="options">
            <li>
                <input id="a" type="radio" name="answer" class="answer">
                <label id="a_text" for="a">Option</label>
            </li>
            <li>
                <input id="b" type="radio" name="answer" class="answer">
                <label id="b_text" for="b">Option</label>
            </li>
            <li>
                <input id="c" type="radio" name="answer" class="answer">
                <label id="c_text" for="c">Option</label>
            </li>
            <li>
                <input id="d" type="radio" name="answer" class="answer">
                <label id="d_text" for="d">Option</label>
            </li>
        </ul>
    </div>
    <button id="submit" class="quiz-button">Siguiente</button>
    `
    loadQuiz();
}

quiz1Btn.addEventListener("click", () => {
    currentQuiz = quiz1;
    currentQuestion = 0;
    score = 0;
    startQuiz();
});

quiz2Btn.addEventListener("click", () => {
    currentQuiz = quiz2;
    currentQuestion = 0;
    score = 0;
    startQuiz();
});

quiz3Btn.addEventListener("click", () => {
    currentQuiz = quiz3;
    currentQuestion = 0;
    score = 0;
    startQuiz();
});