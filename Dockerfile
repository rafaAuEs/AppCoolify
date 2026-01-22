FROM node:18-alpine

WORKDIR /app

# Copiar package.json primero para aprovechar cache de Docker
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
