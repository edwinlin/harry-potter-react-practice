import React from 'react';

class CharacterCard extends React.Component {
  state={
    editForm:false,
    formName:""
  }

  handlEditClick=()=>{
    this.setState({editForm:!this.state.editForm})
  }

  render(){
    // console.log(this.state.editForm)
    if(this.state.editForm){
      return (
        <div id="character-card">
        <input type="text" value={this.props.formName} onChange={(e)=>this.setState({formName:e.target.value})} />
          <div>
          <button onClick={()=>{
            this.setState({editForm:false})
            if(this.state.formName!==""){
              this.props.handleEdit(this.props.studentData, this.state.formName)
            }else{
              this.props.handleEdit(this.props.studentData, this.props.studentData.name)
            }
          }}>Edit Name</button>
          </div>
        </div>
      )
    }else{
      return (
        <div id="character-card">
        {this.props.studentData.name}
          <div>
          <button onClick={()=>this.props.handleToggle(this.props.studentData)}>Toggle</button>
          <button onClick={this.handlEditClick}>Edit</button>
          </div>
        </div>
      )
    }
  }

}

export default CharacterCard;
