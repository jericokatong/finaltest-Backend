var express = require("express");
var router = express.Router();
const { index, getMatakuliahByKode, postMatakuliah, deleteMatakuliahByKode, updateMatakuliahByKode } = require("./controller");

/* GET home page. */
router.get("/matakuliah", index);
router.get("/matakuliah:kode", getMatakuliahByKode);
router.post("/matakuliah", postMatakuliah);
router.delete("/matakuliah:kode", deleteMatakuliahByKode);
router.put("/matakuliah:kode", updateMatakuliahByKode);

module.exports = router;
