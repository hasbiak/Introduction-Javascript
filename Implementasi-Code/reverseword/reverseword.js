const reverseWord = (teks) => {
     if (typeof teks !== "string") {
       console.log("Input data harus bertipe String");
     } else {
       const x = teks.split(" ").reverse().join(" ");
   
       console.log(x);
     }
   };
   
   reverseWord("Saya Belajar Javascript");