import { ComponentProps } from "react";
import PasswordField from "./PasswordField";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FaBeer } from "react-icons/fa";
type StoryProps = ComponentProps<typeof PasswordField>;

const meta: Meta<StoryProps> = {
  component: PasswordField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: {
      control: {
        type: "text",
      },
    },
    size: {
      options: ["450px", "100%"],
      control: {
        type: "select",
      },
    },
  },
  args: {
    onChange: fn(),
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <PasswordField {...args} />;
  },
};
