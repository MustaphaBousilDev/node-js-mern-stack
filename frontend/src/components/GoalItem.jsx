import React from 'react'

const GoalItem = ({goal}) => {
  return (
    <div className='goal'>
        <div>
            {new Date(goal.createdAt)}
        </div>
    </div>
  )
}

export default GoalItem