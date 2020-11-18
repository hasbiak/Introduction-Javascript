    let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: 
    {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    }

    // A. Ubahlah data 
    data = {...data,name:"Hasbi Alwi Kusmana", email: "Hasbialwi70@gmail.com",hobby:"Futsal"}

    // B.Destructuring
    
    let {street, city} = data.address

    console.log(street,city)
    
    // console.log(data)