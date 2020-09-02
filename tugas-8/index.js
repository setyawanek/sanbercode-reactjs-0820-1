// di index.js
var readBooks = require('./callback')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]
 
// Tulis code untuk memanggil function readBooks di sini
function membacaBuku(waktu, judul){
    readBooks(waktu, books[judul], function(sisaWaktu){
        if (sisaWaktu >= 0 && judul+1 < books.length){
            membacaBuku(sisaWaktu, judul+1)
        } else(
            console.log("waktu habis")
        )
    })
}
membacaBuku(10000, 0)