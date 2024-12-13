import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const vaultraTheme = create({
  base: 'light', // Or 'dark'
  brandTitle: 'Vaultra Design System',
  brandUrl: 'https://primetrader.com',
  brandImage: './logo.svg',

  // Colors
  colorPrimary: '#171616',
  colorSecondary: '#000000',

  // UI
  appContentBg: '#C3F84D',
  appBorderColor: '#252424',
  appBorderRadius: 8,

  // Typography
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',

  // Text Colors
  textColor: '#000000',
  textInverseColor: '#ffffff',

  // Toolbar
  barTextColor: '#000000',
  barSelectedColor: '#000000',
  barBg: '#D4FF75',

  // Input
  inputBg: '#ffffff', // Input background
  inputBorder: '#e6e6e6', // Input border
  inputTextColor: '#000000', // Input text color
  inputBorderRadius: 4 // Input border radius
})

addons.setConfig({
  theme: vaultraTheme
})
