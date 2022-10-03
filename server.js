const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");


app.use(cors());

app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://Mohan:Moh1n#red@cluster0.wdfhcva.mongodb.net/tic_tac_toe_DB");


//require route
app.use("/", require("./routes/ttt_route"));

app.listen(3001, () => {
    console.log("Express server is running on port 3001");
});
