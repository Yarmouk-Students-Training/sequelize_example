const { sequelize, user } = require("./models")
async function sara(){
    await sequelize.sync({force: true})
    console.log(user.toString())
    return "Nizar"
}

console.log("Hi before sync")
sara().then(res => console.log(res)).catch(err => console.log(err))
console.log("Hi after sync")

