import { ComponentProps } from "react";
import UserLoggedInAccount from "./UserLoggedInAccount";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof UserLoggedInAccount>;

const meta: Meta<StoryProps> = {
  component: UserLoggedInAccount,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    username: {
      control: {
        type: "text",
      },
    },
    isVerified: {
      control: {
        type: "boolean",
      },
    },
  },
  args: {
    username: "Mr. PrimeTrader",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Verified: Story = {
  args: {},
  render: (args) => {
    return <UserLoggedInAccount {...args} />;
  },
};
export const Unverified: Story = {
  args: {
    isVerified: false,
  },
  render: (args) => {
    return <UserLoggedInAccount {...args} />;
  },
};
