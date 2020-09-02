var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
 
// Lanjutkan code untuk menjalankan function readBooksPromise
let waktu = 10000;
let judul = 0;


function membacaBuku(){
	readBooksPromise(waktu, books[judul])
		.then(function(sisaWaktu){
			waktu = sisaWaktu;
			judul += 1;
			if (judul < books.length){
				membacaBuku();
			}
		})
		.catch(function(error){
			console.log("waktu habis");
		})
}

membacaBuku()