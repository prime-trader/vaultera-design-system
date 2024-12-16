import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const vaultraTheme = create({
  base: 'light', // Or 'dark'
  brandTitle: 'Vaultra Design System',
  brandUrl: 'https://primetrader.com',
  brandImage: './logo.svg'
})

addons.setConfig({
  theme: vaultraTheme
})
