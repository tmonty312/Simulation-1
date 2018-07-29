import React,{Component} from 'react'
//import { url } from 'inspector';
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            image_url: ''
        }
    }
    changeEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }
    handleImage = (e) => {
        this.setState({image_url: e.tartget.value})
    }
addInvintoy= () => {
    const {name, price, image_url} = this.state
    const newPie = {name, price, image_url}
    axios.post('/api/product', newPie).then(results =>{
        this.props.updateInvintory(results.data)
        console.log(this.addInvintoy)
    })

    }
    render() {
        return(
            <div className= "container-form">
                <div className= 'name-css'>
                    <input className= "name-css" type= "text" placeholder='Name' value={this.state.name} onChange={this.handleName}/>
                    <input className= "name-css" type= "number" placeholder='Price' value={this.state.price} onChange={this.handlePrice}/>
                    <input className= "name-css" type= 'text' placeholder='image url' value={this.state.image_url} onChange={this.handleImage}/>
                    <button className= "create-button-add" onClick={this.state.addInvintoy}>Add To Inventory</button>
                    <button className= "create-button-cancel" onClick={this.state.changeEdit}>Cancel</button>
                </div>
            </div>
        )
    }

}

export default Form
