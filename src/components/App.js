import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Contack from './Contack';

class App extends React.Component {
    render() {
        return (
            <div className="ui container">
                <BrowserRouter>
                <Header />
                    <br />
                    <br />
                    <br />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/Contack" component={Contack} />
                </Switch>
                    
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}

export default App;