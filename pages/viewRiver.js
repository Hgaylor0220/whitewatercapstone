import { useRouter } from 'next/router';
import Layout from '../components/Layout.js';

const Content = () => {
    const router = useRouter();
    return (
        <>
            <h1>{router.query.title}</h1>
            <p>This is the River content page</p>
        </>
    );
};

const Page = () => (
    <Layout>
        <Content />
    </Layout>
);

export default function viewRiver() {
    return (
        <Layout content={Page} />

    );
};