function simpanPemesanan() {
    const namaPemesan = document.getElementById("namaPemesan").value;
    const jenisKelamin = document.getElementById("jenisKelamin").value;
    const nomorIdentitas = document.getElementById("nomorIdentitas").value;
    const hargaManual = parseInt(document.getElementById("harga").value, 10);
    const durasi = parseInt(document.getElementById("durasiMenginap").value, 10);
    const breakfast = document.getElementById("breakfast").checked;
    const tanggalPesan = document.getElementById("tanggalPesan").value;
    if (nomorIdentitas.length !== 16 || isNaN(nomorIdentitas)) {
      alert("Isian salah, nomor identitas harus 16 digit!");
      return;
    }
    if (!durasi || durasi <= 0 || isNaN(durasi)) {
      alert("Durasi menginap harus diisi dengan angka yang valid!");
      return;
    }
  
    let totalHarga = hargaManual * durasi;
    let diskon = 0;
    if (durasi > 3) {
      diskon = totalHarga * 0.1; 
      totalHarga *= 0.9; 
    }
  
    if (breakfast) {
      totalHarga += 80000 * durasi;
    }
    const queryString = `?namaPemesan=${encodeURIComponent(namaPemesan)}&jenisKelamin=${encodeURIComponent(jenisKelamin)}&nomorIdentitas=$
    {encodeURIComponent(nomorIdentitas)}&tanggalPesan=${encodeURIComponent(tanggalPesan)}
    &durasi=${durasi}&diskon=${diskon}&totalHarga=${totalHarga}`;
    
    window.location.href = "nota.html" + queryString;
  }
  