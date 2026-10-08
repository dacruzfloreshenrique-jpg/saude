# 🎯 GUIA PASSO A PASSO: Resolver 404 no Vercel

## ⚡ Solução Rápida (3 minutos)

### PASSO 1: Verificar Configurações no Vercel

1. Acesse: **https://vercel.com/dashboard**
2. Clique no seu projeto
3. Clique em **"Settings"** (menu lateral esquerdo)
4. Clique em **"General"**

### PASSO 2: Alterar Configurações

Encontre esta seção e altere:

```
┌─────────────────────────────────────────────────────────┐
│  Framework & Build                                       │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  Framework Preset:                                       │
│  ┌─────────────────────────────────────────┐            │
│  │ Other                             ▼    │ ← MUDE PARA │
│  └─────────────────────────────────────────┘   "Other"  │
│                                                          │
│  Build Command:                                          │
│  ┌─────────────────────────────────────────┐            │
│  │ npm run build                           │            │
│  └─────────────────────────────────────────┘            │
│                                                          │
│  Output Directory:                                       │
│  ┌─────────────────────────────────────────┐            │
│  │ dist                                    │            │
│  └─────────────────────────────────────────┘            │
│                                                          │
│              [ Save ]                                    │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

**IMPORTANTE:** Mude **Framework Preset** para **"Other"** (não "Vite")

Clique em **"Save"**

### PASSO 3: Fazer Redeploy

1. Clique em **"Deployments"** (menu lateral)
2. Encontre o último deployment
3. Clique nos **três pontos (⋯)** à direita
4. Clique em **"Redeploy"**
5. Aguarde 2-3 minutos

### PASSO 4: Testar

Acesse: **https://saude-dusky-mu.vercel.app/**

**Deve funcionar!** ✅

---

## 🆘 Se Ainda Não Funcionar

### Opção A: Usar Netlify (Mais Simples)

1. Acesse: **https://www.netlify.com/**
2. Clique em **"Sign up"** → Faça login com GitHub
3. Clique em **"Add new site"** → **"Import an existing project"**
4. Selecione seu repositório
5. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. Clique em **"Deploy site"**

**Netlify é mais simples para SPAs e geralmente funciona sem problemas.**

### Opção B: Deploy via CLI

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

---

## 📋 Checklist Rápido

- [ ] Framework Preset = **"Other"** (não "Vite")
- [ ] Build Command = `npm run build`
- [ ] Output Directory = `dist`
- [ ] Clicou em **"Save"**
- [ ] Fez **Redeploy**
- [ ] Aguardou o build completar
- [ ] Testou a URL

---

## 🎯 Resumo

**Problema:** Erro 404 na raiz do site

**Solução:** Mudar Framework Preset para **"Other"** no Vercel Dashboard

**Passos:**
1. Settings → General
2. Framework Preset → "Other"
3. Save
4. Redeploy
5. Testar

**Se não funcionar:** Use Netlify ou deploy via CLI

---

**Próximo passo:** Vá ao Vercel Dashboard AGORA e mude Framework Preset para "Other"! 🚀
