const { all } = require("express/lib/application");
const symbols = require("../Database/ModelSymbol");
const historical = require("../Database/ModelHistorical");

const getAllSymbols = () => {
    const allSymbols = symbols.getAll();
    return allSymbols;
};

const getSymbol = (par) => {
    const sym = symbols.getOne(par);
    return sym;
};
const getAllHistorical = () => {
    const his = historical.getAll();
    return his;
};

const getOneHistorical = (par) => {
    const his = historical.getOne(par);
    return his;
};

module.exports = {
    getAllHistorical,
    getAllSymbols,
    getSymbol,
    getOneHistorical
}

