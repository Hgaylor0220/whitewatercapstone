import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

export default function Post() {
    
    const router = useRouter();
    const riverReview = <div><h1>{router.query.id}</h1>
        <p>This will have the river post info.</p></div>

    return (
        <Layout content={riverReview} />
       
    );
}

