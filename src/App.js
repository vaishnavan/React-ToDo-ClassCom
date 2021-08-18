import React from 'react';
import Display from './Display';

class App extends React.Component{

    constructor(){
      super();
      this.state = {
        id:'',
        item:'',
        itemData:[],
        toggleSubmit:true,
        isEditItem:null,
      }
    }

    handleChange = (e) => {
      // console.log(e.target.value);
      this.setState({
        item:e.target.value,
      })
    }

    handleSubmit = (e) => {
      e.preventDefault();
      const {itemData, item, isEditItem} = this.state;
      if(!item){
        alert("fill all fields");
      }else if(isEditItem){
         this.setState({
          itemData: itemData.map((data) => {
            if(data.id === isEditItem){
              return{...data, name:item}
            }
            return data;
          }),
          item:''
         })
      }else{
        this.setState({
          itemData:[...itemData, {id:Math.floor(Math.random()*1000), name:item}],
          item:''
        })   
      }
      
                         
      // console.log(myData);
    }

    handleDelete = (ids) => {
      console.log(ids)
      const {itemData} = this.state;
      // // const findIndexData = itemData.findIndex((data,i) => data[i]);
      // const myDelete = itemData.slice(ind,1);
      const filterDelete = itemData.filter((data, i) => data.id !== ids)
      console.log(filterDelete);
      this.setState({
        itemData:filterDelete
      })
    }

    handleEdit = (ids) => {
      // console.log(ind)
      const {itemData} = this.state;
      const myData = itemData.find((data,i) => data.id === ids);
      console.log(myData);
      this.setState({
        item:myData.name,
        toggleSubmit:false,
        isEditItem:ids,
      })

    }

    render(){
      console.log(this.state.itemData);
      const {item, itemData, toggleSubmit } = this.state
      return(
        <>
           <form>
             <input type="text" value={item} placeholder="enter item" onChange={(e) => this.handleChange(e)} />
             {toggleSubmit ? <button onClick={(e) => this.handleSubmit(e)} type="submit">Add</button>:<button onClick={(e) => this.handleSubmit(e)} type="submit">Update</button> }
            </form>
            <Display  
              myDataItem={itemData} 
              onEdit={this.handleEdit} 
              onDelete={this.handleDelete} 
            />
        </>
      )
    }
}

export default App;