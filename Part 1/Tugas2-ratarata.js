
const mtk = 80
const bahasaIndonesia = 90
const bahasaInggris = 89
const ipa =  69

// Validasi Nilai
if (typeof bahasaIndonesia=='number' && typeof bahasaInggris=='number' && typeof mtk=='number' && typeof ipa=='number'){
let rataRata=(mtk+bahasaIndonesia+bahasaInggris+ipa)/4 // Menghitung nilai rata-rata
console.log("Rata-rata = " + rataRata) // Tampilkan nilai rata-rata
if (rataRata >=90 && rataRata <=100){
    console.log("Grade = A");
    } else if  (rataRata>=80 && rataRata <=89){
        console.log ("Grade = B");
    } else if (rataRata >=70 && rataRata <=79){
        console.log("Grade = C");
    }else if(rataRata>=60 && rataRata <=69){
        console.log ("Grade = D");
    }else if(rataRata>=0 && rataRata <=59){
        console.log("Grade = E");
    }
    }else {
        console.log ("Nilai rata-rata salah atau data harus berupa angka"); // Tampilkan jika data yang dimasukkan ke nilai bukan angka
    }
