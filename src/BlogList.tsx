import { Link } from 'react-router-dom';
import { BlogListProps } from '../types';

const BlogList = ({ blogs, title }: BlogListProps) => {
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