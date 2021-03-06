const siteConfig = {
  name: 'site-config',
  label: 'Site Config',
  editor: { preview: false },
  files: [
    {
      label: 'Config',
      name: 'config',
      file: 'src/config/config.yml',
      fields: [
        {
          label: 'Default Title',
          name: 'title',
          widget: 'string'
        },
        {
          label: 'Default Description',
          name: 'description',
          widget: 'text'
        },
        {
          label: 'Address',
          name: 'address',
          widget: 'text'
        },
        {
          label: 'email',
          name: 'email',
          widget: 'string'
        },
        {
          label: 'Telephone',
          name: 'telephone',
          widget: 'string'
        },
        {
          label: 'Twitter',
          name: 'twitter',
          widget: 'string'
        },
        {
          label: 'Instagram',
          name: 'instagram',
          widget: 'string'
        },
        {
          label: 'Facebook',
          name: 'facebook',
          widget: 'string'
        },
        {
          label: 'LinkedIn',
          name: 'linkedin',
          widget: 'string'
        },
        {
          label: 'Navigation Links',
          name: 'navLinks',
          widget: 'list',
          fields: [
            {
              label: 'Text',
              name: 'text',
              widget: 'string',
              required: true
            },
            {
              label: 'Path',
              name: 'to',
              widget: 'string',
              required: true
            },
            {
              label: 'Partially Active',
              name: 'partiallyActive',
              widget: 'boolean',
              required: false
            }
          ]
        }
      ]
    }
  ]
}
exports.siteConfig = siteConfig
