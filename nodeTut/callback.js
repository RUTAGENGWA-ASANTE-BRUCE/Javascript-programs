function getUser(id){
    return new Promise((resolve,reject)=>{

        setTimeout(()=>{
            resolve({id:id,user:"Bruce"})
        },2000)
    })
}

function getRepositories(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            resolve({user:name,repos:["Repo1","Repo2"]})
        }),2000
    })
}

function makeCouple(name1,name2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log(`Couple is ${name1} and ${name2}`))},2000)
    })
}