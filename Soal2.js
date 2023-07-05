function Soal2(mtk, bahasaIndo, bahasaInggris, ipa) {
  if (mtk === null || mtk === undefined || mtk === '') {
    console.log('Nilai MTK tidak boleh kosong!');
    return;
  }

  if (bahasaIndo === null || bahasaIndo === undefined || bahasaIndo === '') {
    console.log('Nilai bahasaIndo tidak boleh kosong!');
    return;
  }

  if (bahasaInggris === null || bahasaInggris === undefined || bahasaInggris === '') {
    console.log('Nilai bahasaInggri tidak boleh kosong!');
    return;
  }

  if (ipa === null || ipa === undefined || ipa === '') {
    console.log('Nilai ipa tidak boleh kosong!');
    return;
  }
  let rata = (mtk + bahasaIndo + bahasaInggris + ipa) / 4;
  console.log('Rata - Rata = ' + rata);
  let hasil = (mtk + bahasaIndo + bahasaInggris + ipa) / 4;

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

let mtk = 85;
let bahasaIndo = 80;
let bahasaInggris = 100;
let ipa = 90;

Soal2(mtk, bahasaIndo, bahasaInggris, ipa);
