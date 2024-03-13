# MARVEL's WEB

Web que muestra los personajes de Marvel en una grid con busqueda por nombre, donde se pueden seleccionar los favoritos y localizarlos posteriormente. 
Tambien tiene una página de detalle del personaje, donde se pueden ver los comics donde aparece.
Los datos se obtienen de la api de Marvel. 

La web se puede utilizar en esta ruta: https://main.d3n65a0bv5iudr.amplifyapp.com/
Esta alojada en AWS con Amplify.

## Instalación

Clonar el repositorio en local:

```
> git clone https://github.com/.../marvel-web.git
> cd marvel-web
> npm install
```

## Arraque en modo Desarrollo

```
> npm run dev
```

Esto inicia el servidor y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

## Arranque en modo Producción:

```
> npm run build
> npm run start
```

Esto iniciará el servidor de Next.js y podrás acceder a la aplicación en tu navegador visitando http://localhost:3000.

## Testing
Se han realizado algunos test. Se pueden ejecutar con:

```
> npm run test
```

## Notas
Se utilizan Linters y Prettier para formatear el código.
Para los estilos se utiliza Sass y styled-components para las animaciones.

