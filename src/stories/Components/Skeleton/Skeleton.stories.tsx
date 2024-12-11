import { ComponentProps } from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Skeleton from './Skeleton'

type StoryProps = ComponentProps<typeof Skeleton>

const meta: Meta<StoryProps> = {
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    loading: { control: 'boolean' },
    height: { control: 'text' },
    width: { control: 'text' },
    borderRadius: { control: { type: 'text' } },
    children: { control: 'text' },
    loadingStyle: {
      control: { type: 'select' },
      options: ['pulse', 'shimmer']
    }
  },
  args: {
    loading: true,
    height: '100px',
    width: '100px',
    loadingStyle: 'pulse',
    borderRadius: '8px'
  }
}

export default meta

type Story = StoryObj<StoryProps>

export const Default: Story = {
  args: {
    loading: true,
    height: '150px',
    width: '150px',
    borderRadius: '12px',
    loadingStyle: 'pulse',
    children: 'Content will render when loading is false'
  },
  render: (args) => <Skeleton {...args} />
}

export const WithIcon: Story = {
  args: {
    loading: true,
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    loadingStyle: 'pulse',
    children: (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
        </svg>
      </div>
    )
  },
  render: (args) =>
    args.loading ? (
      <Skeleton {...args}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M11 6h2v6h-2zM11 14h2v2h-2z" />
        </svg>
      </Skeleton>
    ) : (
      <h1>Hello with Icon</h1>
    )
}

export const Table: Story = {
  args: {
    loading: true,
    height: '20px',
    width: '100%',
    borderRadius: '4px',
    loadingStyle: 'pulse'
  },
  render: (args) => (
    <table
      style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '16px',
        border: '1px solid #ddd'
      }}
    >
      <thead>
        <tr>
          <th
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              textAlign: 'left'
            }}
          >
            Name
          </th>
          <th
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              textAlign: 'left'
            }}
          >
            Age
          </th>
          <th
            style={{
              padding: '8px',
              border: '1px solid #ddd',
              textAlign: 'left'
            }}
          >
            Status
          </th>
        </tr>
      </thead>
      <tbody>
        {[...Array(5)].map((_, index) => (
          <tr key={index}>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              {args.loading ? <Skeleton {...args} /> : `Name ${index + 1}`}
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              {args.loading ? <Skeleton {...args} /> : `${20 + index} years`}
            </td>
            <td style={{ padding: '8px', border: '1px solid #ddd' }}>
              {args.loading ? <Skeleton {...args} /> : `Active`}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
