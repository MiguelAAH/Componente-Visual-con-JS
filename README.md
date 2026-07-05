# Componente-Visual-con-JS
Un Toggle Button para poder cambiar de el color original a un modo oscuro 
# PORTADA
* **Institución:** Instituto Tecnológico de Oaxaca
* **Carrera:** Ingeniería en Sistemas Computacionales
* **Materia:** Programación Web
* **Estudiante:** Miguel Alberto Alonso Heredia
* **Tema:** Componente Visual Reutilizable en JavaScript
* **Grupo:** 7SE
 
## ¿Qué problema resuelve?
Las pantallas con colores muy blancos llegan a lastimar la vista, mi boton resuelve ese problema haciendo que los colores originales pasen a colores oscuros o mejor dicho negro.

Instalación y Estructura

Para integrar este componente en cualquier proyecto web, asegúrate de mantener la siguiente estructura de archivos:

```text
mi-proyecto/
├── css/
│   └── toggle.css
├── js/
│   └── toggle.js
└── index.html
```
Vincula la hoja de estilos en el <head> y el script de lógica al final del <body>:
```<head>
    <link rel="stylesheet" href="css/toggle.css">
</head>
<body>
    <script src="js/toggle.js"></script>
</body>
```
## Ejemplo de Implementación
```
<div id="toggle-cafeteria" class="mi-contenedor-toggle"></div>

<form class="formulario-cafe">
    <h3>Únete al Club del Café</h3>
    <input type="text" placeholder="Nombre completo">
    <input type="email" placeholder="Correo electrónico">
    <button type="submit">Registrarse</button>
</form>

<script>
    const toggleCafe = new ToggleVisual('#toggle-cafeteria', {
        texto: "Activar Modo Lectura Nocturna",
        colorOscuro: "#1a1a1a" 
    });
</script>
```

## 1.Estado Inicial
<img width="1905" height="1033" alt="image" src="https://github.com/user-attachments/assets/87193941-2fae-494b-bcd3-f23384be2357" />


## 2.Modo oscuro Activado

<img width="1897" height="1023" alt="image" src="https://github.com/user-attachments/assets/4bae8688-d132-4384-aa04-15c0d9d0e916" />

## Video explicativo 


https://github.com/user-attachments/assets/cb64d080-4bae-4583-bf48-ea4c51d30a01

