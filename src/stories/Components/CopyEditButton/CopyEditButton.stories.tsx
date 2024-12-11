import { ComponentProps } from 'react'
import CopyEditButton from './CopyEditButton'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof CopyEditButton>

const meta: Meta<StoryProps> = {
  component: CopyEditButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    varient: {
      options: ['copyvar1', 'copyvar2', 'edit'],
      control: {
        type: 'select'
      }
    },
    value: {
      control: {
        type: 'text'
      }
    }
  },
  args: {}
}

export default meta

type Story = StoryObj<StoryProps>

export const CopyVar01: Story = {
  args: {
    varient: 'copyvar1',
    value: 'i am copied!'
  },
  render: (args) => {
    return <CopyEditButton {...args} />
  }
}
export const CopyVar02: Story = {
  args: {
    varient: 'copyvar2',
    value: 'i am copied!'
  },
  render: (args) => {
    return <CopyEditButton {...args} />
  }
}
export const EditBtn: Story = {
  args: {
    varient: 'edit',
    onEdit: () => alert('Edit button clicked')
  },
  render: (args) => {
    return <CopyEditButton {...args} />
  }
}
