import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ApolloProvider } from '@apollo/client'
import client from './shared/api/index.ts'
import { Provider } from 'react-redux'
import { store } from './shared/store/store.ts'

createRoot(document.getElementById('root')!).render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>
)
