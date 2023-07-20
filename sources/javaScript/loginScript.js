const login_username = document.getElementById('input-username')
const login_password = document.getElementById('input-password')
const submit_btn = document.getElementById('submit-btn')
const login_form = document.querySelector('.login-form')

login_form.addEventListener('submit', event =>{
    event.preventDefault()
    const sign_in_data = new FormData();
    sign_in_data.append("username", login_username.value);
    sign_in_data.append("password", login_password.value);

    fetch("http://localhost/password_manager_backend/signin.php", {
        method: 'POST',
        body: sign_in_data,
        redirect: 'follow'
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
})

