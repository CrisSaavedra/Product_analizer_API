



const URLSymbols = 'http://localhost:9090/api/symbols';
const URLHistoricals = 'http://localhost:9090/api/historical';


const xhr = new XMLHttpRequest();



/*
function onRequest() {
    if (this.readyState === 4 && this.status == 200) {
        console.log(this.response);
        const data = JSON.parse(this.response);
        const htmlResp = document.querySelector("#symbolslist");

        const tlp = data.map((product) => `<a href= ${product.symbol} class="list-group-item list-group-item-action">${product.symbol}</a>`);
        htmlResp.innerHTML = `<tr><td>${tlp}</td></tr>`;
    }
}
xhr.addEventListener("load", onRequest);
xhr.open('GET', `${URLSymbols}`);
xhr.send();

*/

let obj = [];


function onClickSymbol(){
    const sym = obj.filter(user => obj.symbol === 'SPY' )
    console.log(sym);
}

function onRequest() {
    if (this.readyState === 4 && this.status == 200) {
       // console.log(this.response);
        const data = JSON.parse(this.response);
        obj = data;
        console.log(obj);
        const htmlResp = document.querySelector("#symbolslist");

        const tlp = data.map((product) => `<a onClick = 'onClickSymbol()' class="list-group-item list-group-item-action">${product.symbol}</a>`).join(' ');
        htmlResp.innerHTML = `<tr><td>${tlp}</td></tr>`;
    }
}




xhr.addEventListener("load", onRequest);
xhr.open('GET', `http://localhost:9090/api/historical`);
xhr.send();




//xhr.addEventListener("hitorical", priceList);
//xhr.open('GET', `${URLHistoricals}`+"/SPY");
//xhr.send();
