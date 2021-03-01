const BlogList = ({ blogs, title, handleDelete }) => {  

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <button 
                        onClick={() => handleDelete(blog.id)}
                        style={deleteButtonStyles}
                    >Delete</button>
                </div>
            ))}
        </div>
     );
}

const deleteButtonStyles = { 
    background: '#f1356d', 
    color: '#fff',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    border: 'none',
    borderRadius: 15,
    cursor: 'pointer',
    margin: '15px 0',
    padding: '2px 20px'
}

export default BlogList;




