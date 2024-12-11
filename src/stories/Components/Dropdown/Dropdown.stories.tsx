import { ComponentProps } from 'react'
import Dropdown from './Dropdown'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof Dropdown>

const meta: Meta<StoryProps> = {
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    buttonText: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    buttonText: 'Hello'
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <Dropdown {...args} />
  }
}
