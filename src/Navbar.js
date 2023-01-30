import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className='navbar'>
        <h1>Rude Boy's Blog</h1>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
    </nav>
);
 

export default Navbar
