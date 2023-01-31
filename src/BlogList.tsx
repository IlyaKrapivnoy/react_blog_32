import { Link } from 'react-router-dom';

interface Blog {
    id: string;
    title: string;
    author: string;
}

interface Props {
    blogs: Blog[];
    title: string;
}

const BlogList = ({ blogs, title }: Props) => {
    const renderBlogs = () => {
        return blogs.map((blog) => (
            <Link to={`/blogs/${blog.id}`} key={blog.id}>
                <div className='blog-preview'>
                    <h2>{blog.title}</h2>

                    <p>
                        Written by{' '}
                        <span style={{ color: '#949494' }}>{blog.author}</span>
                    </p>
                </div>
            </Link>
        ));
    };

    return (
        <div className={'blog-list'}>
            <h2>{title}</h2>

            {renderBlogs()}
        </div>
    );
};

export default BlogList;