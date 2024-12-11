import { ComponentProps } from 'react'
import CategoryDropdown from './CategoryDropdown'
import { Meta, StoryObj } from '@storybook/react'
type StoryProps = ComponentProps<typeof CategoryDropdown>

const meta: Meta<StoryProps> = {
  component: CategoryDropdown,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    varient: {
      options: ['category', 'filter'],
      control: {
        type: 'select'
      }
    }
  },
  args: {}
}

export default meta

type Story = StoryObj<StoryProps>

export const Category: Story = {
  args: {
    varient: 'category'
  },
  render: (args) => {
    return <CategoryDropdown {...args} />
  }
}
export const Filter: Story = {
  args: {
    varient: 'filter'
  },
  render: (args) => {
    return <CategoryDropdown {...args} />
  }
}
