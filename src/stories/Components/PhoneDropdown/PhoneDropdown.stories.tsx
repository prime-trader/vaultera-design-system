import { ComponentProps } from "react";
import PhoneDropdown from "./PhoneDropdown";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof PhoneDropdown>;

const meta: Meta<StoryProps> = {
  component: PhoneDropdown,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <PhoneDropdown {...args} />;
  },
};
