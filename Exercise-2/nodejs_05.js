//import library fs 
const fs = require('fs');

// Membaca isi dari namaKelompok.txt
fs.readFile('namaKelompok.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Gagal membaca file.txt', err);
    return;
  }
  console.log('Isi dari namaKelompok.txt:', data);

  // Menulis ke namaKelompok.txt
  const contentToWrite = 'Kami terdiri dari 5 orang saja';
  fs.writeFile('namaKelompok.txt', contentToWrite, 'utf8', (err) => {
    if (err) {
      console.error('Gagal menulis ke namaKelompok.txt', err);
      return;
    }
    console.log('Berhasil menulis ke namaKelompok.txt');

    // Mengganti nama namaKelompok.txt menjadi file-renamed.txt
    fs.rename('namaKelompok.txt', 'iya-iniKami.txt', (err) => {
      if (err) {
        console.error('Gagal mengganti namaKelompok.txt', err);
        return;
      }
      console.log('Berhasil mengganti nama namaKelompok.txt menjadi iya-iniKami.txt');

      // Membaca isi dari DataDiri.json
      fs.readFile('DataDiri.json', 'utf8', (err, jsonData) => {
        if (err) {
          console.error('Gagal membaca DataDiri.json', err);
          return;
        }
        console.log('Isi dari DataDiri.json:', jsonData);

        // Menulis ke DataDiri.json
        const jsonContentToWrite = '{"nama": "kosong"}';
        fs.writeFile('DataDiri.json', jsonContentToWrite, 'utf8', (err) => {
          if (err) {
            console.error('Gagal menulis ke DataDiri.json', err);
            return;
          }
          console.log('Berhasil menulis ke DataDiri.json');

          // Mengganti nama DataDiri.json menjadi file-renamed.json
          fs.rename('DataDiri.json', 'data-tidak-komplit.json', (err) => {
            if (err) {
              console.error('Gagal mengganti nama DataDiri.json', err);
              return;
            }
            console.log('Berhasil mengganti nama DataDiri.json menjadi data-tidak-komplit.json');
          });
        });
      });
    });
  });
});
