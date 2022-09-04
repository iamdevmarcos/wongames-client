import { Story, Meta } from '@storybook/react'
import Highlight, { HightlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight,
  args: {
    title: 'Read Dead it`s back',
    subtitle: 'Come see John`s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/rdr2'
  }
} as Meta

export const Default: Story<HightlightProps> = (args) => <Highlight {...args} />
