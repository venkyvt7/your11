const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 3000;
const mongoString = "mongodb+srv://venkatesh:<password>@cluster0.8ttog.mongodb.net/newonee?retryWrites=true&w=majority"

const ObjectId = require("mongoose").Types.ObjectId;

mongoose.connect(mongoString, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const userSchema = new mongoose.Schema({
  userName: String,
  password: String
});
const User = mongoose.model("User", userSchema);

const dashSchema = new mongoose.Schema({
  userName: String,
  points: Array,
  match: Array,
  // todos: [
  //   {
  //     points:String,
  //   },
  // ],
});
const Dash = mongoose.model("Dash", dashSchema);

app.use(cors());
app.use(express.json());

app.post("/register", async (req, res) => {


  const { userName, password } = req.body;
  const user1 = await User.findOne({ userName });

console.log(userName);

  if (user1 != null) {
    console.log(user1);
    res.status(500);
    res.json({
      message: "user already exists",
    });
    return;
  }


  await User.create({ userName, password });
  res.json({
    message: "success",
  });

});

app.post("/login", async (req, res) => {
  const { userName, password } = req.body;
  const user = await User.findOne({ userName });
  // console.log(req.body);
  if (!user || user.password !== password) {
    res.status(403);
    res.json({
      message: "invalid login",
    });
    return;
  }
  res.json({
    message: "success",
  });
});

app.post("/Dash", async (req, res) => {

  const { userName1, points1, match1 } = req.body;
  // console.log(3433243);
// console.log(req.body);
  var arr1 = [];
  var arr2 = [];
  
  arr1.push(points1);
  arr2.push(match1);
  var userName=userName1;
    const userx = await Dash.findOne({ userName });

  // console.log(userx);

  if (userx == null) {

    // console.log(3232332323223);
    await Dash.create({
      userName: userName1,
      points: arr1,
      match: arr2,
    })
  }

  else {
    // console.log(userx.points);
    let temp = userx.points;
    temp.push(points1);
    // console.log(temp);
    userx.points = temp;
    let temp1=userx.match;
    temp1.push(match1);
     
    await userx.save();

  }

   
  res.json(userx);
});


app.get("/Dashboard/:userName", async(req, res) => {

// console.log(433443);


  var {userName}=req.params;
  console.log(userName)
// 
  const userx = await Dash.findOne({ userName });

  // console.log(userx);



  res.json(userx);
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  app.listen(port, () => {
    // console.log(`Example app listening at http://localhost:${port}`);
  });
});
