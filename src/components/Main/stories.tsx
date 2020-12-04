import { Meta } from '@storybook/react/types-6-0'
import React from 'react'

import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title',
    description: 'description'
  }
} as Meta

export const Basic = args => <Main {...args} />
