import React, {Component} from 'react'
import ArticleList from './ArticleList'
import articles from '../fixtures'
import 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
    state = {
        reverted: false
    };

    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        App Name
                        <button className="btn btn-dark btn-lg float-right" onClick = {this.revert}>Revert</button>
                    </h1>
                </div>
                <ArticleList articles={this.state.reverted ? articles.slice().reverse() : articles} />
            </div>
        )
    }

    revert = () => this.setState({
        reverted: !this.state.reverted
    })
}

export default App