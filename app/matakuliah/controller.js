const { mongoUrl } = require("../../config/index");
const Matakuliah = require("./model");

const index = async (req, res, next) => {
  if (req.query.nama) {
    try {
      const nama = req.query.nama;
      const result = await Matakuliah.find({ nama: nama });

      res.json({
        status: "Berhasil",
        message: "Mata kuliah berdasarkan nama",
        data: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  } else {
    try {
      const result = await Matakuliah.find();

      res.json({
        status: "Berhasil",
        message: "Daftar semua mata kuliah",
        data: result,
      });
    } catch (error) {
      console.log(error.message);
    }
  }
};

const getMatakuliahByKode = async (req, res, next) => {
  try {
    const kode = req.params.kode;
    const result = await Matakuliah.find({ kode_matakuliah: kode });

    res.json({
      status: "Berhasil",
      message: "Daftar matakuliah berdasarkan kode",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const postMatakuliah = async (req, res, next) => {
  try {
    await Matakuliah.create(req.body);

    const result = await Matakuliah.find();

    res.json({
      status: "Berhasil",
      message: "Tambah mata kuliah",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMatakuliahByKode = async (req, res, next) => {
  try {
    const kode = req.params.kode;

    await Matakuliah.deleteOne({ kode_matakuliah: kode });

    const result = await Matakuliah.find();

    res.json({
      status: "Berhasil",
      message: "Hapus mata kuliah berdasarkan kode",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const updateMatakuliahByKode = async (req, res, next) => {
  try {
    const kode = req.params.kode;
    const nama = req.body.nama;
    const ruangan = req.body.ruangan;
    const jam = req.body.jam;

    await Matakuliah.updateOne({ kode_matakuliah: kode }, { nama, ruangan, jam });

    const result = await Matakuliah.find({ kode_matakuliah: kode });

    res.json({
      status: "Berhasil",
      message: "update matakuliah berdasarkan kode",
      data: result,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { index, getMatakuliahByKode, postMatakuliah, deleteMatakuliahByKode, updateMatakuliahByKode };
