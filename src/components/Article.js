import React, {Component} from 'react'

class Article extends Component {
    state = {
        isOpen: false
    }

    render() {
        console.log('---', this.props);
        const {article} = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
            <div className='helloclass' style={{color: 'red', background: 'white'}}>
                <h2>
                    {article.title}
                    <button onClick={this.handleClick}>
                        {this.state.isOpen ? 'Close' : 'Open'}
                    </button>
                </h2>
                {body}
                <h3>creation date: {(new Date(article.date)).toDateString()}</h3>
            </div>
        )
    }

    handleClick = () => {
        console.log('---', 'clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article
