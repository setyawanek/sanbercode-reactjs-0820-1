//soal 1

var kataPertama = "saya"
var kataKedua = "senang"
var kataKetiga = "belajar"
var kataKeempat = "javascript"


var gabungan = kataPertama +" "+ kataKedua+ " " + kataKetiga +" "+ kataKeempat.toLocaleUpperCase();

console.log(gabungan)

//soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var number1 = Number(kataPertama)
var number2 = Number(kataKedua)
var number3 = Number(kataKetiga)
var number4 = Number(kataKeempat)

var penjumlahan = number1+number2+number3+number4

console.log(penjumlahan) // 12

//soal 3 
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); //javascript
var kataKetiga = kalimat.substring(15, 18); //itu
var kataKeempat= kalimat.substring(19, 24); //keren
var kataKelima = kalimat.substring(25, 31); //sekali

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);

//soal 4
var nilai;

nilai = 75

if (nilai >= 80)
    console.log("indeks nilai anda A")
else if ( nilai >= 70 && nilai < 80)
    console.log("indeks nilai anda B") //jawaban B
else if( nilai >= 60 && nilai < 70)
    console.log("indeks nilai anda C")
else if( nilai >= 50 && nilai < 60)
    console.log("indeks nilai anda D")
else
    console.log("indeks nilai anda E")

//soal 5
var tanggal = 25;
var bulan = 8;
var tahun = 1998;

switch (bulan) {
    case 1: {bulan = "Januari"; break;}
    case 2: {bulan = "Februari"; break;}
    case 3: {bulan = "Maret"; break;}
    case 4: {bulan = "April"; break;}
    case 5: {bulan = "Mei"; break;}
    case 6: {bulan = "Juni"; break;}
    case 7: {bulan = "Juli"; break;}
    case 8: {bulan = "Agustus"; break;}
    case 9: {bulan = "September"; break;}
    case 10: {bulan = "Oktober"; break;}
    case 11: {bulan = "November"; break;}
    case 12: {bulan = "Desember"; break;}
}

console.log(tanggal+" "+bulan+" "+tahun)


