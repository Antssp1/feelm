import React, {Component} from "react"
import "./index.css"

class BoutonTri extends Component{
    constructor(props){
        super(props)
        this.state = {
            byPopular : true
        }
    }
    changeButton(str){
        this.props.activate(str)
        this.setState({
            byPopular : !this.state.byPopular
        })
    }

    render(){
        return (  
    <div className={"tri-bar " + (this.state.byPopular ? 'popular-container' : 'latest-container')}>
        <button className='popular' onClick={() => this.changeButton('popularity')}>Popularity</button>
        <button className='latest' onClick={() => this.changeButton('release_date.lte=2018-12-05')}>Recent</button>
    </div>
        )}
}

export default BoutonTri