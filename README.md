# you-really-need-this

> Project **"Оно тебе надо"** is a fully responsive, semantic HTML/CSS-only layout.  
> JavaScript is used solely to dynamically load the appropriate manifest based on the user's color scheme preferences (light/dark) to enhance UX.

**🔗 [Live Demo on GitHub Pages](https://frogush.github.io/you-really-need-this/)**  
**🎨 [Design in Figma](https://www.figma.com/design/465553XW5eo3l3lM2JAgDo/HTML-CSS-1?node-id=0-1&t=Vq8RAHJkkCHsz1Me-1)**

## Preview

![Project Preview](./Images/preview.png)

---

## 🇬🇧 English Version

Scroll down for the Russian version of the project description — ⬇️

### 🎯 Project Description

This project is a pixel-perfect, responsive auction layout named **"You Really Need This"**, featuring adaptive content and semantic HTML5 structure.  
All layouts are implemented using only **HTML** and **CSS**, with minimal JavaScript for manifest switching.

It supports:
- Adaptive image loading (`image-set`) for different formats (AVIF/WebP/JPEG) and screen types (mobile/desktop).
- The layout combines adaptive and fluid responsiveness: On different device types (desktop vs. mobile), the site uses adaptive layout techniques — elements may change position, be resized, or hidden depending on screen type. Within a single device type (e.g., desktop or mobile), it uses a fluid responsive layout — elements automatically adjust to the screen width without changing the overall structure.
- A **dark theme** for favicon and manifest — adapting to the user’s system preference.

---

### ✅ What Was Done

#### 🧱 General Setup
- Fonts and global stylesheets (`fonts.css`, `global.css`, `style.css`) connected.
- Semantic HTML5 tags used throughout: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, etc.
- Manifest and favicons adapt to dark/light mode using `media="(prefers-color-scheme: ...)"`.

#### 🧭 Header
- Logo centered with Grid.
- Custom horizontal navigation with alternating markers.
- Contact block (`tel`, `mailto`) with semantic layout.

#### 🖼 Jumbotron
- Background image with overlay (`z-index` layered).
- Title styled with `letter-spacing`, controlled via nested `<span>`.
- Subtitle and button aligned using Flexbox.

#### 🎴 Lots Section
- CSS Flex layout with responsive wrapping of cards.
- Semantic card components using `<article>`, `<h3>`, and `<p>`.
- Hover overlay and descriptions included.

#### 📚 About Section
- Two-column layout: logo on the left, text content on the right.
- Description includes two paragraphs aligned and spaced properly.

#### 📮 Footer
- Contact info reused via semantic tags.
- Navigation list and social media icons via SVG sprite (`<use>`).
- ARIA labels for accessibility.

---

### 🧪 Highlighted Features

- ✅ Semantic HTML5 markup.
- ✅ CSS Grid & Flexbox layout system.
- ✅ Global styling via external CSS files.
- ✅ Responsive design with flexible wrapping and element alignment.
- ✅ Adaptive image loading (`image-set`, `srcset`).
- ✅ Layering with `z-index` for overlays and background elements.
- ✅ Font styling: `letter-spacing`, `word-spacing`.
- ✅ Theme-aware favicons and manifest (`prefers-color-scheme`).
- ✅ Pixel Perfect layout — **98%+ match** with the design.

---

### 🚀 How to Launch

1. **Setup**:
   - Make sure you have the following files and folders:
     - `/Fonts/fonts.css`
     - `/Styles/global.css`, `/Styles/style.css`
     - `/Images/` — includes all icons and backgrounds
     - `/JS/load-manifest.js`

2. **Run**:
   - Open `index.html` in your browser.
   - The page will automatically adapt to the user's system theme and screen size.

---

### 🛠 Technologies Used

- **HTML5**
- **CSS3** (Grid, Flexbox)
- **JavaScript (optional, for manifest loading only)**
- **Responsive & adaptive layout techniques**
- **Semantic markup**

---

## 🇷🇺 Русская версия

### 🎯 Описание проекта

Проект **«Оно тебе надо»** — это адаптивный, пиксель-точный макет аукционного сайта, выполненный **только на HTML и CSS**.  
JavaScript используется исключительно для подключения соответствующего манифеста в зависимости от системной темы пользователя (светлая/тёмная).

Особенности:
- Адаптивная загрузка изображений (`image-set`) для разных форматов (AVIF/WebP/JPEG) и устройств (десктоп/мобильные).
- Вёрстка сочетает адаптивный и отзывчивый (fluid) подходы: При смене типа устройства (десктоп ↔ мобильное) используется адаптивная вёрстка — элементы могут менять расположение, масштабироваться или скрываться. В пределах одного устройства (например, только десктопа) применяется отзывчивая (fluid) вёрстка — элементы автоматически подстраиваются под ширину экрана, не меняя структуру.
- Тёмная тема реализована для фавиконок и манифеста через `prefers-color-scheme`.

---

### ✅ Что сделано

#### 🧱 Общая структура
- Подключены шрифты и глобальные стили.
- Используются семантические теги: `<header>`, `<main>`, `<section>`, `<footer>`, `<article>`, `<address>`.
- Манифест и фавиконки подгружаются в зависимости от темы пользователя.

#### 🧭 Шапка
- Логотип по центру (Grid).
- Кастомное меню с чередованием маркеров.
- Контакты с использованием `tel:` и `mailto:`.

#### 🖼 Jumbotron
- Фоновое изображение с затемнением.
- Заголовок оформлен через `letter-spacing` и вложенные `<span>`.
- Подзаголовок и кнопка выровнены по центру.

#### 🎴 Секция лотов
- Карточки выстроены через CSS Flex.
- Каждая карточка — семантический `<article>`.
- Есть оверлей, описание и адаптивное поведение.

#### 📚 О секции
- Логотип слева, текст справа.
- Два параграфа с описанием идеи аукциона.

#### 📮 Подвал
- Повторный блок контактов.
- Меню и соцсети в формате SVG-спрайтов.
- Используются `aria-label` для доступности.

---

### 🧪 Ключевые особенности

- ✅ Семантическая вёрстка HTML5.
- ✅ Раскладка через Grid и Flexbox.
- ✅ Глобальные стили в отдельных CSS-файлах.
- ✅ Респонсив + адаптивная вёрстка.
- ✅ Адаптивная загрузка изображений (`image-set`).
- ✅ Слои через `z-index`.
- ✅ Настройка шрифтов (межбуквенное расстояние и пр.).
- ✅ Адаптация манифеста и фавиконок под системную тему.
- ✅ Pixel Perfect — **98%+ соответствие макету**.

---

### 🚀 Как запустить

1. **Подготовка**:
   - Убедитесь, что в проекте есть:
     - `/Fonts/fonts.css`
     - `/Styles/global.css`, `/Styles/style.css`
     - `/Images/` — фавиконки, логотипы, фоны, спрайты
     - `/JS/load-manifest.js`

2. **Запуск**:
   - Откройте `index.html` в браузере.
   - Страница подстроится под тему и размер экрана автоматически.

---

### 🛠 Используемые технологии

- **HTML5**
- **CSS3** (Flexbox, Grid)
- **JavaScript** (только для загрузки манифеста)
- **Адаптивная и резиновая вёрстка**
- **Семантический подход**

---
