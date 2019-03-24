import React, {Component} from 'react';
import './App.css';
import CharacterList from './components/CharacterList'
import TeamList from './components/TeamList'
import Nav from './components/Nav'
import {getGryffindor} from './endpoints'

class App extends Component {

  state={
    allStudents:[],
    teamStudents:[],
    editForm:false,
    filterSearch:"",
    filteredAll:[]
  }

  componentDidMount(){
    fetch(getGryffindor).then(resp=>resp.json())
    .then(json=>this.setState({allStudents:json[0].members, filteredAll:json[0].members}))
  }

  handleAllStudentsClick=(studentInfo)=>{
    const updatedStudents = [...this.state.allStudents].filter(student=> student._id !== studentInfo._id)
    this.setState({
      allStudents:updatedStudents,
      teamStudents:[studentInfo, ...this.state.teamStudents]
    })
  }

  handleTeamStudentsClick=(studentInfo)=>{
    const updatedStudents = [...this.state.teamStudents].filter(student=> student._id !== studentInfo._id)
    this.setState({
      allStudents:[studentInfo ,...this.state.allStudents],
      teamStudents:updatedStudents
    })
  }

  handleEditButtonClick=(prevData, newDataName)=>{
    // console.log(prevData, newDataName)
    const allStudentsCopy = [...this.state.allStudents]
    allStudentsCopy.find(student=>student._id===prevData._id).name=newDataName
    this.setState({allStudents:allStudentsCopy})
  }

  handleTeamEditButtonClick=(prevData, newDataName)=>{
    // console.log(prevData, newDataName)
    const allTeamStudentsCopy = [...this.state.teamStudents]
    allTeamStudentsCopy.find(student=>student._id===prevData._id).name=newDataName
    this.setState({teamStudents:allTeamStudentsCopy})
  }

  handleFilterType=(input)=>{
    this.setState({filterSearch:input})
  }

  // filterListHelper=(array)=>{
  //
  //   if(array == undefined){
  //     this.state.filteredAll = this.state.allStudents
  //   } else{
  //     this.setState({filteredAll:array})
  //   }
  // }

  filterListHelper=(array)=>{

    if(this.state.filterSearch===""){
      return array
    } else{
      return [...array].filter(student=>student.name.toLowerCase().includes(this.state.filterSearch.toLowerCase()))
    }
  }
  render(){

    console.log(this.state.filterSearch)
    return (
      <div id="character-container">
        <Nav data={this.state} filterHelper={this.filterListHelper} filterSearch={this.state.filterSearch} handleFilterType={this.handleFilterType}/>
        <CharacterList handleEdit={this.handleEditButtonClick} handleToggle={this.handleAllStudentsClick} allStudents={this.filterListHelper(this.state.allStudents)}/>
        <TeamList handleEdit={this.handleTeamEditButtonClick} handleToggle={this.handleTeamStudentsClick} teamStudents={this.filterListHelper(this.state.teamStudents)}/>
      </div>
    )
  }
}

export default App;
