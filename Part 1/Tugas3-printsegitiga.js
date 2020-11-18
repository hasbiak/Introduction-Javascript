
function printSegitiga(num){
        if (typeof num !== "number"){console.log("Data harus number")
        }else{
            for (let i = num; i > 0; i--) {
                let str = ""
                for (let j = 1; j <= i; j++) {
                  str += j
                }
                console.log(str)
              }
        }
    }

   printSegitiga(5)