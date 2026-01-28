# Azure Deployment Guide - Student Portal

## Deployment Options

For this static HTML/CSS/JavaScript application, here are the recommended Azure deployment options:

### **Option 1: Azure Static Web Apps (RECOMMENDED)** ⭐
Best for static sites with automatic GitHub integration and CI/CD.

### **Option 2: Azure App Service**
Good for static files with potential backend integration.

### **Option 3: Azure Blob Storage + CDN**
Cost-effective for static content distribution.

---

## Step-by-Step Deployment: Azure Static Web Apps

### Prerequisites
- Azure Subscription (you have: "BH-IN-Pulse of Progress")
- GitHub Repository (✅ Already set up: https://github.com/TamilGithub06/Test_Student_1.git)
- Azure CLI installed (✅ Verified)

### Step 1: Create Azure Static Web App

```bash
az staticwebapp create \
  --name student-portal \
  --resource-group student-portal-rg \
  --location "eastus" \
  --source https://github.com/TamilGithub06/Test_Student_1.git \
  --branch main \
  --app-location "/" \
  --output-location "/" \
  --login-with-github
```

### Step 2: Deploy via Azure Portal (Alternative - Simpler)

1. Go to [Azure Portal](https://portal.azure.com)
2. Search for **"Static Web Apps"**
3. Click **"Create"**
4. Fill in the form:
   - **Name:** student-portal
   - **Plan type:** Free
   - **Region:** East US
   - **GitHub Details:**
     - Organization: TamilGithub06
     - Repository: Test_Student_1
     - Branch: main
5. Review and click **Create**

### Step 3: Configure Build Settings

In Azure Portal → Your Static Web App → Build:

```
App location: /
Output location: /
```

No build required since it's pure static files.

### Step 4: Automatic Deployment

Once connected:
- Every push to `main` branch auto-deploys
- You'll get a live URL like: `https://student-portal-abc123.azurestaticapps.net`

---

## Quick Azure CLI Deployment

### Option A: Create Resource Group First

```bash
# Create resource group
az group create \
  --name student-portal-rg \
  --location eastus

# Create Static Web App
az staticwebapp create \
  --name student-portal \
  --resource-group student-portal-rg \
  --source https://github.com/TamilGithub06/Test_Student_1.git \
  --branch main \
  --app-location "/" \
  --output-location "/" \
  --login-with-github
```

### Option B: Deploy via Azure App Service

```bash
# Create resource group
az group create --name student-portal-rg --location eastus

# Create App Service plan
az appservice plan create \
  --name student-portal-plan \
  --resource-group student-portal-rg \
  --sku F1 --is-linux

# Create web app
az webapp create \
  --resource-group student-portal-rg \
  --plan student-portal-plan \
  --name student-portal-app

# Deploy from GitHub
az webapp deployment github-actions add \
  --repo TamilGithub06/Test_Student_1 \
  --branch main \
  --resource-group student-portal-rg \
  --name student-portal-app
```

---

## Automated Deployment with GitHub Actions

Azure Static Web Apps automatically creates a GitHub Actions workflow. You'll see:

**File:** `.github/workflows/azure-static-web-apps-*.yml`

This workflow:
- Builds on push to `main`
- Deploys automatically to Azure
- You can monitor in GitHub → Actions

---

## Deployment Comparison

| Feature | Static Web Apps | App Service | Blob Storage |
|---------|-----------------|-------------|--------------|
| Cost | Free tier | $10/month | Very cheap |
| Setup | Easy | Medium | Complex |
| GitHub Integration | Native | Requires Actions | Manual |
| CDN | Included | Optional | Optional |
| Custom Domain | Yes | Yes | Yes |
| SSL/TLS | Auto | Auto | Optional |

---

## Post-Deployment

### Access Your App
- Static Web Apps URL: `https://<app-name>.azurestaticapps.net`
- Custom domain: Add in Azure Portal

### Monitor & Logs
```bash
# View logs
az staticwebapp logs --name student-portal

# View deployment status
az staticwebapp show --name student-portal
```

### Add Custom Domain
1. Azure Portal → Static Web App → Custom Domain
2. Add DNS record: `student-portal.yourdomain.com`
3. Verify ownership

---

## Important Notes

1. **Static Web Apps** - Best choice for this app (free tier, GitHub integration)
2. **No Build Required** - App location = root folder (`/`)
3. **Auto-Updates** - Every GitHub push updates the live site
4. **HTTPS** - Automatically included
5. **Performance** - Edge locations worldwide via Azure CDN

---

## Recommended Deployment Path

### For You:
1. ✅ Code already in GitHub
2. Use Azure Portal (simplest)
3. Create Static Web App
4. Connect to GitHub repository
5. Done! Automatic CI/CD

---

## Need Help?

Run this command to check your Azure setup:

```bash
az account show --query "{name:name, id:id, subscriptionId:subscriptionId}"
```

Then provide these details for further assistance.
