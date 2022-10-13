const FIELD_PASSWORD = document.querySelector('#password')
const FIELD_SHOW_PASSWORD = document.querySelector('#show-password')

FIELD_SHOW_PASSWORD.addEventListener('click', (e)=>{
    e.target.checked ? FIELD_PASSWORD.type = 'text' : FIELD_PASSWORD.type = 'password'
})