import Layout from '../components/Layout';
import Link from 'next/link';

const RiverLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const riverSearch = <div><h1>Popular White Water Rivers</h1>
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
};