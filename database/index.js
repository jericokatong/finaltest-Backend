const mongoose = require("mongoose");

const { mongoUrl } = require("../config");

mongoose
  .connect(mongoUrl)
  .then((res) => console.log("keneksi berhasil"))
  .catch((error) => console.log("koneksi gagal", error.message));
