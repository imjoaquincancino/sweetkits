# Configuración de MongoDB para SweetKit

## Opción 1: MongoDB Local

### Instalación
1. Descargar MongoDB Community Server desde [mongodb.com](https://www.mongodb.com/try/download/community)
2. Instalar siguiendo las instrucciones del instalador
3. Iniciar el servicio de MongoDB

### Configuración
```bash
# Crear archivo .env.local en la raíz del proyecto
MONGODB_URI=mongodb://localhost:27017/sweetkit
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Opción 2: MongoDB Atlas (Recomendado)

### Crear cuenta
1. Ir a [cloud.mongodb.com](https://cloud.mongodb.com)
2. Crear una cuenta gratuita
3. Crear un nuevo cluster

### Configuración
1. En el cluster, hacer clic en "Connect"
2. Seleccionar "Connect your application"
3. Copiar la cadena de conexión
4. Reemplazar `<password>` con tu contraseña

```bash
# Crear archivo .env.local en la raíz del proyecto
MONGODB_URI=mongodb+srv://usuario:password@cluster.mongodb.net/sweetkit?retryWrites=true&w=majority
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Verificación

Una vez configurado, los códigos QR se generarán automáticamente cuando:
1. Visites una página de receta individual
2. Accedas a `/admin/qr-codes` para ver todos los códigos
3. Hagas una petición a `/api/qr?recipeId=1`

## Estructura de la Base de Datos

La aplicación creará automáticamente la colección `qrcodes` con el siguiente esquema:

```javascript
{
  recipeId: Number,      // ID de la receta
  qrCode: String,        // Imagen QR en base64
  url: String,           // URL de la receta
  createdAt: Date,       // Fecha de creación
  updatedAt: Date        // Fecha de actualización
}
```
