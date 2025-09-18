# 🎁 Proyecto: Amigo Secreto

Este proyecto es una aplicación sencilla desarrollada con **HTML**, **CSS** y **JavaScript**.  
Su objetivo es simular el tradicional juego de **Amigo Secreto**, donde los participantes ingresan sus nombres y se realiza un sorteo aleatorio para asignar un amigo secreto.

## 📖 Descripción

La aplicación permite:
- Agregar nombres de amigos en una lista.
- Validar que los nombres **no estén vacíos** y que **no se repitan**.
- Mostrar los amigos agregados en pantalla.
- Sortear un **amigo secreto al azar** cuando haya al menos 3 participantes.
- Reiniciar automáticamente el juego después del sorteo para comenzar de nuevo.

## 📂 Estructura del proyecto

```
amigo-secreto/
│── index.html # Página principal
│── style.css # Estilos
│── app.js # Lógica en JavaScript
│── assets/ # Imágenes utilizadas
└── README.md # Documentación del proyecto
```

<h2>⚙️ Instalación y ejecución</h2>

1. Clonar el repositorio

   ```git clone https://github.com/tuusuario/amigo-secreto.git```

2. Abrir el proyecto
3. Accede a la carpeta del proyecto.
4. Abre el archivo index.html en tu navegador preferido (no se necesitan dependencias ni instalación de librerías externas).

<h2>🛠️ Tecnologías utilizadas</h2>

<ul>HTML5 → estructura de la aplicación.</ul>
<ul>CSS3 → estilos y maquetación.</ul>
<ul>JavaScript → lógica del sorteo y validaciones.</ul>



<h2>🚀 Uso de la aplicación</h2>

**1. Escribe un nombre en el campo de texto y presiona "Añadir".**
- No se permiten campos vacíos.
- No se permiten números ni símbolos.
- No se permiten nombres repetidos.

**2. La lista de amigos se mostrará en pantalla.**
- Cuando haya al menos 3 nombres, presiona "Sortear amigo".

**3. El sistema elegirá un amigo secreto al azar y reiniciará la lista para jugar otra vez.**
