const toggllebutton = document.querySelector('.button') as HTMLButtonElement;
const Skills = document.querySelector('.skills') as HTMLElement;

toggllebutton.addEventListener('click', () => {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    } else {
        Skills.style.display = 'none';
    }
});