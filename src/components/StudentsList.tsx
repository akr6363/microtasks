import React from 'react';

type StudentType = {
    id: number
    name: string
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentType>
}

const StudentsList: React.FC<NewComponentPropsType> = (props) => {
    return (
        <ul>
            {props.students.map((student, index) => {
                return (
                    <li key={student.id}>{student.name} age: {student.age}</li>
                )
            })}
        </ul>
    );
};

export default StudentsList;