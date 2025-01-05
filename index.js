
let backFrame = document.querySelector('.main');
const themeBtn = document.querySelector('.theme');

themeBtn.addEventListener('click', (e) => {
    themeBtn.classList.toggle('colorfulTheme');
    backFrame.classList.toggle('mainColorfulTheme');
    document.querySelector('header h1').classList.toggle('headerColorfulTheme');
})


function randomGradient() {
    const letters = 'D023C4E591A8BF76';
    let hashCode = '#';
    for (let i = 0; i < 6; i++) {
        hashCode += letters[Math.floor(Math.random() * 16)];
    }
    return hashCode;
}