import { useState } from 'react'

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('ilya')

    return (
        <div>
            <div className="create">
                <h2>Add a New Blog</h2>
                <form>
                    <label>Blog title:</label>
                    <input 
                        type="text"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label>
                        <textarea 
                            required
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                    </label>
                    <label>Blog author:</label>
                    <select
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="mario">mario</option>
                        <option value="ilya">ilya</option>
                        <option value="yoshi">yoshi</option>
                    </select>
                    <button>Add Blog</button>
                    <p>Title: { title }</p>
                    <p>Body: { body }</p>
                    <p>Author: { author }</p>
                </form>
            </div>
        </div>
    )
}

export default Create
