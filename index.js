const express=require("express")
const res = require("express/lib/response")
const app=express()


app.use(loggor)
app.get("/books",function(req,res){
var data =[{ route: "/books"}]
return res.send(data)
})

app.get("/libraries",function(req,res){
    var data =[{ route: "/libraries",}]
    return res.send(data)
    })
app.get("/authors",function(req,res){
        var data =[ { route: "/authors"}]
        return res.send(data)
        })


    function loggor(req,res,next){
       if(req.path==="/books"){
           req.role="books permision true"
           next()
       }
       else if(req.path==="/libraries"){
        req.role="libraries permision true"
        next()

       } 
       else if(req.path==="/authors"){
        req.role="authors permision true"
        next()

    }
    console.log("for all")
        }

app.listen(5000,()=>{
    console.log("hellow i am listener")
})