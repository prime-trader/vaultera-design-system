import { ComponentProps } from "react";
import TablePT from "./TablePT";
import { Meta, StoryObj } from "@storybook/react";
type StoryProps = ComponentProps<typeof TablePT>;

const meta: Meta<StoryProps> = {
  component: TablePT,
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
    return <TablePT {...args} />;
  },
};
