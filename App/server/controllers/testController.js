async function test(req, res) {

    res.send("De connectie tussen frontend en backend werkt met axios");
}

async function cookie(req, res) {
    
}

module.exports = {test, cookie}