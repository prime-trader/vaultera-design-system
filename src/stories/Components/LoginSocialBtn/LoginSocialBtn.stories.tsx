import { ComponentProps } from "react";
import LoginSocialBtn from "./LoginSocialBtn";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof LoginSocialBtn>;

const meta: Meta<StoryProps> = {
  component: LoginSocialBtn,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    varient: {
      options: ["following", "resend", "not-following"],
      control: {
        type: "select",
      },
    },
  },
  args: {},
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <LoginSocialBtn {...args} />;
  },
};
