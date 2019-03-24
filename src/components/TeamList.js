import React from 'react';
import Card from './CharacterCard'

const TeamList = (props) => {
  const teamStudentsCards = [...props.teamStudents].map(student=><Card handleEdit={props.handleEdit} handleToggle={props.handleToggle} studentData={student} key={student._id} />)

  return (
    <div id="team-list">
      <h2>My Wizarding Team</h2>
        {teamStudentsCards}
    </div>
  )
}

export default TeamList;
