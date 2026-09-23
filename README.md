# Frosty Calculator V2

A lightning-fast, static web game hub with an authentic calculator cloak and instant Flash emulation powered by Ruffle.

---

## 🚀 How to Deploy to GitHub Pages (Exact Steps)

This repository includes a ready-to-use GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and publishes your static site whenever you push code.

### Step 1: Push Code to your GitHub Repository
If you haven't initialized or pushed your repository yet, run:
```bash
git init
git add .
git commit -m "Deploy Frosty Calculator V2"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/<YOUR-REPOSITORY-NAME>.git
git push -u origin main
```

### Step 2: Enable GitHub Pages with "GitHub Actions"
1. Open your repository on **GitHub.com**.
2. Click on the **Settings** tab (the gear icon at the top).
3. In the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Source**, change the dropdown from `"Deploy from a branch"` to **`GitHub Actions`**.
5. *That's it!* You don't need to pick a branch or folder manually.

### Step 3: Watch your Site Go Live
1. Click on the **Actions** tab at the top of your GitHub repository.
2. You will see the **Deploy Frosty to GitHub Pages** workflow running.
3. Once completed (usually 30–60 seconds), GitHub will provide your live URL:
   `https://<YOUR-USERNAME>.github.io/<YOUR-REPOSITORY-NAME>/`

---

## 🔑 Calculator Cloak Passcode
- When a user first opens the site, the **Frosty Calculator** cloak appears.
- Secret Unlock Passcode: **`NOCHEUFC`**
  - Switch to the **ABC** keypad tab or type on your keyboard.
  - Type `NOCHEUFC` and press **`=`** (or Enter).
  - The hub unlocks permanently for that browser (`localStorage`).
  - To view the calculator again, clear browser site data / localStorage.

---

## 🛠️ Local Development & Manual Build

```bash
# Install dependencies
npm install

# Start local development server (port 3000)
npm run dev

# Build static production bundle into dist/
npm run build

# Preview production build locally
npm run preview
```

### Static Build Details
- Built with **Vite** using relative asset paths (`base: './'`), so it works on any root domain or subfolder path on GitHub Pages.
- During build, Vite automatically generates `.nojekyll` to prevent GitHub's Jekyll engine from blocking Flash `.swf`, WebAssembly, or asset files.
