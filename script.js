// document.querySelector(".start").addEventListener("click", () => {
//     document.querySelector(".header").style.marginTop = "10px";
// })

const surveyQuestions = [
    {
      label: 'Как часто',
      question: 'вы задумываетесь о своих жизненных целях и мечтах?',
      variants: ['Редко или никогда', 'Иногда', 'Регулярно']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены своим уровнем самосознания и самопонимания?',
      variants: ['Не очень удовлетворена', 'Частично удовлетворена', 'Полностью удовлетворена']
    },
    {
      label: 'Как часто',
      question: 'вы учитесь новому или развиваете новые навыки?',
      variants: ['Очень редко', 'Иногда', 'Регулярно']
    },
    {
      label: 'Насколько',
      question: 'вы открыты для изменения и новых идей?',
      variants: ['Скептически отношусь к изменениям', 'Иногда открыта для нового', 'Всегда ищу новые возможности и идеи']
    },
    {
      label: 'Как часто',
      question: 'вы испытываете стресс и перегрузки?', 
      variants: ['Часто', 'Иногда', 'Редко']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свою способность преодолевать трудности?', 
      variants: ['С трудом справляюсь', 'Иногда успешно справляюсь', 'Легко справляюсь']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены своей способностью принимать решения?', 
      variants: ['Неудовлетворена', 'Удовлетворена частично', 'Полностью удовлетворена']
    },
    {
      label: 'Как часто',
      question: 'вы занимаетесь саморефлексией?', 
      variants: ['Редко', 'Иногда', 'Регулярно']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свою способность устанавливать и достигать целей?', 
      variants: ['Имею трудности с этим', 'Иногда это удается', 'Регулярно достигаю своих целей']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены своей способностью управлять временем?', 
      variants: ['Не удовлетворена', 'Удовлетворена частично', 'Полностью удовлетворена']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свое текущее профессиональное положение?', 
      variants: ['Не удовлетворена', 'Удовлетворена частично', 'Полностью удовлетворена']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены своими финансовыми доходами и перспективами?', 
      variants: ['Не удовлетворена', 'Частично удовлетворена', 'Полностью удовлетворена']
    },
    {
      label: 'Как часто',
      question: 'вы обдумываете свою карьерную стратегию и планы на будущее?', 
      variants: ['Редко или никогда', 'Иногда', 'Регулярно']
    },
    {
      label: 'Как вы',
      question: 'оцениваете свои навыки по управлению финансами?', 
      variants: ['Неудовлетворительно', 'Удовлетворительно', 'Отлично']
    },
    {
      label: 'Как часто',
      question: 'вы ищете новые возможности для карьерного роста?', 
      variants: ['Редко', 'Иногда', 'Часто']
    },
    {
      label: 'Насколько',
      question: 'важно для вас продвижение по карьерной лестнице?', 
      variants: ['Не очень важно', 'Довольно важно', 'Очень важно']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свои профессиональные навыки и знания?', 
      variants: ['Нуждаются в улучшении', 'Хорошие, но можно развивать', 'Отличные, на высоком уровне']
    },
    {
      label: 'Как часто',
      question: 'вы принимаете участие в профессиональном обучении или курсах повышения квалификации?', 
      variants: ['Очень редко', 'Иногда', 'Регулярно']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свою способность к сетевому взаимодействию (networking)?', 
      variants: ['Неудовлетворительно', 'Удовлетворительно', 'Отлично']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены балансом между работой и личной жизнью?', 
      variants: ['Не удовлетворена', 'Частично удовлетворена', 'Полностью удовлетворена']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свое физическое здоровье?', 
      variants: ['Неудовлетворительно', 'Удовлетворительно', 'Отлично']
    },
    {
      label: 'Как часто',
      question: 'вы занимаетесь физической активностью?', 
      variants: ['Редко или никогда', 'Несколько раз в неделю', 'Ежедневно']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свой рацион питания?', 
      variants: ['Нездоровый', 'Средне здоровый', 'Очень здоровый']
    },
    {
      label: 'Как часто',
      question: 'вы посещаете врача для профилактических осмотров?', 
      variants: ['Очень редко или никогда', 'Раз в год', 'Чаще, чем раз в год']
    },
    {
      label: 'Как',
      question: 'вы оцениваете качество своего сна?', 
      variants: ['Плохое', 'Удовлетворительное', 'Отличное']
    },
    {
      label: 'Как часто',
      question: 'вы испытываете стресс?', 
      variants: ['Очень часто', 'Иногда', 'Редко']
    },
    {
      label: 'Как',
      question: 'вы справляетесь со стрессом?', 
      variants: ['Имею проблемы с управлением стрессом', 'Иногда успешно справляюсь', 'Эффективно управляю стрессом']
    },
    {
      label: 'Как часто',
      question: 'вы употребляете алкоголь или табак?', 
      variants: ['Регулярно', 'Иногда', 'Никогда']
    },
    {
      label: 'Насколько',
      question: 'важно для вас поддерживать здоровый образ жизни?', 
      variants: ['Не очень важно', 'Довольно важно', 'Очень важно']
    },
    {
      label: 'Как часто',
      question: 'вы занимаетесь деятельностью, способствующей релаксации и восстановлению (медитация, йога, чтение и т.д.)?',
      variants: ['Редко или никогда', 'Иногда', 'Регулярно']
    },
    {
      label: 'Как',
      question: 'вы оцениваете качество ваших близких отношений?', 
      variants: ['Неудовлетворительно', 'Удовлетворительно', 'Отлично']
    },
    {
      label: 'Как часто',
      question: 'вы проводите время с семьей?', 
      variants: ['Редко', 'Иногда', 'Часто']
    },
    {
      label: 'Насколько',
      question: 'важно для вас наличие эмоциональной поддержки от близких?',
      variants: ['Не очень важно', 'Важно', 'Очень важно']
    },
    {
      label: 'Как часто',
      question: 'вы испытываете конфликты в близких отношениях?', 
      variants: ['Часто', 'Иногда', 'Редко']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свою способность к решению конфликтов?',
      variants: ['Неудовлетворительно', 'Удовлетворительно', 'Отлично']
    },
    {
      label: 'Как часто',
      question: 'вы знакомитесь с новыми людьми и образуете новые отношения?',
      variants: ['Редко', 'Иногда', 'Часто']
    },
    {
      label: 'Насколько',
      question: 'вы открыты к новым знакомствам и дружбе?', 
      variants: ['Не очень открыта', 'Довольно открыта', 'Очень открыта']
    },
    {
      label: 'Как',
      question: 'вы оцениваете свои навыки общения?', 
      variants: ['Нуждаются в улучшении', 'Хорошие', 'Отличные']
    },
    {
      label: 'Насколько',
      question: 'вы удовлетворены уровнем доверия и взаимопонимания в Ваших личных отношениях?',
      variants: ['Не удовлетворена', 'Частично удовлетворена', 'Полностью удовлетворена']
    },
    {
      label: 'Как часто',
      question: 'вы обсуждаете важные для вас вопросы с семьей и друзьями?',
      variants: ['Редко', 'Иногда', 'Регулярно']
    }
];
let answers = [];

setQuestion(0);
const arrow = document.querySelector(".next");
arrow.addEventListener("click", () => {
    arrow.src = "images/disabled-arrow-right.svg";
})

let counter = 0;
function setCounter() {
    if (counter >= 39) {
        return;
    }
    counter++;
    setQuestion(counter);
    document.querySelector(".counter").innerHTML = `${counter + 1}/40`;
}
function setQuestion(index) {
    const question = surveyQuestions[index];

    document.querySelector(".question-wrapper").innerHTML = `
    <div class="questions">
                <p class="label">${question.label}</p>
                <p class="question">${question.question}</p>
            </div>
            <div class="variants">
                <button>${question.variants[0]}</button>
                <button>${question.variants[1]}</button>
                <button>${question.variants[2]}</button>
            </div>`;
    
    parseButtons();
}
function parseButtons() {
    const buttons = document.querySelectorAll(".variants button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            buttons.forEach(disable => {
                disable.classList.remove("active");
            })
            e.target.classList.add("active");
            arrow.src = "images/arrow-right.svg";
        })
    })
}
function checkValid() {
    document.querySelectorAll(".variants button").forEach(button => {
        if (button.classList.contains("active")) {
            answers.push({
                question: document.querySelector(".questions .label").innerHTML + document.querySelector(".questions .question").innerHTML,
                answer: button.innerHTML,
            })
            setCounter();
        }
    })
}