
const hariKerja = (day) => {
	return new Promise((resolve, reject) => {
	  setTimeout(() => {
		const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
		let cek = dataDay.find((item) => {
		  return item === day;
		});
		if (cek) {
		  resolve(cek);
		} else {
		  reject(new Error("hari ini bukan hari kerja!"));
		}
	  }, 3000);
	});
  };
  
  // then catch
  hariKerja("sabtu")
	.then((result) => {
	  console.log(`Hari ${result} adalah hari kerja`);
	})
	.catch((error) => {
	  console.log(error.message);
	});
  
  //then berfungsi untuk handler ketika cek bernilai true
  //catch berfungsi untuk handler ketika cek bernilai false
  
  // try catch
  
  const jadwalKerja = async (day) => {
    try {
      const result = await hariKerja(day);
      console.log(result);
    } catch (error) {
      console.log(`error`);
    } finally {
      console.log("Program selesai!");
    }
  };
  
  // // try memungkinkan untuk mengecek atau memeriksa block agar mengetahui error atau tidak
  // // catch adalah block yang menampilkan error jika pada try terjadi error
  // // sedangkan finally akan menjalankan saat true ataupun false
  
  jadwalKerja("senin");
  