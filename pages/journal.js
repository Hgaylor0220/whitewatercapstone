import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
const journalEntry = <div><h1>My Journal</h1>
    <ul>
        <PostLink id="Clackamas River" />
        <PostLink id="WhiteSalmon" />
        <PostLink id="Deshuttes" />
    </ul></div>;
    
export default function Journal() {
    return (
        <Layout content={journalEntry} />
           
    );
}