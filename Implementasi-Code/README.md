<h1 align="center">Implementasi Code</h1>

## 1. Deteksi Palindrome

Diberikan sebuah teks, periksa apakah kata tersebut adalah palindrome atau tidak. Misalnya teks "Malam", output = palindrome

## 2. Reverse Word

Diberikan sebuah kalimat, ubah urutan kata-kata didalam kalimat menjadi terbalik. Misalnya kalimat "Saya Belajar Javascript", output = "Javascript Belajar Saya"

## 3. Ark Food

Demy membeli makanan menggunakan aplikasi ArkFood. Dimana terdapat 2 buah kode promo:

1. Promo ‘ARKAFOOD5’ dengan ketentuan pemesanan minimal 50rb akan mendapat diskon 50%, dengan maksimal potongan sebesar 50rb.
2. Promo ‘DITRAKTIRDEMY’ dengan ketentuan pemesanan minimal 25rb akan mendapatkan diskon 60%, dengan maksimal potongan sebesar 30rb.
3. Jika tidak menggunakan kode promo ‘false’
   Untuk pengiriman sejauh 2km pertama akan dikenakan tarif 5rb, dan setiap satu kilometer selanjutnya dikenakan penambahan 3rb. Untuk beberapa restoran dikenakan pajak yakni 5% dari harga makanan yang dipesan (true), jika tidak dikenakan pajak (false).

Task :

Buatlah flowchart untuk membuat fungsi dari cerita diatas.
Buatlah sebuah function yang menerima 4 parameter.
ArkFood(harga, voucher, jarak, pajak)

Example :

Input : arkFood(75000, ‘ARKFOOD5’, 5, true)
Output : Harga : 75000
Potongan : 37500
Biaya Antar : 14000
Pajak : 3750
SubTotal : 55250

## 4. Divide And Sort

Diberikan sebuah variabel yang berisikan bilangan integer dengan ketentuan angka 0 (nol) dalam variabel tersebut merupakan pemisah antara satu bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisah dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu, bilangan hasil pengurutan akan digabung kembali dengan tanpa pemisah dengan output berupa bilangan integer. Buatlah method/function yang menerima parameter hanya deret angka dan menghasilkan output seperti keterangan di atas.

Contoh input :
divideAndSort(5956560159466056)
Contoh Output :
55566914566956
