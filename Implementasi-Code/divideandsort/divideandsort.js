const divideAndSort = (num) => {
    if (typeof num !== "number") {
      console.log("input data dengan tipe data Number");
    } else {
      const x = num.toString().split("0");
      const y = x.map((e) => e.split("").sort().join(""));
      const z = parseInt(y.join(""));
      console.log(`Output : ${z}`)
    }
  };
  
  divideAndSort(5956560159466056);