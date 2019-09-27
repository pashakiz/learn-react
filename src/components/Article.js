import React, {Component, PureComponent} from 'react'

class Article extends PureComponent {
    // state = {
    //     isOpen: false
    // }

    //INIT METHOD 1
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    //INIT METHOD 2
    componentWillMount() {
        console.log('---', 'mounting')
    }

    //INIT METHOD 3
    render() {
        const {article, isOpen, onButtonClick} = this.props;
        //this.state.openArticleId = article.id;
        //console.log('---', this.state.openArticleId);
        const body = isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className='card mx-auto' style={{width: '70%'}}>
                <div className='card-header'>
                    <h2 onClick = {this.incrementCounter}>
                        {article.title}
                        <br></br>
                        <span className="text-monospace h6 text-muted">clicked: {this.state.count}</span>
                        <button onClick={onButtonClick} className="btn btn-primary btn-md float-right">
                            {isOpen ? 'Close' : 'Open'}
                        </button>
                    </h2>
                </div>
                <div className='card-body'>
                    <h6 className="card-subtitle text-muted" style={{marginBottom: '5px'}}>
                        creation date: {(new Date(article.date)).toDateString()}
                    </h6>
                    {body}
                </div>
            </div>
        )
    }

    //INIT METHOD 4
    componentDidMount() {
        console.log('---', 'mounted')
    }

    //UPDATE METHOD 1
    // componentWillReceiveProps(nextProps) {
    //     console.log('---', 'componentWillReceiveProps')
    //     if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //         isOpen: nextProps.defaultOpen
    //     })
    // }

    //UPDATE METHOD 2 (no need if PureComponent)
    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('---', 'shouldComponentUpdate')
    //     return this.state.isOpen !== nextState.isOpen
    // }

    //UPDATE METHOD 3
    componentWillUpdate(nextProps, nextState) {
        console.log('---', 'componentWillUpdate')
    }

    //UPDATE METHOD 4
    componentDidUpdate(prevProps, prevState) {
        console.log('---', 'componentDidUpdate')
    }

    //DELETE METHOD 1
    componentWillUnmount() {
        console.log('---', 'Unmounting')
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // handleClick = () => {
    //     console.log('---', 'clicked');
    //     this.setState({
    //         isOpen: !this.state.isOpen
    //     })
    // }
}

export default Article
