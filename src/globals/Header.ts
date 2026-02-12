import type { GlobalConfig } from 'payload'
import { linkField } from '@/fields/linkField'

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          name: 'main',
          fields: [
            {
              label: 'Collapsible',
              type: 'collapsible',
              fields: [
                {
                  name: 'navItems',
                  type: 'array',
                  fields: [linkField],
                },
              ],
            },
          ],
        },
        {
          name: 'secondary',
          fields: [
            {
              label: 'Collapsible',
              type: 'collapsible',
              fields: [
                {
                  name: 'navItems',
                  type: 'array',
                  fields: [linkField],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
