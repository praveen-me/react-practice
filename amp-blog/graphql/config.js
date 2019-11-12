import {withData} from 'next-apollo';
import {HttpLink} from 'apollo-link-http';

const config = {
	link: new HttpLink({
		uri: "https://wordcamp-pwa-demo.dev5.rt.gw/",
	})
};

export default withData(config);