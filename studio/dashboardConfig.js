export default {
  widgets: [
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
                  buildHookId: '60022ae39b131e255deda63b',
                  title: 'Sanity Studio',
                  name: 'cms-game-pass-studio',
                  apiId: 'aa565a8e-cc33-45a3-b70d-bf222542c083'
                },
                {
                  buildHookId: '60022ae3fe106c23900a3bbf',
                  title: 'Blog Website',
                  name: 'cms-game-pass',
                  apiId: '845bb3ab-5966-44d3-bb28-dedf6795bd01'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lesz3u/cms-game-pass',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://cms-game-pass.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
