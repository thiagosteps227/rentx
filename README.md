# Cadastro de carro

**RF** 
Deve ser possivel cadastrar um novo carro.
Deve ser possivel listar todas as categorias.


**RN** => Regra de Negocio
Nao deve ser possivel cadastrar um carro com uma placa ja existente.
O carro deve ser cadastrado, por padrao, com disponibilidade.
* O usuario responsavel pelo cadastro dever ser um usuario administrador.

# Listagem de carros

**RF**
Deve ser possivel listar todos os carros disponiveis.
Deve ser possivel listar todos os carros disponiveis pelo nome da categoria.
Deve ser possivel listar todos os carros disponiveis pelo nome da marca.
Deve ser possivel listar todos os carros disponiveis pelo nome do carro.

**RN**
O usuario nao precisa estar logado no sistema.


# Cadastro de Especificacao no carro

**RF**
Deve ser possivel cadastrar uma especificacao para um carro
Deve ser possivel listar todas as especificacoes
Deve ser possivel listar todos os carros

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