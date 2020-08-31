//soal 1
console.log("----------------------------")
let r = 10

const Luaslingkaran = (r) => {
    return 3.14 * r * r
}

const Kelilinglingkaran = (r) => {
    return 3.14 * 2 * r
}

console.log(Luaslingkaran(r))
console.log(Kelilinglingkaran(r))

//soal 2 
console.log("----------------------------")
let kalimat = []

const tambahKalimat = (kata) => {
    return kalimat += kata
}

let kata1 = "saya"
let kata2 = "adalah"
let kata3 = "seorang"
let kata4 = "frondend"
let kata5 = "developer"

tambahKalimat(`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`)
console.log(kalimat)

//soal 3
console.log("----------------------------")
const newFunction = (firstName, lastName) => {
    return{
        firstName,
        lastName,
        fullname: () => {
            console.log(`${firstName} ${lastName}`)
        }
    }
}
newFunction("william", "imoh").fullname()

//soal 4 
console.log("----------------------------")

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation)

//soal 5 
console.log("----------------------------")

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
//Driver Code
console.log(combined)