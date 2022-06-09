const mySelf = {  //defining object
    name:"stuti",
    address:"Bhaktapur",
    emails:"stuti@mailcom",
    interests:["gaming","movies"],
    education:[{                     // array of objects
        Name:"bachelors",
        enrolledDate: 2016
    },
    {
        Name:"Plus two",
        enrolledDate:2014
    } 
    ]   
};

for(let i=0; i< mySelf['education'].length; i++){
    console.log("name: " + mySelf.education[i]['Name'] + " enrolledDate" + mySelf.education[i]['enrolledDate']);
}


