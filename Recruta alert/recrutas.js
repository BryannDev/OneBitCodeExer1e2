const primeironome = prompt("Informe o primeiro nome do recruta:")
const sobrenome = prompt("Informe o sobrenome do recruta:")
const campoDeEstudo = prompt("Informe o campo de estudo do recruta:")
const AnoDeNascimento = prompt("Informe o ano de nascimento do recruta:")

alert(
    "Recruta cadastrado com sucesso!\n " +
    "\nNome completo: "+ primeironome + " " + sobrenome + 
    "\nCampo de estudo: "+ campoDeEstudo + 
    "\nIdade: "+ (2022 - AnoDeNascimento)
  
)
