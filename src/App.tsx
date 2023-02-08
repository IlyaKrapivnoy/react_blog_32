import Navbar from './Navbar';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router>
        <div className='App'>
            <Navbar />
            <Content />
        </div>
    </Router>
);

export default App;
