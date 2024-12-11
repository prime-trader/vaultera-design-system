import { ComponentProps } from 'react'
import ToastNotification from './ToastNotification'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof ToastNotification>

const meta: Meta<StoryProps> = {
  component: ToastNotification,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    varient: {
      options: ['success', 'fail', 'warning'],
      control: {
        type: 'select'
      }
    },
    message: {
      control: {
        type: 'text'
      }
    }
  },
  args: {
    message: 'Lorem ipsum dolor sit amet consectetur.'
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Success: Story = {
  args: {},
  render: (args) => {
    return <ToastNotification {...args} />
  }
}
export const Fail: Story = {
  args: {
    varient: 'fail'
  },
  render: (args) => {
    return <ToastNotification {...args} />
  }
}
export const Warning: Story = {
  args: {
    varient: 'warning'
  },
  render: (args) => {
    return <ToastNotification {...args} />
  }
}
