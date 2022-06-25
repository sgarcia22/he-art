import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import specific icons */
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

import { faTwitter } from '@fortawesome/free-brands-svg-icons'

import 'vue-universal-modal/dist/index.css';

import VueUniversalModal from 'vue-universal-modal';

/* add icons to the library */
library.add(faGlobe)
library.add(faTwitter)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(VueUniversalModal, {
  teleportTarget: '#modals',
});

// library.add(FontAwesomeIcon)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.mount('#app')
