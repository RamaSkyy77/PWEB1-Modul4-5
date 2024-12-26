function checkLogin() {
    // Mendapatkan nilai dari form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorDiv = document.getElementById('error');
    var successDiv = document.getElementById('success');

    // Kosongkan pesan error atau sukses
    errorDiv.textContent = '';
    successDiv.textContent = '';

    // Mengecek username dan password
    if (username === "admin" && password === "123") {
      // Jika login berhasil
      successDiv.textContent = "Login Sukses! Anda akan diarahkan ke halaman utama.";
      
      // Untuk mengarahkan ke halaman lain setelah beberapa detik
      setTimeout(function() {
        window.location.href = "halaman.html"; // Anda bisa mengarahkan pengguna ke halaman lain
      })// Tunggu 2 detik sebelum mengarahkan

      return false; // Mencegah form untuk mengirim
    } else {
      // Jika login gagal
      errorDiv.textContent = "Login Gagal! Username atau Password salah.";
      
      return false; // Mencegah form untuk mengirim
    }
  }