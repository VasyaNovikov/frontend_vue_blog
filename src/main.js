<<<<<<< HEAD
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
=======
//import { createApp } from 'vue'
//import App from './App.vue'
//
//createApp(App).mount('#app')

import { createApp,h } from 'vue'
import App from './App.vue'
import router from './router'
import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from '@vue/apollo-option'

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
  cache,
  uri: 'http://127.0.0.1:8000//graphql',
})

const apolloProvider = createApolloProvider({
  defaultClient: apolloClient,
})

const app = createApp({
  render: () => h(App),
})

app.use(router)
app.use(apolloProvider)
app.mount('#app')
>>>>>>> 3263eeb (starting 2 app with docker)
