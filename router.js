const appRouter = require('express').Router();

function logger(req, res, next) {
    console.log(new Date(), req.url);
    next()
}

appRouter.get('/', function (req, res) {
    const name = req.query.nama;
    const birthPlace = req.query.tempat_lahir;
    const birthDate = req.query.tanggal_lahir;
    const address = req.query.alamat;

    res.send({
        'nama': name,
        'tempat-lahir': birthPlace,
        'tanggal-lahir': birthDate,
        'alamat': address
    });
})

appRouter.post('/', (req, res) => {
    const name = req.body.nama;
    const birthPlace = req.body.tempat_lahir;
    const birthDate = req.body.tanggal_lahir;
    const address = req.body.alamat;

    res.send({
        'nama': name,
        'tempat-lahir': birthPlace,
        'tanggal-lahir': birthDate,
        'alamat': address
    });
})

module.exports = {appRouter, logger}
