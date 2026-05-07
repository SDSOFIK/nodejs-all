
// await er age async use korte hoy function er age 
function ShowGet (name , roll){
    name = "sofik"
    roll = 19
    return (`name : ${name }\n Roll : ${roll} `)
}
 async function ShowData (){
    let Show = await ShowGet()
    console.log(Show)
}
ShowData()