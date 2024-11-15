import { ComponentProps } from "react";
import ButtonLoading from "./ButtonLoading";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

type StoryProps = ComponentProps<typeof ButtonLoading>;

const meta: Meta<StoryProps> = {
  component: ButtonLoading,
  tags: ["autodocs"],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["150px", "100%"],
      control: {
        type: "select",
      },
    },
    type: {
      options: ["button", "submit"],
      control: {
        type: "select",
      },
    },
    loading_percentage: {
      control: {
        type: "range",
        min: 0,
        max: 100,
      },
    },
  },
  args: {
    onClick: fn(),
    label: "Hi",
    loading_percentage: 10,
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <ButtonLoading {...args} />;
  },
};
