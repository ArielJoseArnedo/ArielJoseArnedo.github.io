#!/bin/bash

# Script para servir la PWA localmente
# Uso: ./serve.sh o bash serve.sh

PORT=${1:-8000}

echo "🚀 Iniciando servidor local para PWA..."
echo "📂 Directorio: $(pwd)"
echo "🌐 Puerto: $PORT"
echo ""
echo "Abre tu navegador en: http://localhost:$PORT"
echo "Para probar en móvil usa tu IP local: http://$(ipconfig getifaddr en0 2>/dev/null || hostname -I | cut -d' ' -f1):$PORT"
echo ""
echo "Presiona Ctrl+C para detener el servidor"
echo ""

# Verificar si Python 3 está disponible
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m http.server $PORT
elif command -v node &> /dev/null; then
    npx http-server -p $PORT -c-1
else
    echo "❌ Error: No se encontró Python o Node.js"
    echo "Instala uno de estos para ejecutar el servidor local:"
    echo "- Python: https://python.org"
    echo "- Node.js: https://nodejs.org"
    exit 1
fi
