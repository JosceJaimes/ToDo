import React, { Component } from 'react';



class TodoForm extends Component {
    constructor(){
        super();
            this.state = {
                'title': '',
                'responsable': '',
                'description': '',
                'priority': 'low' 
            }; 
    }
    // console.log(this.state);
//cuando se usa el input original se va a comenzar a modificar el estado con thsi.setstate 
    handleInput=(e)=> {
        const { value, name } = e.target;
        this.setState({
            [name]: value
        });
        // console.log(this.state);                     
    }
    handleSubmit=(e)=>{
            e.preventDefault();
            this.props.onAddTodo(this.state);
            this.setState({
                title:'',
                responsable:'',
                description:'',
                priority:'low'
            })
            console.log(this.state) 
       console.log('enviando datos')
    }
    render () {
        return ( 
        <div className= "card">
            <form onSubmit={ this.handleSubmit } className = "card-body">
                <div className = "form-group" onSubmit={ this.handleSubmit }>
                    <input 
                    type="text"
                    name="title"
                    className="form-control"
                    placeholder= "Title"
                    onChange={ this.handleInput}
                    />
                </div>    
                <div className="form-group">
                    <input 
                    type="text"
                    name="responsable"
                    className="form-control"
                    placeholder= "Responsible"
                    onChange={ this.handleInput}
                    />
                </div>
                <div className="form-group">
                    <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder= "Description"
                    onChange={ this.handleInput}
                    />
                </div>
                <div className="form-group">
                    <select 
                    name="priority"
                    className="form-control"
                    value= {this.onAddTodo}
                    onChange={ this.handleInput}
                    >
                    <option >low</option>
                    <option >medium</option>
                    <option >heigth</option>
                    </select>

                </div>
                <div>
                <button onClick={this.handleInput}>Save</button>
            </div>
                </form>


        </div> 
        )
    };
    
}

export default TodoForm;




