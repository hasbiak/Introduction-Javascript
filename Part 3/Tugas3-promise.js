// 1.
const code = (interestCode) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (interestCode === "YES") {
        resolve("Code Berhasil");
      } else {
        reject("Code Error");
      }
    }, 3000);
  });
};
code("YES")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

// 2.
const yourName = new Promise((resolve, reject) => {
  const nama = "Hasbi";
  setTimeout(() => {
    if (nama === "Hasbi") {
      resolve(`Nama kamu adalah : ${nama}`);
    } else {
      reject("Itu bukan nama saya");
    }
  }, 3000);
});

yourName
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
