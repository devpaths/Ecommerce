const mongoose = require("mongoose");
const validmongodbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
};

module.exports = validmongodbId;
