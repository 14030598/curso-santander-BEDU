# Reto 1
_Llena la siguiente tabla sobre las respuestas a peticiones_

|Código	|Descripción||
|----|-----------|-|
|102| _Processing_ - **Procesando** | _Indica que el servidor ha recibido la solicitud y aún se encuentra procesandola, por lo que no hay respuesta disponible._ |
|202| _Accepted_ - **Aceptado** | _La solicitud se ha recibido, pero aún no se ha actuado._ |
|206| _Partial Content_ - **Contenido parcial** | _La petición servirá parcialmente el contenido solicitado._ |
|300| _Multiple Choice_ - **Multiples opciones** | _Esta solicitud tiene más de una posible respuesta. User-Agent o el usuario debe escoger uno de ellos. No hay forma estandarizada de seleccionar una de las respuestas._|
|304| _Not Modified_ - **No modificada** | _Usada para propósitos de "caché". Le indica al cliente que la respuesta no ha sido modificada. Entonces, el cliente puede continuar usando la misma versión almacenada en su caché._|
|400| _Bad Request_ - **Solicitud incorrecta** | _Significa que el servidor no pudo interpretar la solicitud dada una sintaxis inválida._ |
|401| _Unauthorized_ - **No autorizado** | _Es necesario autenticar para obtener la respuesta solicitada_|
|418| _I'm a teapot_ **Soy una tetera** | _El servidor se rehúsa a intentar hacer café con una tetera._ **Este error es una referencia al Hyper Text Coffee Pot Control Protocol, creado como parte de una broma del April Fools' de 1998**|
|501| _Not Implemented_ **No implementada** | _El método solicitado no está soportado por el servidor y no puede ser manejado. Los únicos métodos que los servidores requieren soporte (y por lo tanto no deben retornar este código) son GET y HEAD_ |
|511| _Network Authentication Required_ **Requiere Autenticación de Red**| _Indica que el cliente necesita autenticar para ganar acceso a la red._ |