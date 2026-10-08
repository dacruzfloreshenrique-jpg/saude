# 🔧 Debug: 404 NOT_FOUND no Vercel

## Diagnóstico

O erro 404 na raiz do site (`https://saude-dusky-mu.vercel.app/`) indica que o Vercel não está servindo o `index.html`.

**Causas mais prováveis:**
1. O build não está sendo executado no Vercel
2. O `outputDirectory` não está correto
3. Configuração do projeto no Vercel Dashboard está incorreta

---

## ✅ Solução Passo a Passo

### Passo 1: Verificar Configurações no Vercel Dashboard

1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Clique no projeto **Protein Simple**
3. Vá em **Settings** → **General**

**Verifique estas configurações:**

| Configuração | Valor Correto |
|--------------|---------------|
| **Framework Preset** | `Vite` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

**Se estiver diferente, corrija e salve.**

---

### Passo 2: Verificar Logs do Build

1. No Vercel Dashboard, vá em **Deployments**
2. Clique no deployment mais recente
3. Vá em **Build Logs**

**Procure por:**
- ✅ "Build completed successfully"
- ✅ "dist/index.html" nos arquivos gerados
- ❌ Erros de build ou warnings

**Se houver erros de build:**
- Copie o erro completo
- Verifique se todas as dependências estão instaladas
- Execute `npm run build` localmente para testar

---

### Passo 3: Forçar Novo Deploy

Depois de corrigir as configurações:

1. Vá em **Deployments**
2. Clique nos três pontos (⋯) do deployment mais recente
3. Clique em **Redeploy**
4. Aguarde o build completar

---

### Passo 4: Verificar vercel.json

O arquivo `vercel.json` deve estar **na raiz do projeto** com este conteúdo:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

**IMPORTANTE:** Não deve ter `"framework": "vite"` porque isso pode causar conflito.

---

### Passo 5: Testar Localmente

Antes de fazer novo deploy, teste localmente:

```bash
# 1. Limpe o build anterior
rm -rf dist

# 2. Faça o build
npm run build

# 3. Verifique se dist/ foi criado
ls -la dist/

# Deve mostrar:
# dist/
# ├── index.html
# └── assets/
#     ├── index-*.css
#     ├── index-*.js
#     └── vendor-*.js

# 4. Teste o preview local
npm run preview

# 5. Acesse http://localhost:4173
# Deve funcionar perfeitamente
```

---

## 🎯 Checklist de Debug

- [ ] **vercel.json** está na raiz do projeto
- [ ] **vercel.json** tem `outputDirectory: "dist"`
- [ ] **vercel.json** tem configuração de `rewrites`
- [ ] **vite.config.js** tem `build.outDir: 'dist'`
- [ ] **package.json** tem script `"build": "vite build"`
- [ ] **npm run build** gera `dist/index.html` sem erros
- [ ] No Vercel Dashboard, **Framework Preset** está como `Vite`
- [ ] No Vercel Dashboard, **Output Directory** está como `dist`
- [ ] No Vercel Dashboard, **Build Command** está como `npm run build`
- [ ] Build Logs mostram "Build completed successfully"

---

## 🔍 Se Ainda Não Funcionar

### Opção A: Deploy Manual via CLI

```bash
# 1. Instale o Vercel CLI
npm install -g vercel

# 2. Faça login
vercel login

# 3. Deploy para preview
vercel

# 4. Se funcionar, deploy para produção
vercel --prod
```

### Opção B: Verificar Estrutura do Projeto

Certifique-se de que a estrutura está assim:

```
projeto/
├── index.html          ← Na raiz
├── package.json        ← Na raiz
├── vercel.json         ← Na raiz
├── vite.config.js      ← Na raiz
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── ...
└── dist/               ← Gerado pelo build
    ├── index.html
    └── assets/
```

**NÃO deve ser:**
```
projeto/
└── src/
    └── index.html      ← ❌ ERRADO! Deve estar na raiz
```

### Opção C: Verificar se o Vercel Está Lendo vercel.json

Adicione um log temporário no `vercel.json`:

```json
{
  "buildCommand": "echo 'Building...' && npm run build && echo 'Build complete' && ls -la dist/",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Isso vai mostrar nos logs do Vercel se o build está sendo executado e se o `dist/` está sendo criado.

---

## 📊 Configuração Correta do Projeto

### vercel.json (FINAL)
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### vite.config.js
```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    sourcemap: false,
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
```

### package.json (scripts)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  }
}
```

---

## 🚀 Após Corrigir

1. **Commit das mudanças:**
   ```bash
   git add .
   git commit -m "Fix: Vercel deployment configuration"
   git push
   ```

2. **Verificar no Vercel Dashboard:**
   - Aguarde o novo deployment
   - Verifique os Build Logs
   - Confirme que "Build completed successfully"

3. **Testar o site:**
   - Acesse https://saude-dusky-mu.vercel.app/
   - Deve carregar a página inicial
   - Teste navegação entre páginas
   - Teste refresh em qualquer rota

---

## 💡 Dicas Importantes

1. **Sempre verifique os Build Logs** - Eles mostram exatamente o que está acontecendo
2. **Teste localmente primeiro** - Se funciona localmente, deve funcionar no Vercel
3. **Use `vercel --prod` via CLI** - Às vezes é mais confiável que o Git integration
4. **Limpe o cache do navegador** - Use Ctrl+Shift+R para forçar reload
5. **Verifique a URL** - Certifique-se de que está acessando a URL correta

---

## 📞 Se Nada Funcionar

Me envie:
1. Screenshot das configurações do projeto no Vercel Dashboard
2. Build Logs completos do último deployment
3. Conteúdo do `vercel.json`
4. Output do comando `npm run build` local

Com essas informações, posso identificar exatamente o que está errado.

---

**Status:** ⏳ Aguardando verificação das configurações no Vercel Dashboard
