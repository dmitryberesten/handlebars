// Імпортуємо бібліотеку Handlebars для рендерингу шаблонів
import Handlebars from 'handlebars';

// Імпортуємо масив продуктів з іншого файлу
import { products } from './products.js';

// Створюємо шаблон HTML для кожної картки товару. У шаблоні використовуємо змінні Handlebars
// для вставки даних про товар (зображення, назва, опис, ціна та артикул).
const templateSource = `
  <div class="product-card">
    <img src="{{image}}" alt="{{title}}" class="product-image">
    <h2 class="product-title">{{title}}</h2>
    <p class="product-description">{{description}}</p>
    <p class="product-price">{{price}} грн</p>
    <p class="product-sku">Артикул: {{sku}}</p>
  </div>
`;

// Компілюємо шаблон Handlebars у функцію, яку можна викликати з даними.
// Handlebars.compile перетворює рядок HTML-шаблону на функцію, що приймає об'єкт з даними і генерує HTML.
const template = Handlebars.compile(templateSource);

// Отримуємо елемент на сторінці, у який будуть вставлені згенеровані картки товарів.
// У цьому випадку ми шукаємо елемент з id="app".
const appDiv = document.getElementById('app');

// Проходимо по кожному продукту з масиву products
products.forEach(product => {
  // Рендеримо HTML для кожного продукту, використовуючи шаблон Handlebars.
  // Функція template приймає об'єкт product і вставляє його дані у відповідні змінні в шаблоні.
  const productHTML = template(product);

  // Додаємо згенерований HTML кожного продукту до внутрішнього вмісту елемента appDiv.
  // Використовуємо "+=" для додавання нових карток до вже існуючих у контейнері, щоб всі продукти
  // відображалися на сторінці.
  appDiv.innerHTML += productHTML;
});
