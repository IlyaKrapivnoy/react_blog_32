import BlogList from './BlogList'
import useFetch from './useFetch'

const Home = () => {
    const {
        data: blogs,
        isLoading,
        error,
    } = useFetch('http://localhost:3000/blogs');
    let content;

    if (error) {
        content = <div>{error}</div>;
    } else if (isLoading) {
        content = <div>Loading...</div>;
    } else if (blogs) {
        content = <BlogList blogs={blogs} title='All Blogs' />;
    }

    return <div className='home'>{content}</div>;
}; 

export default Home;