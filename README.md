# micro-frontend-with-single-spa

Esse repositório contém um exemplo de inicialização de três micro frontend
(spa, app1, app2) React orquestrados pelo micro frontend root-config utilizando
a biblioteca sigle-spa.

```
<div id="micro-frontend">
  <div id="micro-frontend-spa">
    <div id="micro-frontend-apps"></div>
  </div>
</div>
```

## Pré-requisitos

- Yarn
- Node

## Uso

### Modo de desenvolvimento

Inicialize os micro frontends (spa, app1, app2):

```
cd spa && yarn install && yarn start
cd app1 && yarn install && yarn start
cd app2 && yarn install && yarn start
```

Inicialize o micro frontend que vai 'orquestrar' os demais (root-config):

```
cd root-config && yarn install && yarn start
```
