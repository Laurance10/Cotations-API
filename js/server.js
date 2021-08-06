const readline = require('readline-sync');
const axios = require('axios');
const token = "pk_89b69161b5c64cb4a50dc24bd3d4fc6c";

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
        Código: ${codigoAcao}
        Empresa: ${empresa}
        Preço Atual: ${precoAtual}
    `)
};

async function returnJSON(actions) {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${acao}/quote?token=${token}`);
    return response;
}

start();

