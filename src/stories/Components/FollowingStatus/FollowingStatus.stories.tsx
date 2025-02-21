import { ComponentProps } from 'react'
import FollowingStatus from './FollowingStatus'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof FollowingStatus>

const meta: Meta<StoryProps> = {
  component: FollowingStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    varient: {
      options: ['following', 'resend', 'not-following'],
      control: {
        type: 'select'
      }
    }
  },
  args: {}
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <FollowingStatus {...args} />
  }
}
