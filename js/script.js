$(document).ready(function () {
    console.log("Pagina Carregada");
});

$("#consultar").click(function () {
    var acao = $("input[name='acao']").val()
    var token = "pk_89b69161b5c64cb4a50dc24bd3d4fc6c";
    
    $.ajax({
        url: `https://cloud.iexapis.com/stable/stock/${acao}/quote?token=${token}`,
        type: 'GET',
        dataType: 'json',
        success: function (valores) {
            console.log(valores)
            $("#acoes").html(`

            <div class="jumbotron text-center">
            <table class="table table-dark">
            
            <thead>
            
              <tr>
                <th scope="col">Codigo Ação</th>
                <th scope="col">Empresa</th>
                <th scope="col">Preço Atual</th>
              </tr>
              
            </thead>
            <tbody>
              <tr>
                
                <td>${valores.symbol}</td>
                <td>${valores.companyName}</td>
                <td>${valores.latestPrice}</td>
                 
              </tr>

            </tbody>
                     
          </table>
          <span class="credit">Por: IEX Trading</span>  
          </div>
            `)
        },
        error: function (err) {
           alert('Ação não encontrada! Verifique o código e tente novamente!');
        }
    });
});

