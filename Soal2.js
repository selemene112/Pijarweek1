function Soal2(mtk, bahasaIndo, bahasaInggris, ipa) {
  // Validasi
  // validasi mtk
  if (typeof mtk !== 'number') {
    if (mtk === null || mtk === undefined || mtk === '') {
      console.log('Nilai MTK tidak boleh kosong!');
    } else {
      console.log('Nilai MTK Tidak boleh kosong');
    }
    return;
    // VALIDASI BAHSA INDO
  } else if (typeof bahasaIndo !== 'number') {
    if (bahasaIndo === null || bahasaIndo === undefined || bahasaIndo === '') {
      console.log('Nilai bahasaIndo tidak boleh kosong!');
    } else {
      console.log('Nilai Bahasa Indo Tidak Boleh String');
    }
    return;
    // VALIDASI bahasa INGGRIS
  } else if (typeof bahasaInggris !== 'number') {
    if (bahasaInggris === null || bahasaInggris === undefined || bahasaInggris === '') {
      console.log('Nilai bahasaInggri tidak boleh kosong!');
      return;
    } else {
      console.log('Nilai Bahasa Inggris Tidak Boleh String');
    }
    return;
    // VALIDASI IPA
  } else if (typeof ipa !== 'number') {
    if (ipa === null || ipa === undefined || ipa === '') {
      console.log('Nilai ipa tidak boleh kosong!');
    } else {
      console.log('Nilai Ipa Tidak Boleh String');
    }
    return;
  }
  // END VALIDASI
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // CONTROLLER Penjumlahan
  let rata = (mtk + bahasaIndo + bahasaInggris + ipa) / 4;
  console.log('Rata - Rata = ' + rata);
  let hasil = (mtk + bahasaIndo + bahasaInggris + ipa) / 4;
  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Controller Grade
  if (hasil >= 90) {
    console.log('Grade ' + ' A ');
  } else if (hasil >= 80) {
    console.log('Grade ' + ' B ');
  } else if (hasil >= 70) {
    console.log('Grade ' + ' C ');
  } else if (hasil >= 60) {
    console.log('Grade ' + ' D ');
  } else if (hasil < 60) {
    console.log('Grade ' + ' E ');
  }
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let mtk = 80;
let bahasaIndo = 10;
let bahasaInggris = 100;
let ipa = 'lala';

Soal2(mtk, bahasaIndo, bahasaInggris, ipa);
