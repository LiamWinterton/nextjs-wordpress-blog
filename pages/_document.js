import { ApolloProvider } from '@apollo/client'
import { Html, Head, Main, NextScript } from 'next/document'
import client from '../apollo-client'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<ApolloProvider client={client}>
					<Main />
					<NextScript />
				</ApolloProvider>
			</body>
		</Html>
	)
}
