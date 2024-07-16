const text = "Jordan Gaillet.";
let index = 0;
const textTypeWriter = document.getElementById('typewriter');

function type(){
    if (index < text.length) {
        textTypeWriter.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    type();
});

document.querySelectorAll('.skills-card').forEach(card => {
    card.addEventListener('click', () => {
        const content = card.querySelector('.skill-content');
        const icon = card.querySelector('i');

        if (content.style.height === '0px' || content.style.height === '') {
            content.style.height = content.scrollHeight + 'px';
            icon.classList.remove('reverse');
            icon.classList.add('rotate');
        } else {
            content.style.height = '0px';
            icon.classList.remove('rotate');
            icon.classList.add('reverse');
        }
    });
});

