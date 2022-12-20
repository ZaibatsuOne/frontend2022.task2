
/**************************/
/* РАЗДЕЛ ПОИСКА В СЕКЦИИ */
/**************************/
const section_button = document.querySelector("#section__button");
const services = ["VK","YouTube","Habr","Tinkoff","Sber","VTB24"];
const section_list = document.querySelector(".section__list");
function handlerProperty() {
  let input = document.getElementById("section__text").value;
  section_list.innerHTML = "";
  const sectionFilter = services.filter((film) => film.includes(input));
  const contentString = sectionFilter.map((item) => `<li class="section__item">${item}</li>`).join("");
  section_list.innerHTML = contentString;
}
if (section_button) {
  section_button.addEventListener("click", handlerProperty);
}
handlerProperty();

/***********************/
/*ПЕРЕКЛЮЧЕНИЕ КАРТОЧЕК*/
/***********************/
var card__grid  = true;
const icon__list_button = document.getElementById('icon__list-button');
const icon__grid_button = document.getElementById('icon__grid-button');

const cards = document.querySelector('.card');


if(icon__list_button){
  icon__list_button.addEventListener('click', (e) => {
    card__grid = false;

    let card__body = document.querySelectorAll('.card__body');
    let card__content = document.querySelectorAll('.card__content');
    cards.classList.add('card__list');
    icon__list_button.classList.add('special__icon-button--active');
    icon__grid_button.classList.remove('special__icon-button--active');
    
    card__body.forEach((card__body) => {
      card__body.classList.add('card__body-list');
    });
    
    card__content.forEach((card__content) => {
      card__content.classList.add('card__content-list');
    });
  });
}
if(icon__grid_button){
  icon__grid_button.addEventListener('click',(e) => {
    card__grid = true;
    let card__body = document.querySelectorAll('.card__body');
    let card__content = document.querySelectorAll('.card__content');
    
    icon__list_button.classList.remove('special__icon-button--active');
    icon__grid_button.classList.add('special__icon-button--active');

    cards.classList.remove('card__list');
  
    card__body.forEach((card__body) => {
      card__body.classList.remove('card__body-list');
    });
    
    card__content.forEach((card__content) => {
      card__content.classList.remove('card__content-list');
    });
  });
}

/*******************/
/*ДОБАВЛЕНИЕ СТАТЕЙ*/
/*******************/
const card_add__button = document.getElementById('card-add__button__add'); 
const card_add__button__cancel = document.getElementById('card-add__button--cancel');
const card_add__button__create = document.getElementById('card-add__button--create');
const card_add__form = document.querySelector('.card-add__form');
const faq_ = document.querySelector('.faq');
if(card_add__button){
  card_add__button.addEventListener('click', (e) => {
    if(card_add__form){
      card_add__button.style.display = 'none';
      card_add__form.style.display = 'flex';
    }
  });
}
if(card_add__button__cancel){
  card_add__button__cancel.addEventListener('click',(e)=>{
    if(card_add__form){
      card_add__button.style.display = 'block';
      card_add__form.style.display = 'none';
    };
  });
}
if(card_add__button__create){
  card_add__form.addEventListener('submit',(e)=>{
    let input_title = document.getElementById('card-text-name').value ;
    let input_url = document.getElementById('card-text-url').value ;
    let input_description = document.getElementById('card-text-description').value ;
    let nowDate = new Date();
    const cards = document.querySelector('.card');
    let contentString ="";
    let getDate = nowDate.toLocaleString('en', {month:'long'}) + " " + nowDate.getDate()+ ", " + nowDate.getFullYear();
    if (card__grid){
      contentString = 
      `<article class="card__body">
      <img class="card__image" src="${input_url}" alt="">
      <div class="card__content">
          <div class="card__description">
              <h3 class="card__title">${input_title}</h3>
              <p class="card__text">${input_description}</p>    
          </div>
          <footer>
              <p class="card__date">${getDate} · 4 min read</p> 
          </footer>
      </div>
      </article>`
      }
      else{
        contentString = 
        `<article class="card__body card__body-list">
        <img class="card__image" src="${input_url}" alt="">
        <div class="card__content card__content-list">
            <div class="card__description">
                <h3 class="card__title">${input_title}</h3>
                <p class="card__text">${input_description}</p>    
            </div>
            <footer>
                <p class="card__date">${getDate} · 6 min read</p> 
            </footer>
        </div>
        </article>`
      }
    cards.insertAdjacentHTML('beforeend', contentString);
    e.target.reset(); 
    card_add__button.style.display = 'block';
    card_add__form.style.display = 'none';
    })
}
/**************/
/*ВОПРОС-ОТВЕТ*/
/**************/
const faq = document.querySelectorAll(".faq__question");
var i;
faq.forEach((faq__question) => {
  faq__question.addEventListener("click", function () {

    this.classList.toggle("faq__question--active");

    let body = this.nextElementSibling;
    if (body.style.display === "block") {
        body.style.display = "none";
    } else {
        body.style.display = "block";
    }
});
});
