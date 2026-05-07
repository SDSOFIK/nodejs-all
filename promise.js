

const myPromise = new Promise ((resolve , reject)=>{
    let suces = true
    if(suces){
        resolve("Work is compelet ")
    }
    else{
        reject("Sorry not compelete")
    }
} );

myPromise.then((result)=>{
    console.log(result)
}).catch((error)=>{
    console.log(error)
})


function loginUser(username, password) {

    return new Promise((resolve, reject) => {

        console.log("Checking user...");

        setTimeout(() => {

            if(username === "admin" && password === "1234") {

                resolve("Login Successful");

            } else {

                reject("Username or Password Wrong");

            }

        }, 2000);

    });

}


// Function Call
loginUser("admin", "1234")

    .then((message) => {

        console.log("SUCCESS:", message);

    })

    .catch((error) => {

        console.log("ERROR:", error);

    });