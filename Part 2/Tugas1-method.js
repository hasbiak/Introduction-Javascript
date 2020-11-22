// 1. join() berfungsi untuk menggabungkan elemen array menjadi sebuah string. 

let arr = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr.join());        //hasil: 1,2,3,4,5,a,b,c,d,e
console.log(arr.join("."));      //hasil: 1.2.3.4.5.a.b.c.d.e
console.log(arr.join("|"));      //hasil: 1|2|3|4|5|a|b|c|d|e
console.log(arr.join("_"));      //hasil: 1_2_3_4_5_a_b_c_d_e

//2. reverse() digunakan untuk membalikkan urutan dari elemen di dalam array.

let arr1 = [1,2,3,4,5,"a","b","c","d","e"];
console.log(arr1.toString());         //hasil: 1,2,3,4,5,a,b,c,d,e
  
arr1.reverse();
console.log(arr1.toString());         //hasil: e,d,c,b,a,5,4,3,2,1

// 3.sort() digunakan untuk mengurutkan elemen dari array. 

 let arr2 = ["zulkifli","andi","erik","joko","dina"];
arr2.sort();
console.log(arr2.toString());    //hasil: andi,dina,erik,joko,zulkifli
  
// /*4. slice() digunakan untuk ’memotong’ array menjadi array baru, atau menjadi ’sub-array’ dari array asal.
//  Method slice() ini membutuhkan 2 buah argumen yang berisi posisi index awal dan akhir pemotongan.

// Jika hanya diberikan 1 argumen, maka method ini akan mengembalikan array baru dimulai dari posisi argumen sampai dengan akhir array. 
// Jika argumen bernilai negatif, maka perhitungan akan dimulai dari akhir array. */

let arr5 = [1,2,3,4,"a","b","c","d"];
  
//slice dari index ke 2 sampai 4
let arr6 = arr5.slice(2,4)
// console.log(arr6.toString());         //hasil: 3,4
  
// //slice dari index ke 4 sampai akhir array
// let arr7 = arr5.slice(4)
// // console.log(arr7.toString());         //hasil: a,b,c,d
  
// //slice dari index ke 2 dari akhir array
// let arr8 = arr5.slice(-2)
// // console.log(arr8.toString());         //hasil: c,d
  
// //slice dari index ke 5 dari akhir array sampai
// //index ke 2 dari akhir array
// let arr9 = arr5.slice(-5,-2)
// // console.log(arr9.toString());         //hasil: 4,a,b

// /*5. Method String. search() berfungsi untuk menemukan string menggunakan regular expression. 
// Method ini membutuhkan 1 buah argumen yang berisi format regular expression yang akan dicari. 
// Hasil akhir method ini adalah angka yang menunjukkan posisi kata yang dicari (huruf pertama dimulai dari index 0). 
// Method ini mirip dengan String.indexOf(), namun perbedaan terletak pada argumen yang merupakan regular expression. */

let kalimat2 = "Saya sedang belajar JavaScript di arkademy ";
// let hasil = kalimat2.search(/JavaScript/g);    // cari kata "JavaScript"
// console.log(hasil);     // 20 (JavaScript berada di karakter ke-21)

// /*6. Method String.split() berfungsi untuk memisahkan string menjadi array. 
// Method ini membutuhkan 2 buah argumen: argumen pertama berupa karakter ‘pembatas’ untuk memisahkan string,
//  dan argumen kedua bersifat opsional yang berisi seberapa banyak array yang akan dihasilkan. 
//  Jika argumen kedua tidak ditulis, maka seluruh hasil akan dikembalikan berapapun jumlahnya. */

 let kata = "Satu,Dua,Tiga,Empat,Lima";
// pisahkan String "kata" menjadi array dengan pemisah tanda koma
// let hasil = kata.split(",")
// console.log(hasil);    // ["Satu"," Dua", "Tiga", "Empat", "Lima"]
  
// let kata2 = "Satu;Dua;Tiga;Empat;Lima";
// // pisahkan String "katat" menjadi array dengan pemisah tanda ";"
// // batasi array hanya 3 isian
// // let hasil2 = kata2.split(";",3)
// // console.log(hasil2);    // ["Satu", "Dua", "Tiga"]

// /*7. Metode Filter Metode mengembalikan array yang mengandung unsur induk array pertandingan uji set. 
// Fungsi yang berisi tes dilewatkan sebagai argumen untuk filtermetode ini. Untuk mempertahankan suatu elemen, 
// fungsi tes harus kembali truedan falsemembuang suatu elemen. */

// create an array
const names1 = ['John', 'Peter', 'James', 'Pammy'];

// Filter the array for names having 'am'
const myName1 = names1.filter(name => name.includes('am'));

// console.log(myName1)

// /*8. Metode PUSH Metode ini menambahkan satu nilai atau lebih ke posisi terakhir array. 
// Metode ini mengubah array mengembalikan panjang array baru.*/

const names2 = ['Hasbi']
// console.log(names2.push('Ak'));
// console.log(names2)
// output: 4

// /*9. INCLUDES Metode ini memeriksa apakah array berisi elemen yang diberikan.
//  Nilai pengembalian untuk metode ini adalah a Boolean. true jika elemen ada dalam array dan false jika sebaliknya. */

 const names3 = ['Johnny', 'Pete', 'Sammy']
const myName2 = 'Pete';

const hasMyName = names3.includes(myName2);
// output: true

// /*10. SPLICE Metode Array mengubah array yang ada dengan menghapus, menambah dan / atau mengganti elemen tertentu dari itu. 
// Metode ini mengubah array dan mengembalikan array semua elemen yang dihapus dari array. 
// Array kosong dikembalikan jika tidak ada elemen yang dihapus. */

const numbers = [1, 2, 4, 5];
numbers.splice(2, 0, 3);
// numbers: Array [1, 2, 3, 4, 5]

const oddNumbers = [1, 3, 5, 7, 11];
oddNumbers.splice(4, 1, 9);
// numbers: Array [1, 3, 5, 7, 9]

oddNumbers.splice(3, 1);
// numbers: Array [1, 3, 5, 9]
// console.log(numbers)