var currentURL = window.location.pathname;
    if (!currentURL.includes('/Login/') && localStorage.getItem('password') !== 'AZUL') {
        window.location.href = '/Cumpleanos/Login/index.html';
        document.getElementById('content').style.display = 'block';
    }
    if (currentURL.includes('/Login/') && localStorage.getItem('password') === 'AZUL') {
        window.location.href = '../index.html';
        document.getElementById('content').style.display = 'block';
    }
function login() {
    var password = document.getElementById('password').value;

    // Verificar si la contraseña ingresada es "AZUL"
    if (password === 'AZUL') {
        // Guardar la contraseña en la caché de la página
        localStorage.setItem('password', password);
        location.reload();
    } else {
        alert('Contraseña incorrecta');
    }
}

function clearCache() {
    localStorage.removeItem('password');
    location.reload();
}
