function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

const namaPemesan = getQueryParameter("namaPemesan");
const jenisKelamin = getQueryParameter("jenisKelamin");
const nomorIdentitas = getQueryParameter("nomorIdentitas");
const tanggalPesan = getQueryParameter("tanggalPesan");
const durasi = getQueryParameter("durasi");
const diskon = parseFloat(getQueryParameter("diskon"));
const totalHarga = parseFloat(getQueryParameter("totalHarga"));

document.getElementById("notaNamaPemesan").textContent = `Nama Pemesan: ${namaPemesan}`;
document.getElementById("notaJenisKelamin").textContent = `Jenis Kelamin: ${jenisKelamin}`;
document.getElementById("notaNomorIdentitas").textContent = `Nomor Identitas: ${nomorIdentitas}`;
document.getElementById("notaTanggalPesan").textContent = `Tanggal Pesan: ${tanggalPesan}`;
document.getElementById("notaDurasi").textContent = `Durasi Menginap: ${durasi} hari`;
document.getElementById("notaDiskon").textContent = `Diskon: ${diskon.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`;
document.getElementById("notaTotalBayar").textContent = `Total Bayar: ${totalHarga.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}`;