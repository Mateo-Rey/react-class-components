import React,{Component} from 'react'

export class ClassComponent extends Component {
    constructor(props){
        super(props)
    
        this.state = {
            count: props.count,
            coffee: []
        }
    }
    componentDidMount() {
        let url = 'https://api.sampleapis.com/coffee/hot'
        fetch(url)
        .then(res=> res.json())
        .then(data => {
            this.setState({
            coffee: data
            })
        })
    }
    render() {
        return (
            <>
            {this.state.count}
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                })
            }}>Add one</button>
            {this.state.coffee.map((coffee) => {
                return <h1 key={coffee.id}>{coffee.title}</h1>
            })}
            </>
        )
    }
}