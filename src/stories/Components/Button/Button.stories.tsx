import { ComponentProps } from "react";
import Button from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FaBeer } from "react-icons/fa";
type StoryProps = ComponentProps<typeof Button>;

const meta: Meta<StoryProps> = {
  component: Button,
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
    variant: {
      options: ["primary", "outline"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    type: {
      options: ["button", "submit"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onClick: fn(),
    label: "Hello",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <Button {...args} />;
  },
};
export const Outline: Story = {
  args: {
    variant: "outline",
  },
  render: (args) => {
    return <Button {...args} />;
  },
};
export const WithIcon: Story = {
  args: {
    icon: <FaBeer />,
  },
  render: (args) => {
    return <Button {...args} />;
  },
};
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    return <Button {...args} />;
  },
};
