# ✅ Error Resolution & Azure Deployment Guide

## 🎯 What Went Wrong & Solutions

### Error 1: Location Policy Restriction
**Problem:** `RequestDisallowedByPolicy - Resource was disallowed by policy`

**Cause:** Your Azure subscription has location restrictions.

**Allowed Locations:**
- ✅ southeastasia
- ✅ swedencentral  
- ✅ centralindia (RECOMMENDED - USED)
- ✅ southindia
- ✅ westindia
- ✅ eastasia

**Solution:** Use Central India (centralindia) - Already applied ✅

---

### Error 2: GitHub Authentication Required
**Problem:** `GitHub access token is required to authenticate to your repositories`

**Cause:** Static Web Apps CLI requires GitHub Personal Access Token

**Solution:** Create GitHub Token:
1. Go to https://github.com/settings/tokens
2. Click "Generate new token"
3. Select scopes: `repo`, `workflow`, `read:org`
4. Copy the token
5. Use: `az staticwebapp create ... --github-token <YOUR_TOKEN>`

---

### Error 3: Azure CLI Authentication Issue
**Problem:** `Audience https://appservice.azure.com is not a supported MSI token audience`

**Cause:** Sandbox environment MSI token limitation

**Solution:** Use Azure Portal deployment instead (recommended) ✅

---

## ✅ RECOMMENDED: Deploy via Azure Portal

### Step 1: Access Azure Portal
```
https://portal.azure.com
```

### Step 2: Deploy Files via Portal

1. Go to **App Service** → **student-portal-app**
2. Click **Deployment Center** (left sidebar)
3. Select **GitHub** (if preferred)
4. Or use **Local Git**
5. Follow the wizard to deploy

### Step 3: Alternative - Upload via FTP

**Get FTP Credentials:**
```bash
az webapp deployment list-publishing-credentials \
  --resource-group student-portal-india \
  --name student-portal-app \
  --query "ftpPublishingUrl"
```

**Then use FTP client to upload files**

---

## 🚀 Alternative Deployment Methods

### Method 1: Using Git Push (Most Reliable)

```bash
# Add Azure as remote
cd /home/t/azuredev-8aca
git remote add azure https://student-portal-app.scm.azurewebsites.net:443/student-portal-app.git

# Get deployment user credentials
az webapp deployment user show

# Push to Azure
git push azure main
```

### Method 2: GitHub Actions (Automatic)

1. **Create GitHub Secrets:**
   - Go to GitHub Repository → Settings → Secrets
   - Add `AZURE_WEBAPP_PUBLISH_PROFILE` secret

2. **Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Azure

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to Azure Web App
      uses: azure/webapps-deploy@v2
      with:
        app-name: 'student-portal-app'
        publish-profile: ${{ secrets.AZURE_WEBAPP_PUBLISH_PROFILE }}
```

### Method 3: Direct Azure Portal Upload

1. Go to **Azure Portal**
2. Search **App Service** → **student-portal-app**
3. Click **Deployment Center**
4. Choose deployment method
5. Upload/authorize repository

---

## 📋 Current Deployment Status

| Component | Status | Details |
|-----------|--------|---------|
| Resource Group | ✅ Created | student-portal-india (Central India) |
| App Service Plan | ✅ Created | F1 Free Tier |
| Web App | ✅ Created | student-portal-app |
| URL | ✅ Active | https://student-portal-app.azurewebsites.net |
| Files Deployment | ⏳ Pending | Use methods above |

---

## 🔧 Manual File Upload via Portal

### Easiest Method:

1. **Go to Azure Portal**
2. **Search:** "student-portal-app" App Service
3. **Left Menu:** Development Tools → App Service Editor
4. **Create folder structure** and upload files
5. **Or use WebFTP** (Advanced > FTP > Start FTP)

---

## ✅ Verify Deployment

Once files are deployed, test:

```bash
# Check app status
az webapp show \
  --resource-group student-portal-india \
  --name student-portal-app \
  --query "{name:name, state:state, url:defaultHostName}"

# View logs
az webapp log tail \
  --resource-group student-portal-india \
  --name student-portal-app
```

---

## 🎯 Recommended Next Steps

1. **Use GitHub Actions** for automatic deployment
2. **Connect repository** via Azure Portal (easiest)
3. **Monitor** the live application
4. **Add custom domain** if needed

---

## 📞 Quick Reference

### Your Azure Resources:
- **Subscription:** BH-IN-Pulse of Progress
- **Resource Group:** student-portal-india
- **Region:** Central India
- **App Name:** student-portal-app
- **Live URL:** https://student-portal-app.azurewebsites.net
- **GitHub Repo:** https://github.com/TamilGithub06/Test_Student_1

### Useful Commands:
```bash
# Check app status
az webapp show -g student-portal-india -n student-portal-app

# Restart app
az webapp restart -g student-portal-india -n student-portal-app

# Delete everything
az group delete -n student-portal-india --yes
```

---

## 🚀 **READY TO DEPLOY?**

### **Fastest Option (Recommended):**

1. Go to [Azure Portal](https://portal.azure.com)
2. Search: **student-portal-app**
3. Click: **Deployment Center**
4. Select: **GitHub** or **Local Git**
5. Authorize & Deploy ✅

**Your app will be live in minutes!**

---

For detailed Azure documentation: https://docs.microsoft.com/azure/
