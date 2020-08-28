//soal 1 

function halo(){
    return "halo sanbers"
}

console.log(halo())

//soal 2

function kalikan(num1, num2){
    return num1 * num2
}
 
var num1 = 12
var num2 = 4
var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

// soal 3

function introduce(name, age, address, hobby){
    return "nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!"
}
 
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"
 
var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!

//soal 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992]
var objek = {
    nama : "asep",
    jenis_kelamin : "laki-laki",
    hobi : "baca buku",
    tahun_lahir : 1992,
}

console.log(objek)

//soal 5
var buahku = [
    {nama: "strawberry",
    warna: "merah",
    adabijinya: "tidak",
    harga: 9000},

    {nama: "jeruk",
    warna: "oranye",
    adabijinya: "ada",
    harga: 8000},

    {nama: "Semangka",
    warna: "Hijau & Merah",
    adabijinya: "ada",
    harga: 10000},

    {nama: "Pisang",
    warna: "Kuning",
    adabijinya: "tidak",
    harga: 5000},
]

console.log(buahku[0]);

//soal 6

var dataFilm = []

function tambahDataFilm(nama, durasi, genre, tahun) {
    dataFilm.push({
      nama: nama,
      durasi: durasi,
      genre: genre,
      tahun: tahun,
    });
}

tambahDataFilm("boruto", "20 menit", "action", 2020)
tambahDataFilm("naruto", "20 menit", "action", 2021)

console.log(dataFilm)