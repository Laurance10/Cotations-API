const readline = require('readline-sync');
const axios = require('axios');

function searchActions() {  
    return readline.question('Digite o código da ação: ')
};

async function start() {
    const action = searchActions();
    const api = await returnJSON(actions);

    const codigoAcao = api.data.symbol;
    const empresa = api.data.companyName;
    const precoAtual = api.data.latestPrice;

    console.log(`
        Código: ${symbol}
        Empresa: ${companyName}
        Preço Atual: ${latestPrice}
    `)
};

async function returnJSON(actions) {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${acao}/quote?token=${token}`);
    return response;
}

start();

