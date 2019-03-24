import React from 'react';

const Nav = (props) => {
  return (
    <div id="nav">
    Filter
    <input type="text" value={props.filterSearch} onChange={(e)=>{
      // props.filterHelper(props.data.allStudents)
      // props.filterHelper(props.data.allStudents.filter(student=>student.name.toLowerCase().includes(e.target.value.toLowerCase())))

      props.handleFilterType(e.target.value)
    }}/>
    </div>
  )
}

export default Nav;
