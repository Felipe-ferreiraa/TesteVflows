let submit = document.getElementById('submit')
let anexo = document.getElementById('anexo')


let qtd = document.getElementById('qtd')
let valor_un = document.getElementById('valor_un')
let valor_total
let qtd2 = document.getElementById('qtd2')
let valor_un2 = document.getElementById('valor_un2')
let valor_total2

let i = 0;
let produtos = []
let fornecedores = []

valor_un.addEventListener('change',function(){
    valor_total = document.getElementById('valor_total')
    valor_total.value = qtd.value * valor_un.value
})
qtd.addEventListener('change',function(){
    valor_total = document.getElementById('valor_total')
    valor_total.value = qtd.value * valor_un.value
})

valor_un2.addEventListener('change',function(){
    valor_total2 = document.getElementById('valor_total2')
    valor_total2.value = qtd2.value * valor_un2.value
})
qtd2.addEventListener('change',function(){
    valor_total2 = document.getElementById('valor_total2')
    valor_total2.value = qtd2.value * valor_un2.value
})

function adicionarProduto() {
    const produto = document.getElementById('produto').value;
    const und = document.getElementById('und').value;
    const qtd = parseFloat(document.getElementById('qtd').value) || 0;
    const valorUn = parseFloat(document.getElementById('valor_un').value) || 0;
    const valorTotal = parseFloat(document.getElementById('valor_total').value) || 0;
    const produto2 = document.getElementById('produto2').value;
    const und2 = document.getElementById('und2').value;
    const qtd2 = parseFloat(document.getElementById('qtd2').value) || 0;
    const valorUn2 = parseFloat(document.getElementById('valor_un2').value) || 0;
    const valorTotal2 = parseFloat(document.getElementById('valor_total2').value) || 0;

    if(!produto || !und || !qtd || !valorUn || !valorTotal){
        alert("preencha os campos do produto - 1 e Obrigatorio para adicionar produto.")
    }else{
        const produtoObj = {
            produto: produto,
            und: und,
            qtd: qtd,
            valorUn: valorUn,
            valorTotal: valorTotal
        };
        produtos.push(produtoObj);

        // Limpa os campos do formulário
        document.getElementById('produto').value = '';
        document.getElementById('und').value = 'Kg';
        document.getElementById('qtd').value = '';
        document.getElementById('valor_un').value = '';
        document.getElementById('valor_total').value = '';

        // Exemplo de uso da lista de produtos
        console.log(produtos);
        
        
        //caso tenha um segundo produto
        if(produto2 && und2 && qtd2 && valorUn2 && valorTotal2){
            const produtoObj = {
                produto2: produto,
                und2: und,
                qtd2: qtd,
                valorUn2: valorUn,
                valorTotal2: valorTotal
            };
            produtos.push(produtoObj);
    
            document.getElementById('produto2').value = '';
            document.getElementById('und2').value = 'Kg';
            document.getElementById('qtd2').value = '';
            document.getElementById('valor_un2').value = '';
            document.getElementById('valor_total2').value = '';
    
            // Exemplo de uso da lista de produtos
            console.log(produtos);  
        }
    }
}
function clear_p1(){
    document.getElementById('produto').value = '';
    document.getElementById('und').value = 'Kg';
    document.getElementById('qtd').value = '';
    document.getElementById('valor_un').value = '';
    document.getElementById('valor_total').value = '';
}
function clear_p2(){
    document.getElementById('produto2').value = '';
    document.getElementById('und2').value = 'Kg';
    document.getElementById('qtd2').value = '';
    document.getElementById('valor_un2').value = '';
    document.getElementById('valor_total2').value = '';
}

document.getElementById('ad_produto').addEventListener('click', adicionarProduto);
document.getElementById('clear_p1').addEventListener('click', clear_p1);
document.getElementById('clear_p2').addEventListener('click', clear_p2);


submit.addEventListener('click',function(){
    const razao = document.getElementById('razaosocial').value;
    const cnpj = document.getElementById('cnpj').value;
    const nome_fanta = document.getElementById('nome_fanta').value;
    const ins_est = document.getElementById('ins_est').value;
    const cep = document.getElementById('cep').value;
    const ins_mun = document.getElementById('ins_mun').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const Complemento = document.getElementById('Complemento').value;
    const bairro = document.getElementById('bairro').value;
    const municipio = document.getElementById('municipio').value;
    const estado = document.getElementById('estado').value;
    const contato = document.getElementById('contato').value;
    const cont_tel = document.getElementById('cont_tel').value;
    const cont_email = document.getElementById('cont_email').value;

    if(!razao || !cnpj || !nome_fanta || !cep || !endereco || !numero || !Complemento 
        || !bairro || !municipio || !estado || !contato || !cont_tel || !cont_email || produtos.length == 0)
    {
        alert("Todos os campos sao obrigatorios menos INSCRICAO ESTADUAL e INSCRICAO MUNICIPAL e precisa de pelo menos 1 produto cadastrado")
    }else{
        const fornecedorOBJ = {
            razao: razao,
            cnpj: cnpj,
            nome_fanta: nome_fanta,
            ins_est: ins_est,
            cep: cep,
            ins_mun: ins_mun,
            endereco: endereco,
            numero: numero,
            Complemento: Complemento,
            bairro: bairro,
            municipio: municipio,
            estado: estado,
            contato: contato,
            cont_tel: cont_tel,
            cont_email: cont_email,
            produtos: produtos
        }

        fornecedores.push(fornecedorOBJ);

        console.log(fornecedores)
    }
})
