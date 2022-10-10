function consultarEndereco() {
  const cep = document.querySelector("#cep");
  const resultado = document.querySelector(".dados");
  url = `https://viacep.com.br/ws/${cep.value}/json/`;

  if (cep.length != 8) {
    resultado.innerHTML = `<p>Insira um CEP com 8 dígitos.<p>`;
  }
  console.log(url);

  fetch(url).then((response) =>
    response.json().then(
      (dados) =>
        (resultado.innerHTML = `
        <p>Unidade Federal: ${dados.uf}</p>
        <p>Cidade: ${dados.localidade}</p>
        <p>Bairro: ${dados.bairro}</p>
        <p>Logradouro: ${dados.logradouro}</p>`)
    )
  );
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", consultarEndereco);
