function consultarEndereco() {
  const cep = document.querySelector("#cep");
  const resultado = document.querySelector(".dados");
  url = `https://viacep.com.br/ws/${cep.value}/json/`;

  if (cep.length != 8) {
    resultado.innerHTML = `<p>Insira um CEP com 8 dígitos.<p>`;
  }
  console.log(url);

  fetch(url).then((response) =>
    response
      .json()
      .then((data) => (resultado.innerHTML = `<p>${data.bairro}</p>`))
  );
}

const btn = document.querySelector(".btn");

btn.addEventListener("click", consultarEndereco);
