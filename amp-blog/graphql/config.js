import { withData } from 'next-apollo';
import { HttpLink } from 'apollo-link-http';

const config = {
	link: new HttpLink({
		uri: 'https://rtcamp-clone.dev5.rt.gw/graphql'
	})
};

export default withData(config);
