// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Seleciona todos os elementos com a classe 'dropdown-toggle'
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    // Adiciona um evento de clique a cada dropdown
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function (e) {
            e.preventDefault(); // Impede o comportamento padrão do link

            // Seleciona o dropdown pai do link clicado
            const dropdown = this.closest('.dropdown');

            // Fecha todos os outros dropdowns abertos
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    const otherDropdown = otherToggle.closest('.dropdown');
                    otherDropdown.classList.remove('active');
                }
            });

            // Alterna a classe 'active' no dropdown clicado
            dropdown.classList.toggle('active');
        });
    });

    // Fecha o dropdown ao clicar fora dele
    document.addEventListener('click', function (e) {
        if (!e.target.closest('.dropdown')) {
            dropdownToggles.forEach(toggle => {
                const dropdown = toggle.closest('.dropdown');
                dropdown.classList.remove('active');
            });
        }
    });
});

function mostrarMensagem(){
    alert("Este site é acessível para pessoas com daltônismo.");
}

document.getElementById('searchButton').addEventListener('click', function() {
    const query = document.getElementById('courseSearch').value.toLowerCase();
    const courses = document.querySelectorAll('.course-square');
    courses.forEach(course => {
        const title = course.querySelector('h2').textContent.toLowerCase();
        if (title.includes(query)) {
            course.style.display = 'block'; 
        } else {
            course.style.display = 'none'; 
        }
    });
});
