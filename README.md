# App Coolify - Documentación

##  Descripción del Proyecto

Aplicación web Node.js desplegada con **Coolify** en una máquina virtual Ubuntu ejecutándose en VirtualBox. El objetivo es demostrar cómo Coolify permite desplegar aplicaciones de forma sencilla y acceder a ellas desde el sistema host (Windows).

---

##  Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Node.js | 18+ | Runtime de JavaScript |
| Express | 4.18.x | Framework web |
| Docker | - | Contenedorización |
| Coolify | - | Plataforma de despliegue |
| VirtualBox | - | Virtualización |
| Ubuntu | 22.04+ | Sistema operativo |

---

##  Estructura del Proyecto

```
AppCoolify/
├── index.js          # Servidor Express principal
├── package.json      # Dependencias y scripts
├── Dockerfile        # Configuración para Docker
├── .gitignore        # Archivos ignorados por Git
└── README.md         # Esta documentación
```

---

##  Endpoints de la Aplicación

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/` | Página de bienvenida |
| GET | `/health` | Health check (JSON) |

---

##  Configuración de Red (VirtualBox)

### Port Forwarding configurado:

| Servicio | Puerto Host | Puerto VM | Acceso desde Windows |
|----------|-------------|-----------|---------------------|
| Coolify | 8000 | 8000 | `http://localhost:8000` |
| App | 3000 | 3000 | `http://localhost:3000` |

---

##  Despliegue con Coolify

### Paso 1: Acceder a Coolify
1. Abrir navegador en Ubuntu: `http://localhost:8000`
2. Iniciar sesión con las credenciales configuradas

### Paso 2: Crear nuevo proyecto
1. Click en **"+ New Project"**
2. Dar un nombre al proyecto (ej: "app-demo")

### Paso 3: Añadir recurso
1. Dentro del proyecto, click en **"+ New"** → **"Public Repository"**
2. Pegar la URL del repositorio de GitHub
3. Seleccionar rama: `main`

### Paso 4: Configurar despliegue
1. Coolify detectará automáticamente el `Dockerfile`
2. Configurar puerto expuesto: `3000`
3. Click en **"Deploy"**

### Paso 5: Verificar
1. Esperar a que el despliegue termine
2. Acceder desde Windows: `http://localhost:3000`

---

##  Ejecución Local (Sin Coolify)

```bash
# Instalar dependencias
npm install

# Ejecutar servidor
npm start

# Acceder en navegador
http://localhost:3000
```

---

##  Comandos Git Utilizados

```bash
# Inicializar repositorio
git init

# Añadir archivos
git add .

# Primer commit
git commit -m "Initial commit: App Node.js para Coolify"

# Conectar con GitHub
git remote add origin https://github.com/USUARIO/AppCoolify.git

# Subir a GitHub
git push -u origin main
```

---

##  Verificación del Funcionamiento

1. **Desde Ubuntu (VM)**: `curl http://localhost:3000`
2. **Desde Windows (Host)**: Abrir `http://localhost:3000` en navegador

---

Proyecto desarrollado como demostración del uso de Coolify para la asignatura.

**Fecha**: Enero 2026
