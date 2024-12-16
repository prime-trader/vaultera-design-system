import type { Preview } from '@storybook/react'

// fonts added
import '@fontsource/inter/400.css' // For normal weight
import '@fontsource/inter/500.css' // For medium weight
import '@fontsource/inter/600.css' // For semi-bold weight
import '@fontsource/inter/700.css' // For bold weight

const kindleViewports = {
  iphone14: {
    name: 'iPhone 14',
    styles: {
      width: '390px',
      height: '844px'
    }
  },
  iphone14promax: {
    name: '	iPhone 14 Pro Max',
    styles: {
      width: '430px',
      height: '932px'
    }
  },
  galaxys9: {
    name: '	Galaxy S9',
    styles: {
      width: '360px',
      height: '740px'
    }
  },
  pixel: {
    name: 'Pixel',
    styles: {
      width: '540px',
      height: '960px'
    }
  }
}

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    viewport: {
      viewports: {
        ...kindleViewports
      }
    }
  }
}

export default preview
