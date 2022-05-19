var unstoppableSkill = {
    img: "img/icon/1.svg",
    textName: "Unstoppable",
    textCategory: "SURVIVABILITY",
    textGrade: "LEGENDARY SKILL",
    span: "Reduce engine repair time. At last mastery level gain reduced mobility with disabledd engine.",
    titleText: "MASTERY 1/4",
    subtitleText: "Engine repair time",
    titleText2: "UPGRADE ON LEGENDARY RANK 2",
    subtitleNumber: "-2.5%",
    subtitleNumber2: "-5%",
};

var accurateSkill = {
    img: "img/icon/5.svg",
    textName: "Accurate",
    textCategory: "ACCURACY",
    textGrade: "LEGENDARY SKILL",
    span: "Increase canon accuracy. At the last level of skill, the accuracy of the shot are increased.",
    titleText: "MASTERY 1/4",
    subtitleText: "Cannon accuracy",
    titleText2: "UPGRADE ON LEGENDARY RANK 2",
    subtitleNumber: "-4.5%",
    subtitleNumber2: "-9%",
};

var controlledSkill = {
    img: "img/icon/6.svg",
    textName: "Under controll",
    textCategory: "CONTROLLABILITY",
    textGrade: "LEGENDARY SKILL",
    span: "Increase handwheel control. At the last level of mastery, the maneuverability of the ship increased.",
    titleText: "MASTERY 1/4",
    subtitleText: "Handwheel control",
    titleText2: "UPGRADE ON LEGENDARY RANK 2",
    subtitleNumber: "-3.5%",
    subtitleNumber2: "-7%",
};

var skills = new Map();
skills.set("unstopable", unstoppableSkill);
skills.set("accurate", accurateSkill);
skills.set("controlled", controlledSkill);
console.log(skills);

var selectedSkill = unstoppableSkill;

function draw() {
    let section = document.querySelector('#section');

    let container = document.createElement('div');
    container.className = 'container';

    // header 

    let header = document.createElement('div');
    header.className = 'header';
    container.append(header);

    let headerInner = document.createElement('div');
    headerInner.className = 'header__inner';
    header.append(headerInner);

    let headerLogo = document.createElement('div');
    headerLogo.className = 'header__logo';
    headerInner.append(headerLogo);

    let img = document.createElement('img');
    img.src = selectedSkill.img;
    headerLogo.append(img);

    let headerText = document.createElement('div');
    headerText.className = 'header__text';
    headerInner.append(headerText);

    let textName = document.createElement('div');
    textName.className = 'text__name';
    textName.innerHTML = selectedSkill.textName;
    headerText.append(textName);

    let textCategory = document.createElement('div');
    textCategory.className = 'text__category';
    textCategory.innerHTML = selectedSkill.textCategory;
    headerText.append(textCategory);

    let textGrade = document.createElement('div');
    textGrade.className = 'text__grade';
    textGrade.innerHTML = selectedSkill.textGrade;
    headerText.append(textGrade);

    // selected 

    let selected = document.createElement('div');
    selected.className = 'selected';
    container.append(selected);

    let selectedIcon = document.createElement('div');
    selectedIcon.className = 'selected__icon';
    selected.append(selectedIcon);

    let selectedImg = document.createElement('img');
    selectedImg.src = 'img/icon/4.svg';
    selectedIcon.append(selectedImg);

    let selectedText = document.createElement('div');
    selectedText.className = 'selected__text';
    selectedText.innerHTML = 'SELECTED';
    selected.append(selectedText);

    // text 

    let text = document.createElement('div');
    text.className = 'text';
    container.append(text);

    let span = document.createElement('span');
    span.className = '.text span';
    span.innerHTML = selectedSkill.span;
    text.append(span);

    let skillBonuses = document.createElement('div');
    skillBonuses.className = 'skill__bonuses';
    container.append(skillBonuses);

    let skill = document.createElement('div');
    skill.className = 'skill';
    skillBonuses.append(skill);

    let skillTitle = document.createElement('div');
    skillTitle.className = 'skill__title';
    skill.append(skillTitle);

    let titleIcon = document.createElement('div');
    titleIcon.className = 'title__icon';
    skillTitle.append(titleIcon);

    let imgIcon = document.createElement('img');
    imgIcon.src = 'img/icon/2.svg';
    titleIcon.append(imgIcon);

    let titleText = document.createElement('div');
    titleText.className = 'title__text';
    titleText.innerHTML = selectedSkill.titleText;
    skillTitle.append(titleText);

    let skillSuptitle = document.createElement('div');
    skillSuptitle.className = 'skill__suptitle';
    skill.append(skillSuptitle);

    let subtitleText = document.createElement('div');
    subtitleText.className = 'suptitle__text';
    subtitleText.innerHTML = selectedSkill.subtitleText;
    skillSuptitle.append(subtitleText);

    let subtitleNumber = document.createElement('div');
    subtitleNumber.className = 'suptitle__number';
    subtitleNumber.innerHTML = selectedSkill.subtitleNumber;
    skillSuptitle.append(subtitleNumber);

    let skillBac = document.createElement('div');
    skillBac.className = 'skill skill__background';
    skillBonuses.append(skillBac);

    let skillTitle2 = document.createElement('div');
    skillTitle2.className = 'skill__title';
    skillBac.append(skillTitle2);

    let titleIcon2 = document.createElement('div');
    titleIcon2.className = 'title__icon';
    skillTitle2.append(titleIcon2);

    let imgIcon2 = document.createElement('img');
    imgIcon2.src = 'img/icon/3.svg';
    titleIcon2.append(imgIcon2);

    let titleText2 = document.createElement('div');
    titleText2.className = 'title__text';
    titleText2.innerHTML = selectedSkill.titleText2;
    skillTitle2.append(titleText2);

    let skillSuptitle2 = document.createElement('div');
    skillSuptitle2.className = 'skill__suptitle';
    skillBac.append(skillSuptitle2);

    let subtitleText2 = document.createElement('div');
    subtitleText2.className = 'suptitle__text--line';
    subtitleText2.innerHTML = selectedSkill.subtitleText;
    skillSuptitle2.append(subtitleText2);

    let subtitleNumber2 = document.createElement('div');
    subtitleNumber2.className = 'suptitle__number';
    subtitleNumber2.innerHTML = selectedSkill.subtitleNumber2;
    skillSuptitle2.append(subtitleNumber2);

    let button = document.createElement('button');
    button.className = 'button skill__navigation';
    button.dataset.skill = "unstopable";
    container.append(button);

    let buttonImg = document.createElement('img');
    buttonImg.src = 'img/icon/1.svg';
    button.append(buttonImg);

    let button2 = document.createElement('button');
    button2.className = 'button button__accurate skill__navigation';
    button2.dataset.skill = "accurate";
    container.append(button2);

    let buttonImg2 = document.createElement('img');
    buttonImg2.src = 'img/icon/5.svg';
    button2.append(buttonImg2);

    let button3 = document.createElement('button');
    button3.className = 'button button__controlled skill__navigation';
    button3.dataset.skill = "controlled";
    container.append(button3);

    let buttonImg3 = document.createElement('img');
    buttonImg3.src = 'img/icon/6.svg';
    button3.append(buttonImg3);

    section.innerHTML = null;
    section.append(container);

    document.querySelectorAll('.skill__navigation').forEach(function (item) {
        item.addEventListener('click', function (event) {
            let skill = event.currentTarget.dataset.skill;
            console.log("зашли в обработчик");
            selectedSkill = skills.get(skill);
            draw();
        });
    });
}

draw();
