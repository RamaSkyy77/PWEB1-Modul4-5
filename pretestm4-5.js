document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah reload halaman
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const message = document.getElementById('message');

    if (!username || !password) {
        message.textContent = "Input tidak boleh kosong!";
    } else if (username === "admin" && password === "1234") {
        message.textContent = "Login berhasil!";
    } else {
        message.textContent = "Username atau Password salah!";
    }
});
