const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main().then(() => {
    console.log("connection successful");
})
.catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats =[
    {
      from: "vinay",
      to: "vishnu",
      msg: "send me your exam sheets",
      created_at: new Date()
    },
     {
      from: "vinay",
      to: "amit",
      msg: "which time we gone gym",
      created_at: new Date()
    },
     {
      from: "amit",
      to: "vishnu",
      msg: "today you would go to gym",
      created_at: new Date()
    },
    {
      from: "rahul",
      to: "aman",
      msg: "please share notes",
      created_at: new Date()
    },
    {
      from: "sneha",
      to: "pooja",
      msg: "kal ka assignment bhej do",
      created_at: new Date()
   },
   {
     from: "rohit",
     to: "vikas",
     msg: "project ka code bhejna",
     created_at: new Date()
   },
   {
     from: "neha",
     to: "riya",
     msg: "class timing kya hai?",
     created_at: new Date()
    },
    {
     from: "arjun",
     to: "karan",
     msg: "bhai attendance check kar",
     created_at: new Date()
    },
    {
     from: "simran",
     to: "anita",
     msg: "exam kab hai?",
     created_at: new Date()
    },
    {
     from: "deepak",
     to: "sunil",
     msg: "lab file complete hui?",
     created_at: new Date()
    },
    {
      from: "meena",
      to: "kavita",
      msg: "notes revise kar liye?",
      created_at: new Date()
    },
    {
       from: "tarun",
       to: "mohit",
       msg: "MCQ bhej de bhai",
       created_at: new Date()
    },
    {
      from: "ankit",
      to: "rahul",
      msg: "important questions bata",
      created_at: new Date()
    }
];

Chat.insertMany(allChats)

