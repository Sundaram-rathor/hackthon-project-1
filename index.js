const express=require('express');
const app=express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config()
const cors=require('cors');
const bodyParser=require('body-parser');
const router=express.Router();
const {createUser}=require('./api/service/user.service')


app.use(
    cors({
        methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
        origin: "*",
    })
);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const connect = await mongoose.connect(process.env.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            console.log(`DB Connected`)
    } catch (error) {
        console.log(`DB not Connected`);
        throw error
    }
}
connectDB();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())


router.post('/create',createUser())

app.get('/society',(req,res)=>{
    console.log(`society is running`)
    res.send(`society is running`   )
})
app.listen(4000,()=>{
    console.log(`server is listening on port 4000`)
})