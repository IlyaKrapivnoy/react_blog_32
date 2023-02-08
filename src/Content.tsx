import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound.tsx';
import { Route, Switch } from 'react-router-dom';

const Content = () => (
    <div className='content'>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/create' component={Create} />
            <Route path='/blogs/:id' component={BlogDetails} />
            <Route path='*' component={NotFound} />
        </Switch>
    </div>
);

export default Content;
