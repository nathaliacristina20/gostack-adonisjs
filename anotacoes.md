Para instalar o CLI do Adonis

  npm install -g @adonisjs/cli


Para ver os comandos disponiveis no Adonis

  adonis


Para receber ajuda de um comando especifico

  adonis new -h


Para criar uma nova aplicacao

  adonis new Nome --api-only


Iniciar servidor 

	adonis serve --dev


Para listar todas rotas existentes

	adonis route:list


Para rodar as migrations

	adonis migration:run


Para desfazer as migrations

	adonis migration:rollback


Para criar um model

	adonis make:model Nome


Para criar um controller

	adonis make:controller Nome


Para criar um model juntamente com migration e controller

	adonis make:model Nome -m -c


Para criar validacao

  adonis make:validator Nome


Para criar tratamento de erro

  adonis make:ehandler
