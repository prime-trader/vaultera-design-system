
# Vaultra Design System Documentation

## Storybook Setup

It holds design system for vaultra ui.

### Commands

- **Run Storybook in development mode**:

   ```bash
   npm run storybook
   ```

   This will start the Storybook server at `http://localhost:6006`, where you can view the component library in development mode.

- **Build Storybook for production**:

   ```bash
   npm run build-storybook
   ```

   This command creates a static version of your Storybook that can be deployed to a server.

- **Deploy Storybook to GitHub Pages**:

   ```bash
   npm run deploy-storybook
   ```

   This deploys the built Storybook to GitHub Pages at [https://prime-trader.github.io/pt-frontend-ui/](https://prime-trader.github.io/pt-frontend-ui/).

### Configuration

- **Preview Configuration**: Modify `.storybook/preview-head.html` to customize the iframe content (e.g., add meta tags, favicon).
- **Manager Configuration**: Modify `.storybook/manager-head.html` to customize the Storybook UI (top bar).

---

## Commands

- **Run Storybook in development mode**:

   ```bash
   npm run storybook
   ```

- **Build Storybook for production**:

   ```bash
   npm run build-storybook
   ```

- **Deploy Storybook to GitHub Pages**:

   ```bash
   npm run deploy-storybook
   ```

- **Run linting**:

   ```bash
   npm run lint
   ```

- **Preview the production build using Vite**:

   ```bash
   npm run preview
   ```

- **Prepare Husky hooks**:

   ```bash
   npm run prepare
   ```

---

## Husky Setup

1. **Install Husky**:

   ```bash
   npm install husky --save-dev
   ```

2. **Enable Husky hooks**:

   ```bash
   npx husky install
   ```

3. **Add pre-commit or pre-push hooks** (example for linting):

   ```bash
   npx husky add .husky/pre-commit "npm run lint"
   ```

4. **Create or modify `.prettierrc`** for configuration:

   ```json
   {
     "semi": true,
   }
   ```

5. **Optional**: Add a `.prettierignore` file to exclude files or directories from being formatted.

---

6. **ICON updates / fetch**

   Update icons submodule

   ```bash
   git submodule update --init --recursive

   OR
   
   git submodule update --remote // update from the remote
   ```

   build icons naviagte into the icons module:
   ```bash
   yarn build or npm run build
   ```

   do it same after adding new svgs into the icon directory.

## Additional Notes

- For detailed customization of Storybook, refer to the [Storybook documentation](https://storybook.js.org/docs).
- Ensure that all team members have Husky and lint-staged configured correctly for consistent code quality enforcement.
