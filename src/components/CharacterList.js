import React from 'react';
import Card from './CharacterCard';

const StudentContainer = (props) => {
  const allStudentsCards = [...props.allStudents].map(student=><Card handleEdit={props.handleEdit} handleToggle={props.handleToggle} studentData={student} key={student._id} />)
  return (
    <div id="character-list">
    {allStudentsCards}
    </div>
  )
}

export default StudentContainer;
