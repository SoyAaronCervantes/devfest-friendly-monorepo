# DevfestMonorepo

Se trata de ver las debilidades que se tiene en un proyecto cuando se trata de reutilizar desde componentes hasta servicios que consumen una API.

La mejor forma de poder mover estos componentes a multiples proyectos en un solo repositorio es mediante Bibliotecas, una vez que se crean las bibliotecas podemos comenzar a desarrollar nuestro monorepo.

<hr />

## Comandos

#### Aplicaciones
El comando para crear una aplicación con angular es el siguiente:
```shell script
  ng g application my_application
```

Una vez generado esto, nos pedirá la configuración básica para una aplicación, las cuales son:
- Si queremos un modulo para las rutas [ RouterModule ]
- Que estilos usaremos *[ css, sass, less, etc. ]*.

Una vez que este proceso termine podemos levantar el servidor con el siguiente comando
```shell script
  ng s my_application
```

#### Bibliotecas
Ahora si lo que queremos es crear una biblioteca debemos utilizar el siguiente comando:

```shell script
ng g lib my-lib
```

> **Nota**
> 
> Si la biblioteca que usaremos es de uso exclusivo para un proyecto y no se desea que se publique en el *package.json* que se encuentra a dentro de la biblioteca debemos agregar la propiedad:
>
> ***private: true*** 
