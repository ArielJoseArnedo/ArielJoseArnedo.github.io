# CV/Portafolio de Ariel Arnedo

## 🚀 PWA - Aplicación Web Progresiva

Este es el portafolio profesional de **Ariel Arnedo**, Ingeniero de Sistemas y Sr Software Developer, desarrollado como una Progressive Web App (PWA).

### ✨ Características

- **Responsive Design**: Optimizado para móviles, tablets y desktop
- **PWA**: Instalable como aplicación nativa
- **Offline First**: Funciona sin conexión a internet
- **Performance**: Carga rápida y optimizada
- **SEO Friendly**: Optimizado para buscadores
- **Animaciones**: Transiciones suaves y efectos visuales

### 🛠️ Tecnologías Utilizadas

- HTML5
- CSS3 (Grid, Flexbox, Animations)
- JavaScript (ES6+)
- Service Workers
- Web App Manifest
- Font Awesome Icons
- Google Fonts (Inter)

### 📱 Instalación como PWA

1. Abre la página web en tu navegador
2. Busca el botón "Instalar App" en la esquina inferior derecha
3. Sigue las instrucciones del navegador para instalar
4. La aplicación estará disponible en tu pantalla de inicio

### 🎨 Iconos

Para generar los iconos de la PWA:

1. Abre `generate-icons.html` en tu navegador
2. Los iconos se descargarán automáticamente
3. Coloca los archivos PNG en la carpeta `images/`

Alternativamente, puedes usar herramientas online como:
- [PWA Icon Generator](https://tools.crawlink.com/tools/pwa-icon-generator)
- [RealFaviconGenerator](https://realfavicongenerator.net/)

### 📂 Estructura del Proyecto

```
my_cv/
├── index.html              # Página principal
├── portfolio-pdf.html      # Versión optimizada para PDF
├── pdf-generator.html      # Interfaz para generar PDF
├── generate-pdf.js         # Script Node.js para PDF automático
├── manifest.json          # Manifiesto PWA
├── sw.js                  # Service Worker
├── generate-icons.html    # Generador de iconos
├── icon-generator.html    # Generador mejorado de iconos
├── robots.txt            # SEO
├── css/
│   └── styles.css        # Estilos principales
├── js/
│   └── app.js           # Funcionalidad JavaScript
└── images/
    ├── foto_profile.jpeg # Foto de perfil
    ├── base_portafolio_guia.png # Imagen de referencia
    └── icon-*.png       # Iconos PWA (generar)
```

### 🚀 Despliegue

Para desplegar la aplicación:

1. **GitHub Pages**: Sube el código a un repositorio y activa GitHub Pages
2. **Netlify**: Conecta tu repositorio o arrastra la carpeta
3. **Vercel**: Conecta tu repositorio para despliegue automático
4. **Firebase Hosting**: Usa Firebase CLI para desplegar

### 🔧 Configuración

#### Personalización de Datos

Para personalizar la información:

1. **Datos personales**: Edita el HTML en `index.html`
2. **Foto de perfil**: Reemplaza `images/foto_profile.jpeg`
3. **Colores**: Modifica las variables CSS en `styles.css`
4. **Información de contacto**: Actualiza la sección `.contact-info`

#### SEO y Metadata

- Actualiza el `<title>` y meta tags en `index.html`
- Modifica `manifest.json` con tu información
- Ajusta `robots.txt` según tus necesidades

### 📈 Performance

La aplicación está optimizada para:

- **Core Web Vitals**: LCP, FID, CLS
- **Lighthouse Score**: 90+ en todas las categorías
- **Carga inicial**: < 3 segundos
- **Funcionamiento offline**: Completo

### 🎯 Funcionalidades

- ✅ Diseño responsive
- ✅ Navegación suave
- ✅ Animaciones CSS
- ✅ Service Worker
- ✅ Manifiesto PWA
- ✅ Modo offline
- ✅ Instalación nativa
- ✅ Optimización SEO
- ✅ Accesibilidad
- ✅ Selector de idioma (ES/EN)
- ✅ Generación de PDF

### 📄 Generación de PDF

Para generar un PDF de la primera sección del portfolio:

#### **Método 1: Interfaz Web (Recomendado)**
1. Abre `pdf-generator.html` en tu navegador
2. Haz clic en "Vista Previa" para revisar el contenido
3. Haz clic en "Generar PDF"
4. En la nueva ventana, usa Ctrl+P (Cmd+P en Mac)
5. Selecciona "Guardar como PDF" y configura:
   - Tamaño: A4
   - Orientación: Vertical
   - Márgenes: Mínimos
   - ✅ Incluir gráficos de fondo

#### **Método 2: Node.js (Automático)**
```bash
# Instalar dependencias
npm run install-pdf

# Generar PDF automáticamente
npm run pdf-node
```

#### **Método 3: Script NPM**
```bash
# Abrir generador web
npm run pdf
```

**Características del PDF:**
- ✅ Primera sección del portfolio optimizada para impresión
- ✅ Botón "Ir a CV" enlaza a https://arieljosearnedo.github.io/
- ✅ Conserva colores y gradientes
- ✅ Incluye información de contacto y redes sociales
- ✅ Foto de perfil y estadísticas profesionales

### 📱 Compatibilidad

- Chrome/Edge 80+
- Firefox 75+
- Safari 13+
- iOS Safari 13+
- Android WebView 80+

### 🤝 Contribución

Si deseas contribuir o reportar un problema:

1. Crea un fork del repositorio
2. Crea una rama para tu feature
3. Realiza tus cambios
4. Envía un pull request

### 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

### 📞 Contacto

**Ariel Arnedo**
- Email: ariel.arnedo@email.com
- LinkedIn: [linkedin.com/in/arielarnedo](https://linkedin.com/in/arielarnedo)
- GitHub: [github.com/arielarnedo](https://github.com/arielarnedo)

---

Desarrollado con ❤️ por Ariel Arnedo
