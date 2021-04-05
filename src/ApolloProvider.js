import { ApolloClient, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import App from './App'


const client = new ApolloClient({
  uri: "https://nosqlapp.herokuapp.com/",
  cache: new InMemoryCache()
});


export default(
    <ApolloProvider client = {client}>
        <App/>
    </ApolloProvider>
)

