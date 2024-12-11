import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming'

const vaultraTheme = create({
  base: 'light', // Or 'dark'
  brandTitle: 'Vaultra Design System',
  brandUrl: 'https://primetrader.com'
  // brandImage: 'https://www.primetrader.com/images_p/logo.svg'
  // TODO: uncommet that line once logo is provided
})

addons.setConfig({
  theme: vaultraTheme
})
