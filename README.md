# RentX
An API to serve as a Rent Cars Service. It was built for studies purposes... 


It consists on a REST API for login, sign up, authentication, and controlling the renting car services. 
 

## Functionalities
* Sign up / Login / Authentication
* TODO
* TODO

## Tech/framework used
* Node.js
* Express
* PostgreSQL

## Installation - yarn
### Prerequisites

TODO

### Installing
Cloning the Repository

```
$ git clone https://github.com/thiagosteps227/rentx
```

```
$ yarn
```
or
```
$ npm install
```

## Running
With all dependencies installed and the environment properly configured, you can now run the REST API.


## Built With

- [Node.js](https://facebook.github.io/nodejs/) - Build the native app using JavaScript and React
- [ESlint](https://eslint.org/) - Linter
- [Prettier](https://prettier.io/) - Code Formatter
- [Babel](https://babeljs.io/) - JavaScript Compiler

## Contributing

You can send how many PR's do you want, I'll be glad to analyse and accept them! And if you have any question about the project...

Email-me: thiagosteps@gmail.com

Connect with me at [LinkedIn](https://www.linkedin.com/in/thiago-dos-passos-075b171a3/)

Thank you!

# Use Cases

# Registering Cars

**RF** 
Must be possible to register a new Car
Must be possible to list all the categories


**RN** => Business rules
Must not be possible to register a new car with existing plate number
The new car must be registered as available (default)
* The user responsible for the car registering must be an admin user.

# Cars listing

**RF**
Must be possible to list all cars available
Must be possible to list all cars available by car categories
Must be possible to list all cars available by car brand
Must be possible to list all cars available by car name

**RN**
The user is not required to be logged in the system


# Registering car specifications

**RF**
Must be possible to register a car specification to a car
Must be possible to list all specifications
Must be possible to list all cars

**RN**
Nao deve ser possivel cadastrar uma especificacao para um carro nao cadastrado.
Nao deve ser possivel cadastrar uma especificao ja existente para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possivel cadastrar a imagem do carro.
Deve ser possivel listar todos os carros.

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuario deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuario responsavel pelo cadastro deve ser um usuario administrador.

# Aluguel de carro

**RF**
Deve ser possivel cadastrar um aluguel

**RN**
O aluguel deve ter duracao minima de 24 horas.
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo usuario.
Nao deve ser possivel cadastrar um novo aluguel caso ja exista um aberto para o mesmo carro.
O usuario deve estar logado na aplicacao
Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível
# rentx

# Devolução de carro

**RF**
Deve ser possível realizar a devolução de um carro

**RN**
Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa.
Ao realizar a devolução, o carro deverá ser liberado para outro aluguel.
Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel.
Ao realizar a devolução, deverá ser calculado o total do aluguel.
Caso o horário de devolução seja superior ao horário previsto de entrega,
deverá ser cobrada multa proporcional aos dias de atraso.
Caso haja multa, deverá ser somado ao total do aluguel.

# Recuperar Senha

**RF**
- Deve ser possível o usuário recuperar a senha informando o e-mail
- O usuário deve receber um e-mail com o passo a passo para a recuperação da senha
- O usuário deve conseguir inserir uma nova senha

**RN**
- O usuário precisa informar uma nova senha
- O link enviado para a recuperação deve expirar em 3 horas.
