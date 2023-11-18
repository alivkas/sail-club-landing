let darkThemeButton = document.querySelector('.theme-button-dark');
let lightThemeButton = document.querySelector('.theme-button-light');
let serifFontButton = document.querySelector('.font-button-serif');
let sansSerifFontButton = document.querySelector('.font-button-sans-serif');

darkThemeButton.onclick = function () {
    document.body.classList.add('dark');
    darkThemeButton.classList.add('active');
    lightThemeButton.classList.remove('active');
};

lightThemeButton.onclick = function () {
    document.body.classList.remove('dark');
    lightThemeButton.classList.add('active');
    darkThemeButton.classList.remove('active');
};

serifFontButton.onclick = function () {
    document.body.classList.add('serif');
    sansSerifFontButton.classList.remove('active');
    serifFontButton.classList.add('active');
};

sansSerifFontButton.onclick = function () {
    document.body.classList.remove('serif');
    sansSerifFontButton.classList.add('active');
    serifFontButton.classList.remove('active');
};

let articles = document.querySelectorAll('.blog-article.short');

for (let article of articles) {
    let moreButton = article.querySelector('.more');
    moreButton.onclick = function () {
           article.classList.remove('short');
    }
}

let cards = document.querySelector('.cards');
let cardButtonGrid = document.querySelector('.card-view-button-grid');
let cardButtonList = document.querySelector('.card-view-button-list');

cardButtonGrid.onclick = function () {
    cards.classList.toggle('list');
    this.classList.add('active');
    cardButtonList.classList.remove('active');
};

cardButtonList.onclick = function () {
    cards.classList.toggle('list');
    this.classList.add('active');
    cardButtonGrid.classList.remove('active');
};

let activePhoto = document.querySelector('.active-photo');
let previewList = document.querySelector('.preview-list');
let previews = previewList.querySelectorAll('a');
for (const preview of previews) {
    preview.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = preview.href;
        let currentActivePreview = previewList.querySelector('.active-item');
        currentActivePreview.classList.remove('active-item');
        this.classList.add('active-item');
    };
}

   