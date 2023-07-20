const login_register_functions = {}

login_register_functions.base_url = "http://localhost/password_manager_backend/"

login_register_functions.my_fetch_login =  (page_url, data) => {
    fetch(page_url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status == 'logged in'){
            let new_name = data.first_name
            let new_last_name = data.last_name
            localStorage.setItem('name',new_name)
            localStorage.setItem('lastname', new_last_name)
            window.location.replace('../pages/loggedin.html')
        }
    })
    .catch(error => console.log(error))
}

login_register_functions.my_fetch_register =  (page_url, data) => {
    fetch(page_url, {
        method: 'POST',
        body: data,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status == 'success'){
            let new_username = data.username
            let new_name = data.first_name
            let new_last_name = data.last_name
            localStorage.setItem('reg_username',new_username)
            localStorage.setItem('reg_name',new_name)
            localStorage.setItem('reg_lastname', new_last_name)
            window.location.replace('../pages/registered.html')
        }
    })
    .catch(error => console.log(error))
}

login_register_functions.login = () => {
    const login_username = document.getElementById('input-username')
    const login_password = document.getElementById('input-password')
    const login_form = document.querySelector('.login-form')
    login_form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const sign_in_data = new FormData();
        sign_in_data.append("username", login_username.value);
        sign_in_data.append("password", login_password.value);
        url = login_register_functions.base_url + 'signin.php'
        const res = login_register_functions.my_fetch_login(url, sign_in_data)
    })   
}
login_register_functions.register = () => {
    const first_name = document.getElementById('first_name')
    const last_name = document.getElementById('last_name')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const register_form = document.querySelector('.register-from')
    register_form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const register_data = new FormData();
        register_data.append("username", username.value);
        register_data.append("password", password.value);
        register_data.append("first_name", first_name.value);
        register_data.append("last_name", last_name.value);
        url = login_register_functions.base_url + 'signup.php'
        const res = login_register_functions.my_fetch_register(url, register_data)
    })   
}

