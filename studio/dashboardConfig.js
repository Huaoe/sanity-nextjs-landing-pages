export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d6e85c20809828bd3d46277',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kzp8m99n',
                  apiId: 'af5f5d92-29f0-40ca-97ec-b82eb6ac56a7'
                },
                {
                  buildHookId: '5d6e85c21cff21857609f89c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-9mjq41oz',
                  apiId: '0cf3455b-20b2-46cd-b0fd-27f1f0a19e64'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Huaoe/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-9mjq41oz.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
