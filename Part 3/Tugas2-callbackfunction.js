const getmonth = (callback) => {
    setTimeout(()=>{
    let error = false;
    let month = ['January','February','March','April','May','June','July','August','September','October','November','Desember'];
    if(!error){
      callback(null, month)
    }else{
      callback(new Error('Sorry Data Not Found', []))
    }
  }, 4000)
  }

  function showMonth(isError, bulan){
    if (isError !== null){
        console.log(isError)
    }else{
      const result = bulan.map((value) => value);
      console.log(result);
    }
}
getmonth(showMonth)