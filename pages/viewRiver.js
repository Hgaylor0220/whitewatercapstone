import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const currentRivers = <div><h1>Rivers in the PNW</h1>
    <ul>
        <PostLink id="Clackamas River" />
        <PostLink id="WhiteSalmon" />
        <PostLink id="Deschutes" />
        <PostLink id="Cedar Creek " />
        <PostLink id="Christy Creek" />
        <PostLink id="Clackamas, South Fork" />
        <PostLink id="Clear Creek" />
        <PostLink id="Eagle Creek, North Fork" />
        <PostLink id="Eagle Creek" />
        <PostLink id="Elk Creek" />
        <PostLink id="Rouge" />
        <PostLink id="John Day" />
    </ul></div>;

export default function viewRiver() {
    return (
        <Layout content={currentRivers} />

    );
}