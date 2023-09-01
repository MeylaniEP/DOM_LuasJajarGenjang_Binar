// Menerapkan DOM
const alasInput = document.getElementById('alas'); //Memanggil id dari alas
const tinggiInput = document.getElementById('tinggi'); //Memanggil id dari tinggi
const sisiMiringInput = document.getElementById('sisiMiring'); //Memanggil id dari Sisi Miring
const hitungButton = document.getElementById('hitung'); //Memanggil id dari button
const luasSpan = document.getElementById('luas'); //Memanggil id dari hasil hitungan luas
const kelilingSpan = document.getElementById('keliling'); //Memanggil id dari hasil hitungan keliling

//Rumus dari luas dan keliling jajar genjang
const hitunganLuas = (alas, tinggi) => alas * tinggi; //menggunakan arrow function mempersingkat sintak fungsi
const hitungKeliling = (alas, sisiMiring) => 2 * (alas + sisiMiring);

//Saat button di click apa yang terjadi
hitungButton.addEventListener('click', () => {
  const alasValue = parseFloat(alasInput.value);
  const tinggiValue = parseFloat(tinggiInput.value);
  const sisiMiringValue = parseFloat(sisiMiringInput.value);

  if (!isNaN(alasValue) && !isNaN(tinggiValue)) {
    const luasJajarGenjang = hitunganLuas(alasValue, tinggiValue);
    const kelilingJajarGenjang = hitungKeliling(alasValue, sisiMiringValue);
    
    luasSpan.textContent = luasJajarGenjang;
    kelilingSpan.textContent = kelilingJajarGenjang;
  }else {
    luasSpan.textContent = 'lengkapi dulu ya';
    kelilingSpan.textContent = 'upss... inputkan yang lengkap dan sesuai ya';
  }
});