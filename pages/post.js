import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Post = () => {
    const router = useRouter();
    const journalcontent = <div>
        <h1>{router.query.title}</h1>
        <p>This is the blog post content.</p>
        
    </div>
    return (
        <Layout content={journalcontent} />
    );
};

export default Post;