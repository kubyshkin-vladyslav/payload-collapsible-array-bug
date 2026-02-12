import type { GroupField } from 'payload'

export const linkField: GroupField = {
  name: 'link',
  type: 'group',
  fields: [
    {
      name: 'label',
      type: 'text',
    },
    {
      name: 'linkType',
      type: 'radio',
      required: true,
      defaultValue: 'custom',
      admin: {
        layout: 'horizontal',
        description: 'Choose between entering a custom text URL or linking to another document.',
      },
      options: [
        {
          label: 'Custom URL',
          value: 'custom',
        },
        {
          label: 'Internal link',
          value: 'internal',
        },
      ],
    },
    {
      name: 'doc',
      type: 'relationship',
      label: 'Choose a document to link to',
      relationTo: ['pages'],
      admin: {
        condition: (_, siblingData) => siblingData?.linkType === 'internal',
      },
    },
    {
      name: 'url',
      type: 'text',
      label: 'Enter a URL',
      admin: {
        condition: (_, siblingData) => siblingData?.linkType === 'custom',
      },
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Open in new tab',
      defaultValue: false,
    },
  ],
}
