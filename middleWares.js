import express from 'express';
const app = express();
app.use(express.json());
app.get('/get-user',(req,res) => {
    res.send("api success");
})
app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log(data);
    res.send("data added");
});
app.listen(7000,() => {
    console.log("server running at port 7000");
})