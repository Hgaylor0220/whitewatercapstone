import Layout from '../components/Layout';
import Link from 'next/link';

const RiverLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const riverSearch = <div><h1>Popular River Searches in the PNW</h1>
    <ul>
        <RiverLink id="Clackamas , Upper" />
        <RiverLink id="Clackamas River, Lower" />
        <RiverLink id="SantNorth Santiamiam" />
        <RiverLink id="Deshuttes" />
        <RiverLink id="Mackenzie" />
        <RiverLink id="John Day" />
        <RiverLink id="Rouge River" />
        <RiverLink id="Sandy" />
        <RiverLink id="White Salmon" />
        <RiverLink id="Canyon Creek" />
        <RiverLink id="Washougal" />
        <RiverLink id="Clikatack" />
        <RiverLink id="East Fork of the Lewis" />
        <RiverLink id="Ohanapecosh (ohani)" />
        <RiverLink id="Upper Lewis (waterfall)Washougal" />
        <RiverLink id="Canyon Creek" />
        <RiverLink id="Washougal" />
        <RiverLink id="Clikatack" />
        <RiverLink id="East Fork of the Lewis" />
        <RiverLink id="Ohanapecosh (ohani)" />
        <RiverLink id="Upper Lewis (waterfall)" />
    </ul></div>;

export default function RiverInfo() {
    return (
        <Layout content={riverSearch} />

    );
}


// import Layout from '../components/Layout';
// import Link from 'next/link';
// import fetch from 'isomorphic-unfetch';

// const RiverInfo = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );

// RiverInfo.getInitialProps = async function () {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();
    
//     console.log(`Show data fetched. Count: ${data.length}`);
    
//     return {
//         shows: data.map(entry => entry.show)
//     };
// };

// export default RiverInfo;
