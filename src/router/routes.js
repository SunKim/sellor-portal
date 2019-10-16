const routes = [
  {
    path: '/',
    component: () => import('layouts/TeaserLayout.vue'),
    children: [{ path: '', component: () => import('pages/Teaser.vue') }]
  },
  {
    path: '/join',
    component: () => import('layouts/BlankLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Join.vue') },
      {
        path: 'complete/:nickname',
        component: () => import('pages/JoinComplete.vue')
      }
    ]
  },
  {
    path: '/privacy',
    component: () => import('layouts/HeaderLayout.vue'),
    children: [{ path: '', component: () => import('pages/PrivacyPolicy.vue') }]
  },
  {
    path: '/terms',
    component: () => import('layouts/HeaderLayout.vue'),
    children: [{ path: '', component: () => import('pages/Terms.vue') }]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
