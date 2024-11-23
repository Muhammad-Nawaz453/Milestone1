var toggllebutton = document.querySelector('.button');
var Skills = document.querySelector('.skills');
toggllebutton.addEventListener('click', function () {
    if (Skills.style.display === 'none') {
        Skills.style.display = 'block';
    }
    else {
        Skills.style.display = 'none';
    }
});
