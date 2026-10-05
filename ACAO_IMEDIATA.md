# 🚨 AÇÃO IMEDIATA: Corrigir 404 no Vercel

## ⚡ Solução Rápida (5 minutos)

### Passo 1: Verificar Configurações no Vercel

1. Acesse: **https://vercel.com/dashboard**
2. Clique no projeto **Protein Simple**
3. Vá em **Settings** → **General**

**ALTERE estas configurações:**

```
Framework Preset:     Vite
Build Command:        npm run build
Output Directory:     dist
Install Command:      npm install
```

**Clique em "Save"**

---

### Passo 2: Fazer Novo Deploy

1. Vá em **Deployments** (menu lateral)
2. Encontre o deployment mais recente
3. Clique nos **três pontos (⋯)** à direita
4. Clique em **Redeploy**
5. Aguarde 2-3 minutos

---

### Passo 3: Testar

Acesse: **https://saude-dusky-mu.vercel.app/**

Deve funcionar! ✅

---

## 🔍 Se Ainda Não Funcionar

### Verifique os Build Logs

1. No deployment, clique em **Build Logs**
2. Procure por:
   - ✅ "Build completed successfully"
   - ❌ Erros em vermelho

**Se houver erros, copie e me envie.**

---

### Teste Localmente

```bash
# No terminal, execute:
npm run build
npm run preview

# Acesse: http://localhost:4173
# Deve funcionar
```

---

## 📋 Checklist Rápido

- [ ] vercel.json existe na raiz
- [ ] No Vercel: Framework = "Vite"
- [ ] No Vercel: Output Directory = "dist"
- [ ] No Vercel: Build Command = "npm run build"
- [ ] Build Logs mostram sucesso
- [ ] Site carrega em https://saude-dusky-mu.vercel.app/

---

## 🆘 Precisa de Ajuda?

Me envie:
1. Screenshot das configurações do Vercel
2. Build Logs completos
3. Mensagem de erro exata

---

**Próximo passo:** Vá ao Vercel Dashboard e verifique as configurações agora! 🚀
