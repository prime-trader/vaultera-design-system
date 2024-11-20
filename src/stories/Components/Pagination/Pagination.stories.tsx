import { ComponentProps } from "react";
import Pagination from "./Pagination";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof Pagination>;

const meta: Meta<StoryProps> = {
  component: Pagination,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
   
  
  },
  args: {
  
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <Pagination {...args} />;
  },
};
