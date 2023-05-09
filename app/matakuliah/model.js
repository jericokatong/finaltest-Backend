const mongoose = require("mongoose");

const matakuliahSchema = new mongoose.Schema({
  kode_matakuliah: {
    type: String,
    required: [true, "kode matakuliah harus diisi"],
  },
  nama: {
    type: String,
    required: [true, "nama matakuliah harus diisi"],
  },
  ruangan: {
    type: String,
  },
  jam: {
    type: String,
  },
});

const Matakuliah = mongoose.model("Matakuliah", matakuliahSchema);

module.exports = Matakuliah;
