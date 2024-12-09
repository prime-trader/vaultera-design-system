import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ShimmerEffect from "./Skeleton";
import TablePT from "../TablePT/TablePT";

type StoryProps = ComponentProps<typeof ShimmerEffect>;

const meta: Meta<StoryProps> = {
  component: ShimmerEffect,
  tags: ["autodocs"],
  argTypes: {
    loading: { control: "boolean" },
    type: { control: "select", options: ["table", "card", "image", "icon"] },
  },
  args: {
    loading: false,
    type: "table",
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    loading: false,
  },
  render: (args) => {
    return args.loading ? <ShimmerEffect {...args} /> : <TablePT />;
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
  render: (args) => {
    return <ShimmerEffect {...args} />;
  },
};

export const TableShimmer: Story = {
  args: {
    loading: true,
    type: "table",
  },
  render: (args) => {
    return <ShimmerEffect {...args} />;
  },
};

export const CardShimmer: Story = {
  args: {
    loading: true,
    type: "card",
  },
  render: (args) => {
    return <ShimmerEffect {...args} />;
  },
};

export const ImageShimmer: Story = {
  args: {
    loading: true,
    type: "image",
  },
  render: (args) => {
    return <ShimmerEffect {...args} />;
  },
};

export const IconShimmer: Story = {
  args: {
    loading: true,
    type: "icon",
  },
  render: (args) => {
    return <ShimmerEffect {...args} />;
  },
};
