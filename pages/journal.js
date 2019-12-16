import Layout from '../components/Layout';
import Link from 'next/link';

const journalEntry = <div><h1>My Journal</h1>
</div>;
    
export default function Journal() {
    return (
        <Layout content={journalEntry} />
           
    );
}