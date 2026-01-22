const express = require('express');
const app = express();

// Puerto configurable por variable de entorno (importante para Coolify)
const PORT = process.env.PORT || 3000;

// Ruta raíz
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>App Coolify</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        .container {
          text-align: center;
          padding: 3rem;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 20px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
          max-width: 500px;
        }
        h1 {
          color: #667eea;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }
        p {
          color: #555;
          font-size: 1.2rem;
          line-height: 1.6;
        }
        .badge {
          display: inline-block;
          margin-top: 1.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 25px;
          font-size: 0.9rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 ¡Bienvenido a la aplicación!</h1>
        <p>Esta aplicación está desplegada con <strong>Coolify</strong> en Ubuntu.</p>
        <div class="badge">✅ Funcionando correctamente</div>
      </div>
    </body>
    </html>
  `);
});

// Endpoint de health check (útil para Coolify)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
