export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5def1698041d1bbceec800c3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-za1qpmjg',
                  apiId: '33543c46-1518-4ab1-9ec8-f883a57796ce'
                },
                {
                  buildHookId: '5def1698334c7db8e1f6d0e8',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-pdocsrjm',
                  apiId: '0795a8ed-c58a-4646-9197-32e9af95e372'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/boydco/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-pdocsrjm.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
