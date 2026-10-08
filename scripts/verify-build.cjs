#!/usr/bin/env node

/**
 * Script de verificação pós-build
 * Garante que todos os arquivos necessários para o Vercel existem
 */

const fs = require('fs');
const path = require('path');

const requiredFiles = [
  'dist/index.html',
  'dist/_redirects',
  'dist/404.html'
];

const requiredDirs = [
  'dist/assets'
];

let hasErrors = false;

console.log('\n🔍 Verificando build output...\n');

// Verificar arquivos
requiredFiles.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} existe`);
  } else {
    console.error(`❌ ${file} NÃO ENCONTRADO`);
    hasErrors = true;
  }
});

// Verificar diretórios
requiredDirs.forEach(dir => {
  if (fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
    const files = fs.readdirSync(dir);
    console.log(`✅ ${dir}/ existe (${files.length} arquivos)`);
  } else {
    console.error(`❌ ${dir}/ NÃO ENCONTRADO`);
    hasErrors = true;
  }
});

// Verificar se index.html tem conteúdo
if (fs.existsSync('dist/index.html')) {
  const content = fs.readFileSync('dist/index.html', 'utf8');
  if (content.includes('<div id="root"></div>')) {
    console.log('✅ index.html tem conteúdo válido');
  } else {
    console.error('❌ index.html parece estar vazio ou corrompido');
    hasErrors = true;
  }
}

// Verificar _redirects
if (fs.existsSync('dist/_redirects')) {
  const content = fs.readFileSync('dist/_redirects', 'utf8');
  if (content.includes('/*') && content.includes('/index.html')) {
    console.log('✅ _redirects configurado corretamente');
  } else {
    console.error('❌ _redirects não está configurado corretamente');
    hasErrors = true;
  }
}

console.log('\n' + (hasErrors ? '❌ Verificação falhou!' : '✅ Verificação concluída com sucesso!') + '\n');

process.exit(hasErrors ? 1 : 0);
