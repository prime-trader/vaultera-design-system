import { ComponentProps } from "react";
import TextField from "./TextField";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FaBeer } from "react-icons/fa";
type StoryProps = ComponentProps<typeof TextField>;

const meta: Meta<StoryProps> = {
  component: TextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: {
        type: "text",
      },
    },
    required: {
      control: {
        type: "boolean",
      },
    },
    placeHolder: {
      control: {
        type: "text",
      },
    },
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
    minHeight: {
      options: ["81px", "max-content"],
      control: {
        type: "select",
      },
    },
    variant: {
      options: ["text", "number", "password"],
      control: {
        type: "select",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    errorMsg: {
      control: {
        type: "text",
      },
    },
  },
  args: {
    onChange: fn(),
    onIconclick: fn(),
    label: "Hi",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <TextField {...args} />;
  },
};
export const Error: Story = {
  args: {
    errorMsg: "This can't be empty.",
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};
export const WithIcon: Story = {
  args: {
    icon: <FaBeer color="#fff" />,
  },
  render: (args) => {
    return <TextField {...args} />;
  },
};
