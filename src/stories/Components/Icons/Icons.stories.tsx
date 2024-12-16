import IconViewer from './IconViewer'

export default {
  title: 'Icons/Explorer',
  component: IconViewer,
  parameters: {
    controls: {
      exclude: /.*/g
    },
    docs: {
      toolbar: { showPanel: false }
    },
    backgrounds: { disable: true }
  }
}

export const Default = () => <IconViewer />
