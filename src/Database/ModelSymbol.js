const SymbolDB = require("./symbols.json");

const getAll = () => {
    return SymbolDB.symbolsList;
}

const getOne = (par) => {
    const symbol = SymbolDB.symbolsList.find(symbol => symbol.symbol === par);
    
    return symbol;
}

module.exports = {
    getAll,
    getOne
};