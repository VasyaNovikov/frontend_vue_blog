import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import components from '@/components/UI'
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

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
})

app
   .use(router)

   .use(apolloProvider)
   .mount('#app')
