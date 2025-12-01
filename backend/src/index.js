const { app, initializeApp } = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Initialize app (connect to Redis, etc.)
    await initializeApp();

    // Start server
    app.listen(PORT, () => {
      console.log('');
      console.log('╔════════════════════════════════════════════════════════════╗');
      console.log('║           🔐 Quantum Vault API Server                      ║');
      console.log('╚════════════════════════════════════════════════════════════╝');
      console.log('');
      console.log(`✓ Server running on port ${PORT}`);
      console.log(`✓ Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log('');
      console.log('📡 Endpoints:');
      console.log(`   - API:     http://localhost:${PORT}/api`);
      console.log(`   - Health:  http://localhost:${PORT}/api/health`);
      console.log(`   - Metrics: http://localhost:${PORT}/metrics`);
      console.log('');
      console.log('Press Ctrl+C to stop');
      console.log('');
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();
