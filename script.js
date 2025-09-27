function buscarCep() {
  let cep = document.getElementById('cep').value
  let url = `https://viacep.com.br/ws/${cep}/json/`


  if (cep.length !== 8) {
    alert('Insira 8 numero para a consulta do CEP')
  }

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        alert("CEP não encontrado");
      }
      else {
        document.getElementById('resultado').innerHTML =
          `<br><b class ='description'>Cep:</b> ${data.cep}` +
          `<br><b class ='description'>Logradouro:</b> ${data.logradouro}` +
          `<br><b class ='description' >Complemento:</b> ${data.complemento}` +
          `<br><b class ='description'>Unidade:</b> ${data.unidade}` +
          `<br><b class ='description'>Bairro:</b> ${data.bairro}` +
          `<br><b class ='description'>Localidade:</b> ${data.localidade}` +
          `<br><b class ='description'>UF:</b> ${data.uf}` +
          `<br><b class ='description'>Estado:</b> ${data.estado}` +
          `<br><b class ='description'>Região:</b> ${data.regiao}` +
          `<br><b class ='description'>Localidade:</b> ${data.localidade}` +
          `<br><b class ='description'>IBGE:</b> ${data.ibge}` +
          `<br><b class ='description'>GIA:</b> ${data.gia}` +
          `<br><b class ='description'>DDD:</b> ${data.ddd}` +
          `<br><b class ='description'>SIAFI:</b> ${data.siafi}`;
      }
    }).catch(error => {
      console.error('Erro:', error)
      alert("Erro ao buscar CEP")
    })
}


