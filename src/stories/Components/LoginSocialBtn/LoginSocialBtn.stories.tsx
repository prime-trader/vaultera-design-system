import { ComponentProps } from 'react'
import LoginSocialBtn from './LoginSocialBtn'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof LoginSocialBtn>

const meta: Meta<StoryProps> = {
  component: LoginSocialBtn,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    varient: {
      options: ['Google', 'X', 'Telegram', 'MetaMask'],
      control: {
        type: 'select'
      }
    },
    isDisable: {
      control: {
        type: 'boolean'
      }
    }
  },
  args: {}
}

export default meta

type Story = StoryObj<StoryProps>

export const Google: Story = {
  args: {
    varient: 'Google'
  },
  render: (args) => {
    return <LoginSocialBtn {...args} />
  }
}
export const X: Story = {
  args: {
    varient: 'X'
  },
  render: (args) => {
    return <LoginSocialBtn {...args} />
  }
}

export const Telegram: Story = {
  args: {
    varient: 'Telegram'
  },
  render: (args) => {
    return <LoginSocialBtn {...args} />
  }
}
export const MetaMask: Story = {
  args: {
    varient: 'MetaMask'
  },
  render: (args) => {
    return <LoginSocialBtn {...args} />
  }
}
