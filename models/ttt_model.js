const mongoose = require("mongoose");

const tttSchema = {
    values: Array
};

const ttt = mongoose.model("ttt", tttSchema);
module.exports = ttt;
