# TRAINING: GraphQL, MongoDB

## Instalación 🚀

yarn install <br>
o<br>
npm i

## Recursos 📦

ENDPOITNURL: http://localhost:7000/graphiql


## Operaciones ⚙️

CreateDev:
```
mutation {
  createDev(name: "Linus Torvalds", skills: "C") {
    _id
    name
    skills
  }
}
```
AllDevs:
```
{
  allDevs {
    _id
    name
    skills
  }
}
```

## Observaciones 🛠️

Estable solo con la version: "apollo-server-express": "^1.3.2".<br>
No operable con la version: "apollo-server-express": "^2.9.0".
