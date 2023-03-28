# desafiofullstack-1-backend

## 1. Iniciando o backend localmente

- Após feito o clone do projeto em sua máquina acesse o diretório referente no terminal;
- Execute o seguinte comando para instalar todas as dependencias necessárias:

```
yarn
```

- É necessário possuir o instalador de pacotes yarn em sua máquina para o passo anterior funcionar, caso não tenha consulte a documentação: https://yarnpkg.com/ ;
- Com as dependencias já instaladas é necessário criar um banco de dados PostgreSQL ou utilizar algum préviamente criado;
- Após a criação do banco faça uma cópia do arquivo "dot.env.example", renomeie a cópia removendo o ".copy.example" tornando o nome do arquivo ".env";
- Tendo o arquivo ".env" na base do projeto o próximo passo a seguir é preencher as variáveis de ambiente correspondentes, ATENÇÃO AO PREENCHER A VARIÁVEL REFERENTE A URL DO BANCO DE DADOS, ex. de url: postgres://username:password@localhost:5432/database1;
- Com as variáveis de ambiente preenchidas corretamente o próximo passo é gerar a tabela no banco de dados executando a migration, para isso execute o seguinte comando no terminal:

```
yarn typeorm migration:run -d src/data-source.js
```

- Com a migração persistida no banco de dados e a tabela criada é hora de colocar o servidor para funcionar, execute o seguinte comando para o servidor iniciar localmente na porta definida no .env ou na porta 3030 definida por padrão:

```
yarn dev
```

- PRONTO!! O backend da aplicação já deve estar funcionando.

---
