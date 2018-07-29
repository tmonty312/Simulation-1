import React, {Component} from 'react'
import axios from 'axios'

export default class Product extends Component{
    constructor(props){
        super(props);
        this.state= {
            name: props.s.name,
            price: props.s.proce,
            image_url: props.s.image_url,
            edit:false
        }
    }
    handleName = (e) => {
        this.setState({name: e.target.value})
    }
    handlePrice = (e) => {
        this.setState({price: e.target.value})
    }
    handleImage = (e) => {
        this.setState({image_url: e.target.value})
    }
    
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }

    sendUpdate = (id) => {
        let {name, price, image_url} = this.state
        let product = {name, price, image_url}
        axios.put('/api/product/'+id, product).then(results=> {
            this.props.updateInvintory(results.data)
            // this.setState({
                // edit: false,
               
            // })
        })
    }
    deleteInvintory = (id) => {
        let {name, price, image_url} = this.state
        let product = {name, price, image_url}
        axios.delete('/api/product/'+id, product).then(results=> {
            this.props.updateInvintory(results.data)
            this.setState({
                edit: false,
                name: '',
                price:'',
                image_url:''
            })
        })
    }

render(){
    const { s } = this.props
    

        return(
         <div>
            <div>
        
                <input className= "myName" value={this.state.name} disabled={!this.state.edit} onChange={this.handleName}/>
                <input className= "myPrice" value={this.state.price} disabled={!this.state.edit} onChange={this.handlePrice}/>
                <input className= "myImage" value={this.state.price} disabled={!this.state.edit} onChange={this.handleImage}/>
                <button className= "buttons" onClick={()=> this.sendUpdate(s.id)}>Save</button>
                <button className= "buttons" onClick={ this.toggleEdit}>Edit</button>
                <button className= "buttons" onClick={()=> this.deletePie(s.id)}>Delete</button>
             </div>

        </div>
        )
}
}
