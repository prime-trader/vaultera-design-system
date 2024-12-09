import IconViewer from "./IconViewer";

export default {
  title: "Icons/Explorer",
  component: IconViewer,
  parameters: {
    controls: {
      exclude: /.*/g,
    },
    docs: {
      toolbar: { showPanel: false },
    },
  },
};

export const Default = () => <IconViewer />;
