"use strict";

/**************************/
/* РАЗДЕЛ ПОИСКА В СЕКЦИИ */
/**************************/
var section_button = document.querySelector("#section__button");
var services = ["VK", "YouTube", "Habr", "Tinkoff", "Sber", "VTB24"];
var section_list = document.querySelector(".section__list");
function handlerProperty() {
  var input = document.getElementById("section__text").value;
  section_list.innerHTML = "";
  var sectionFilter = services.filter(function (film) {
    return film.includes(input);
  });
  var contentString = sectionFilter.map(function (item) {
    return "<li class=\"section__item\">".concat(item, "</li>");
  }).join("");
  section_list.innerHTML = contentString;
}
if (section_button) {
  section_button.addEventListener("click", handlerProperty);
}
handlerProperty();

/***********************/
/*ПЕРЕКЛЮЧЕНИЕ КАРТОЧЕК*/
/***********************/
var card__grid = true;
var icon__list_button = document.getElementById('icon__list-button');
var icon__grid_button = document.getElementById('icon__grid-button');
var cards = document.querySelector('.card');
if (icon__list_button) {
  icon__list_button.addEventListener('click', function (e) {
    card__grid = false;
    var card__body = document.querySelectorAll('.card__body');
    var card__content = document.querySelectorAll('.card__content');
    cards.classList.add('card__list');
    icon__list_button.classList.add('special__icon-button--active');
    icon__grid_button.classList.remove('special__icon-button--active');
    card__body.forEach(function (card__body) {
      card__body.classList.add('card__body-list');
    });
    card__content.forEach(function (card__content) {
      card__content.classList.add('card__content-list');
    });
  });
}
if (icon__grid_button) {
  icon__grid_button.addEventListener('click', function (e) {
    card__grid = true;
    var card__body = document.querySelectorAll('.card__body');
    var card__content = document.querySelectorAll('.card__content');
    icon__list_button.classList.remove('special__icon-button--active');
    icon__grid_button.classList.add('special__icon-button--active');
    cards.classList.remove('card__list');
    card__body.forEach(function (card__body) {
      card__body.classList.remove('card__body-list');
    });
    card__content.forEach(function (card__content) {
      card__content.classList.remove('card__content-list');
    });
  });
}

/*******************/
/*ДОБАВЛЕНИЕ СТАТЕЙ*/
/*******************/
var card_add__button = document.getElementById('card-add__button__add');
var card_add__button__cancel = document.getElementById('card-add__button--cancel');
var card_add__button__create = document.getElementById('card-add__button--create');
var card_add__form = document.querySelector('.card-add__form');
var faq_ = document.querySelector('.faq');
if (card_add__button) {
  card_add__button.addEventListener('click', function (e) {
    if (card_add__form) {
      card_add__button.style.display = 'none';
      card_add__form.style.display = 'flex';
      faq_.style.display = 'none';
    }
  });
}
if (card_add__button__cancel) {
  card_add__button__cancel.addEventListener('click', function (e) {
    if (card_add__form) {
      card_add__button.style.display = 'block';
      card_add__form.style.display = 'none';
      faq_.style.display = 'block';
    }
    ;
  });
}
if (card_add__button__create) {
  card_add__form.addEventListener('submit', function (e) {
    var input_title = document.getElementById('card-text-name').value;
    var input_url = document.getElementById('card-text-url').value;
    var input_description = document.getElementById('card-text-description').value;
    var nowDate = new Date();
    var cards = document.querySelector('.card');
    var contentString = "";
    var getDate = nowDate.toLocaleString('en', {
      month: 'long'
    }) + " " + nowDate.getDate() + ", " + nowDate.getFullYear();
    if (card__grid) {
      contentString = "<article class=\"card__body\">\n      <img class=\"card__image\" src=\"".concat(input_url, "\" alt=\"\">\n      <div class=\"card__content\">\n          <div class=\"card__description\">\n              <h3 class=\"card__title\">").concat(input_title, "</h3>\n              <p class=\"card__text\">").concat(input_description, "</p>    \n          </div>\n          <footer>\n              <p class=\"card__date\">").concat(getDate, " \xB7 4 min read</p> \n          </footer>\n      </div>\n      </article>");
    } else {
      contentString = "<article class=\"card__body card__body--list\">\n        <img class=\"card__image\" src=\"".concat(input_url, "\" alt=\"\">\n        <div class=\"card__content card__body-list\">\n            <div class=\"card__description\">\n                <h3 class=\"card__title\">").concat(input_title, "</h3>\n                <p class=\"card__text\">").concat(input_description, "</p>    \n            </div>\n            <footer>\n                <p class=\"card__date\">").concat(getDate, " \xB7 6 min read</p> \n            </footer>\n        </div>\n        </article>");
    }
    cards.insertAdjacentHTML('beforeend', contentString);
  });
}
/**************/
/*ВОПРОС-ОТВЕТ*/
/**************/
var faq = document.querySelectorAll(".faq__question");
var i;
faq.forEach(function (faq__question) {
  faq__question.addEventListener("click", function () {
    this.classList.toggle("active");
    var body = this.nextElementSibling;
    if (body.style.display === "block") {
      body.style.display = "none";
    } else {
      body.style.display = "block";
    }
  });
});