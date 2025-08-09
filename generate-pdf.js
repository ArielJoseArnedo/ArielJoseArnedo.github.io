#!/usr/bin/env node

// Script para generar PDF del portfolio
// Requiere: npm install puppeteer

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    console.log('🚀 Generando PDF del portfolio...');
    
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    try {
        const page = await browser.newPage();
        
        // Configurar viewport para mejor calidad
        await page.setViewport({
            width: 1200,
            height: 800,
            deviceScaleFactor: 2
        });
        
        // Cargar la página HTML para PDF
        const htmlPath = path.join(__dirname, 'portfolio-pdf.html');
        const fileUrl = `file://${htmlPath}`;
        
        console.log('📄 Cargando página:', fileUrl);
        await page.goto(fileUrl, {
            waitUntil: 'networkidle0',
            timeout: 30000
        });
        
        // Esperar a que las fuentes se carguen
        await page.waitForTimeout(2000);
        
        // Configuración del PDF
        const pdfOptions = {
            path: 'Ariel_Arnedo_Portfolio.pdf',
            format: 'A4',
            printBackground: true,
            margin: {
                top: '0.5in',
                right: '0.5in',
                bottom: '0.5in',
                left: '0.5in'
            },
            preferCSSPageSize: true,
            displayHeaderFooter: false
        };
        
        console.log('📑 Generando PDF...');
        await page.pdf(pdfOptions);
        
        console.log('✅ PDF generado exitosamente: Ariel_Arnedo_Portfolio.pdf');
        
    } catch (error) {
        console.error('❌ Error generando PDF:', error);
    } finally {
        await browser.close();
    }
}

// Verificar si existe el archivo HTML
const htmlFile = path.join(__dirname, 'portfolio-pdf.html');
if (!fs.existsSync(htmlFile)) {
    console.error('❌ Error: No se encontró el archivo portfolio-pdf.html');
    console.log('Asegúrate de que el archivo portfolio-pdf.html existe en el directorio actual.');
    process.exit(1);
}

// Ejecutar la función
generatePDF().catch(console.error);
