# MARVEL's WEB

Web que muestra los personajes de Marvel en una grid con busqueda por nombre, donde se pueden seleccionar los favoritos y localizarlos posteriormente. 
Tambien tiene una página de detalle del personaje, donde se pueden ver los comics donde aparece.
Los datos se obtienen de la api de Marvel. 

Se puede visualizar en la ruta http://34.245.129.52

Para instalarlo se ha creado un servidor EC2 con la versión de producción de next y un nginx en AWS con pm2.

## Tecnologías
- NextJs 14
- Node 18
- SASS
- Styled-components

## Instalación

Clonar el repositorio en local:

```
> git clone https://github.com/GeekeBrains/marvel-web.git
> cd marvel-web
> npm install
```

## Arraque en modo Desarrollo

```
> npm run dev
```

Esto inicia el servidor y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

## Arranque en modo Producción:

Se han añadido estos script que cargaran el next en modo optimizado en el pueto 3000
```
> npm run build
> npm run start
```


## Testing
Se han realizado algunos test. Se pueden ejecutar con:

```
> npm run test
```

## Notas
Se utilizan Linters y Prettier para formatear el código.
Para los estilos se utiliza Sass y styled-components para las animaciones.

