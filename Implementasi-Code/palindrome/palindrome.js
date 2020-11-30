const cekpalindrome = (teks) => {
    if (typeof teks !== "string") {
      console.log("Input data harus bertipe String");
    } else {
      const x = teks.toLowerCase();
      const y = x.split("").reverse().join("");
  
      if (x === y) {
        console.log(`${x} Adalah Palindrome`);
      } else {
        console.log(`${x} Bukan Palindrome`);
      }
    }
  };
  
  cekpalindrome("Malam");