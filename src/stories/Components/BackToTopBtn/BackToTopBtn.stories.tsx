import { ComponentProps } from 'react'
import BackToTopBtn from './BackToTopBtn'
import { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
type StoryProps = ComponentProps<typeof BackToTopBtn>

const meta: Meta<StoryProps> = {
  component: BackToTopBtn,
  tags: ['autodocs'],
  argTypes: {},
  args: {
    onClick: fn()
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Primary: Story = {
  args: {},
  render: (args) => {
    return <BackToTopBtn {...args} />
  }
}
