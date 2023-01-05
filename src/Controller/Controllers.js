const service = require("../services/service");
const { all } = require("../v1/routes/routes");
const path = require('path');

const getSymbols = (req, res) => {

    const allSymbols = service.getAllSymbols();
    res.send(allSymbols);
};

const getSymbol = (req, res) => {

    const Symbol = service.getSymbol(req.params.id);
    res.send(Symbol);
    
};

const getHistorical = (req, res) => {
    const allHistorical = service.getAllHistorical();
    res.send(allHistorical);

};

const getOneHistorical = (req, res) => {
    const Historical = service.getOneHistorical(req.params.id);
    res.send(Historical);
}

module.exports = {
    getSymbols,
    getHistorical,
    getSymbol,
    getOneHistorical
};