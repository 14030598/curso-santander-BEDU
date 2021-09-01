# Reto 2
_Utiliza Postman o Insomnia para resolver los siguientes puntos:_

1. Crea una nueva mascota siguiendo el ejemplo 2, pero cambia el atributo `name` y opcionalmente la url de `photoUrls` añadiendo una nueva imagen. También cambia la propiedad `id `a una que tu elijas y guarda el `id` con cuidado.

1. Modifica el recurso que acabas de crear cambiando el nombre. Para esto deberás hacer una petición `PUT` con el id del objeto a modificar cómo se ejemplifica en la [documentación de esta API](https://petstore.swagger.io/#/pet/updatePet):


```json
{
  "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
}
```