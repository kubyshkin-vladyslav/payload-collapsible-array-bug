import type { CollectionConfig } from 'payload'
import { slugField } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  defaultPopulate: {
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
  ],
}
