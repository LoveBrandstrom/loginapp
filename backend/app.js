const express = require ('express')
const mongoose = require('mongoose')
const app = express();
const dbURL = 'mongodb+srv://testuser:123@cluster0.eijve.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 3002;
const Model = require ('./modelschema')

app.set('view engine', 'ejs')
app.use(express.json());

app.post("/api/users", async (req, res) =>{
    const user = new Model(req.body)
    const isEmailAlreadyRegistered = await Model.exists({ email: req.body.email });

    if (isEmailAlreadyRegistered) {
        console.log("Email already in use")
        res.send({message: "Den här mejlen används redan, sopa"})
    } else {
        user.save()
        res.send({message: "klart, du har reggat"})
        console.log("user added to database")
    } 
});

app.post('/api/login', async (req, res) => {
    console.log("request made")
    console.log(req.body)

    const userEmail = await Model.exists({ email: req.body.email });
    const userPassword = await Model.exists({ password: req.body.password });


    if (userEmail && userPassword) {
        console.log("User logged in")
        res.send({loggedIn: true})
    } else {
        console.log('Users doesnt match')
        res.send({message: "någonting gick fel, undrar varför...?"})
    } 
});

    mongoose.connect(dbURL,
      { useNewUrlParser: true, useUnifiedTopology: true}, () => app.listen(PORT), console.log(`App is listening to ${PORT}`));