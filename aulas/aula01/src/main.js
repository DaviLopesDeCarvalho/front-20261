import './style.css'


const matricula = document.querySelector('#matricula');
const senha = document.querySelector('#senha');
const botao = document.querySelector('button');

botao.addEventListener('click', function(e) {
    const matriculaErro = document.querySelector('#matriculaErro')
    const senhaErro = document.querySelector('#senhaErro')

    matriculaErro.textContent = '';
    senhaErro.textContent = '';


    if (matricula.value == "") {
        matriculaErro.textContent = "Matrícula é obrigatória";
        return
    }

    
})