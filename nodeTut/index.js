const Exress=require("Express")
const parser=require("body-parser")
let app=Exress()

const districts=[
    {id:Number,province:String},
    {id:Number,province:"Northern"},
    {id:Number,province:"Western"},
    {id:Number,province:"Southern"},
]
app.use(Exress.json())
app.get("/api/districts",(req,res)=>{res.send(districts)})
app.post("/api/districts",(req,res)=>{
    console.log(req.body)
    districts.push(req.body)
    res.status(201)
    res.send(districts)
})
app.listen(5000,(req,res)=>console.log("Hello"))