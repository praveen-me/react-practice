import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';

const authLink = setContext((_, { headers }) => {
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: `Basic cnRjYW1wOmdvb2R3b3Jr`
		}
	};
});

const config = {
	link: authLink.concat(
		new HttpLink({
			uri: 'https://rtcamp-clone.dev5.rt.gw/graphql'
		})
	),
	request(operation) {
		operation.setContext({
			headers: {
				authorization: `Basic cnRjYW1wOmdvb2R3b3Jr`
			}
		});
	}
};

export default withData(config);
