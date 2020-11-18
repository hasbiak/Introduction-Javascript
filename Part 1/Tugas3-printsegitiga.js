
const printSegitiga = 5

    if ( typeof printSegitiga == "number"){
        for (let i = printSegitiga; i > 0; i--) {
          let str = ""
          for (let j = 1; j <= i; j++) {
            str += j
          }
            console.log(str)
          }
        }else{
          console.log("Data harus number")
                
              }