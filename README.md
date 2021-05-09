# Util-functions

Repositorio de funciones reutilizables en multiples proyectos

Documentación rapida

**Time (tiempo)** : Funciones enfocadas en fechas o tiempos

* *getTimeZone :* Retorna la zona horaria de tu País. Ejemplo en Perú retorna -5 por GTM-5

>| Parametro    | Requerido | Tipo  |
>|:------------:|:---------:|:-----:|
>|date          | No        |Date   |

* *getLastBirthday :* Retorna tu ultima fecha de cumpleaños en formato Date

>| Parametro    | Requerido | Tipo  |
>|:------------:|:---------:|:-----:|
>|birthDate     | Si        |string |

* *getAge :* Retorna la edad en dias, meses y años.

>| Parametro    | Requerido | Tipo  |
>|:------------:|:---------:|:-----:|
>|birthDate     | Si        |string |

* *getAPIFormat :* Retorna una fecha en formato aceptado por bases de datos como SQL Server o MySQL.

>| Parametro    | Requerido | Tipo  |
>|:------------:|:---------:|:-----:|
>|date    | No        |Date |

* *getThisYear :* Retorna el año actual.

**Strings (cadenas de caracteres)** 

* *isUrl :* Evalua si una cadena de caracteres es una URL.

>| Parametro    | Requerido | Tipo  |
>|:------------:|:---------:|:-----:|
>|str    | Si        |string |