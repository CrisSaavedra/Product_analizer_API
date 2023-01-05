const HistoricalDB = require("./historical.json");

const getAll = () => {
    return HistoricalDB.historicalStockList;
}

const getOne = (par) => {
    const historical = HistoricalDB.historicalStockList.find(his => his.symbol === par);
    return historical;
}

module.exports = {
    getAll,
    getOne
};