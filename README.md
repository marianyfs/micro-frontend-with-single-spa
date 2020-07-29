# micro-frontend-with-single-spa

Esse repositório contém um exemplo de inicialização de três micro frontend
(spa, app1, app2) React orquestrados pelo micro frontend root-config utilizando
a biblioteca sigle-spa.

- Single SPA https://single-spa.js.org/
- React https://reactjs.org/
- React Bootstrap https://react-bootstrap.github.io/
- SASS https://sass-lang.com/

```
<template id="single-spa-layout">
    <single-spa-router>
      <div>
        <application name="@myf/spa"></application>
        <div>
          <route default>
            <application name="@myf/app1"></application>
          </route>
          <route path="app2">
            <application name="@myf/app2"></application>
          </route>
        </div>
      </nav>
    </single-spa-router>
  </template>
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

Inicialize o miro frontend que disponibiliza os componetes React e aplica o styleguide:
```
cd styleguide && yarn install && yarn start
```

Inicialize o micro frontend que vai 'orquestrar' os demais (root-config):
```
cd root-config && yarn install && yarn start
```
