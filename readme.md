# E-Commerce App - React Native

Este es un proyecto para la platafroma CoderHouse, para el curso de Desarrollo de Aplicaciones, es una aplicación de comercio electrónico desarrollada con React Native que ofrece la experiencia de un flujo de compra completa y fácil de usar.

## Flujo Ecommerce

### Pantalla principal de cuenta

- **Accediendo a la aplicacion:** Solo los usuarios registrados pueden acceder a la aplicacion ver los productos y realizar compras.
- **Perfil del usuario:** Muestra detalles del usuario, como foto y dirección.

### Al entrar en la aplicacion 

- El usuario ingresa a la aplicacion y se despliega un listado de los productos, de los cuales puede acceder al detalle de cada producto y realizar una compra. A través del nav menú , puede seleccionar la categoría de interés, y navegar por el carrito, las ordendes realizadas, como tambien acceder a los detalles del perfil.

### Pantalla de Categorías

- Muestra una selección de categorías en tarjetas.
- Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

### Pantalla de Productos

- Lista todos los productos en tarjetas con nombre y foto.
- Incluye un buscador para filtrar productos por nombre.
- Al hacer clic en un producto, se navega a la pantalla de detalles del producto.

### Pantalla de Detalles del Producto

  Al hacer click en un Item, se redireccionara a los detalles de dicho item, donde podras ver mas información del mismo, ademas de poder comprar la cantidad deseada de dicho producto.
- Proporciona una descripción detallada del producto.
- Muestra el precio y el stock disponible.
- Permite agregar el producto al carrito.

- **Pestaña 1 - Productos:** Categorías y productos (stack principal).
- **Pestaña 2 - Carrito:** Detalles del carrito de compras con resumen y botón para finalizar la orden.
- **Pestaña 3 - Órdenes:** Historial de órdenes realizadas.
- **Pestaña 4 - Perfil:** Información del usuario, ubicación y carga de imagen de perfil.

### Autenticación con Firebase

- Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
- Permite a los usuarios iniciar sesión y registrarse de manera segura.


## Tecnologías Utilizadas

- **Firebase Authentication:** Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
- **React Native Navigation Stack:** Gestiona la navegación entre pantallas.
- **React Native Navigation Buttom tap:** Gestiona la navegación entre pestañas.
- **Expo-Location:** Permite acceder y gestionar la ubicación del usuario.
- **Expo-Picker-Image:** Facilita la carga de imágenes de perfil.
- **Redux:** Centraliza y gestiona el estado de la aplicación.
- **RTK Query y Firebase:** Realiza operaciones de lectura/escritura en la base de datos.

## Instalación

1. Clona el repositorio: `git clone https://github.com/andreaq99/ProyectoCoderHouse`
2. Instala las dependencias: `npm install`
3. Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
4. Configura las credenciales de Firebase en tu proyecto.
5. Ejecuta la aplicación: `npm start`
