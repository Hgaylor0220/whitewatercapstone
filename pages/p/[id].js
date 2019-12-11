
import Layout from '../../components/Layout';
import fetch from 'isomorphic-unfetch';

const Post = props => (
    <Layout>
        <h1>{props.river.name}</h1>
        <p>{props.river.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.river.image.medium} />
    </Layout>
);

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const API_KEY = process.env.GMAPS_API_KEY;
    const res = await fetch(`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=initMap`);
    const river = await res.json();

    console.log(`Fetched river: ${river.name}`);

    return { river };
};

export default Post;