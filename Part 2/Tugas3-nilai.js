    function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray) {
            if (nilaiAwal < nilaiAkhir && dataArray.length > 5) {
              console.log(
                dataArray.filter((value) => value > nilaiAwal && value < nilaiAkhir).sort(function (a, b) {return a - b;}));
            } else if (nilaiAwal > nilaiAkhir) {
              console.log("Nilai akhir harus lebih besar dari nilai awal");
            } else if (dataArray.length < 5) {
              console.log("Jumlah angka dalam dataArray tidak ada");
            }
          }
          seleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8]);
          seleksiNilai(15, 3 , [2, 25, 4, 14, 17, 30, 8]);
          seleksiNilai(5, 17 , [2, 25, 4]);