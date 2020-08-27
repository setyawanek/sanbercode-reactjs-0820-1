// soal 1

var satu = 0;
var dua = 20;

console.log("LOOPING PERTAMA")
while (satu <= 20 ){
    console.log(satu + ' - i love coding')
    satu+=2;
}

console.log("LOOPING KEDUA")
while (dua >= 0 ){
    console.log(dua + ' - I will become a frontend developer')
    dua-=2;
}

//soal 2
for(var angka = 1; angka <= 20; angka++){
    if( angka % 2 == 0){
        console.log(angka + " - Berkualitas");
    }else if ( angka % 3 == 0){
        console.log(angka + " - I love coding");
    }else{
        console.log(angka + " - Santai");
    }    
}

//soal 3
var segitiga="";
for(var a = 1; a <= 7; a++){
    for(var b = 1; b <= a; b++){
        segitiga += '#'
    }
    segitiga += "\n"
}
console.log(segitiga)

//soal 4
var kalimat="saya sangat senang belajar javascript"
console.log(kalimat.split(" "))

//soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
var buah = daftarBuah.sort()
    for (i=0; i<buah.length; i++){

        console.log(buah[i])
    }