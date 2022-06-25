import ArtistPage from './views/ArtistPage.vue'
import LiveStreamingPage from './views/LiveStreamingPage.vue'
import AuctionPage from './views/AuctionPage.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: ArtistPage, meta: { title: 'ArtistPage' } },
  { path: '/artist', component: ArtistPage, meta: { title: 'ArtistPage' } },
  { path: '/live', component: LiveStreamingPage, meta: { title: 'LiveStreamingPage' } },
  { path: '/auction', component: AuctionPage, meta: { title: 'AuctionPage' } },
  // {
  //   path: '/about',
  //   meta: { title: 'About' },
  //   component: About,
  //   // example of route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import('./views/About.vue')
  // },
  // { path: '/:path(.*)', component: NotFound },
]
