// function arkFood(harga, voucher, jarak, pajak) {
//     //jika voucher ARKAFOOD5
//     if (voucher == "ARKAFOOD5") {
//       //jika harga lebih dari 50.000
//       if (harga >= 50000) {
//         //maka potongan = harga dikali 50%
//         const potongan = harga * (50 / 100);
//         // jika potongan lebih dari 50.000
//         if (potongan > 50000) {
//           // maka potongan statis tetap 50.000
//           const potongan = 50000;
//           console.log("Harga             : " + harga);
//           console.log("Potongan : " + potongan);
//           // console.log("Benar");
//           if (jarak == 2) {
//             const tarif = 5000;
//             // const tarif = 5000;
//             console.log("Biaya antar :  " + tarif);

//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           } else if (jarak > 2) {
//             let tarif = 5000;
//             for (let i = 2; i < jarak; i++) {
//               let hasil = (tarif += 3000);
//               //   hasilAkhir = hasil;
//               console.log("Biaya antar :  " + hasil);
//             }
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           }
//         } else {
//           console.log("Harga             : " + harga);
//           console.log("Potongan : " + potongan);
//           if (jarak == 2) {
//             const tarif = 5000;
//             // const tarif = 5000;
//             console.log("Biaya antar :  " + tarif);
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           } else if (jarak > 2) {
//             let tarif = 5000;
//             for (let i = 2; i < jarak; i++) {
//               let hasil = (tarif += 3000);
//               //   hasilAkhir = hasil;
//               console.log("Biaya antar :  " + hasil);
//             }
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           }
//         }
//       } else {
//         console.log("Menggunakan voucher ARKAFOOD5, Minimal pesanan Rp 50.000");
//       }
//     }

//     //jika voucher DITRAKTIRDEMY
//     else if (voucher == "DITRAKTIRDEMY") {
//       //jika harga lebih dari 25.000
//       if (harga >= 25000) {
//         //maka potongan = harga dikali 50%
//         const potongan = harga * (60 / 100);
//         // jika potongan lebih dari 50.000
//         if (potongan > 30000) {
//           // maka potongan statis tetap 50.000
//           const potongan = 30000;
//           console.log("Harga             : " + harga);
//           console.log("Potongan : " + potongan);
//           if (jarak == 2) {
//             const tarif = 5000;
//             // const tarif = 5000;
//             console.log("Biaya antar :  " + tarif);
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           } else if (jarak > 2) {
//             let tarif = 5000;
//             for (let i = 2; i < jarak; i++) {
//               let hasil = (tarif += 3000);
//               //   hasilAkhir = hasil;
//               console.log("Biaya antar :  " + hasil);
//             }
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           }
//         } else {
//           console.log("Harga             : " + harga);
//           console.log("Potongan : " + potongan);
//           if (jarak == 2) {
//             const tarif = 5000;
//             // const tarif = 5000;
//             console.log("Biaya antar :  " + tarif);
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           } else if (jarak > 2) {
//             let tarif = 5000;
//             for (let i = 2; i < jarak; i++) {
//               let hasil = (tarif += 3000);
//               //   hasilAkhir = hasil;
//               console.log("Biaya antar :  " + hasil);
//             }
//             if (pajak) {
//               const pajak = harga * (5 / 100);
//               console.log("Pajak :   " + pajak);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             } else {
//               console.log("pajak :      " + 0);
//               subtotal = potongan + tarif + pajak;
//               console.log("Subtotal : " + subtotal);
//             }
//           }
//         }
//       } else {
//         console.log(
//           "Menggunakan voucher DITRAKTIRDEMY, Minimal pesanan Rp 25.000"
//         );
//       }
//     } else {
//       console.log(false);
//     }
//   }

const arkFood = (harga, voucher, jarak, pajak) => {
  let potongan = diskon(harga, voucher);
  let ongkir = cekOngkir(jarak);
  let biayaPajak = cekPajak(harga, pajak);
  let subTotal = harga - potongan + ongkir + biayaPajak;
  console.log(`Harga          : ${harga}`);
  console.log(`Potongan       : ${potongan}`);
  console.log(`Biaya Antar    : ${ongkir}`);
  console.log(`Pajak          : ${biayaPajak}`);
  console.log(`Subtotal       : ${subTotal}`);
};

const diskon = (harga, voucher) => {
  if (voucher === "ARKAFOOD5" && harga >= 50000) {
    if ((harga * 50) / 100 <= 50000) {
      potongan = (harga * 50) / 100;
    } else {
      potongan = 50000;
    }
  } else if (voucher === "DITRAKTIRDEMY" && harga >= 25000) {
    if ((harga * 60) / 100 <= 30000) {
      potongan = (harga * 60) / 100;
    } else {
      potongan = 30000;
    }
  } else {
    potongan = 0;
  }
  return potongan;
};

const cekOngkir = (jarak) => {
  if (jarak <= 2) {
    ongkir = 5000;
  } else {
    ongkir = 5000 + (jarak - 2) * 3000;
  }
  return ongkir;
};

const cekPajak = (harga, pajak) => {
  if (pajak) {
    biayaPajak = (harga * 5) / 100;
  } else {
    biayaPajak = 0;
  }
  return biayaPajak;
};

arkFood(75000, "ARKAFOOD5", 5, true);
