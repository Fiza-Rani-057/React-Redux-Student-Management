import "./Student.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddStudent, DeleteStudent } from "../Redux/Std";

function StudentApp() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const students = useSelector((state) => state.students.Students);
    const dispatch = useDispatch();
    const handleAddStudent = (e) => {
        e.preventDefault();
        if (!name.trim() || !age || Number(age) <= 0) {
            return;
        }

        const newStudent = {
            id: Date.now(),
            name: name.trim(),
            age: Number(age),
        };
        dispatch(AddStudent(newStudent));
        setName("");
        setAge("");
    }
    const handleDeleteStudent = (id) => {
        dispatch(DeleteStudent(id));
    };

    return (
        <div className="main">
            <h1>Student Details</h1>
            <h3>Total Students {students.length}</h3>
            <form onSubmit={handleAddStudent}>
                <label>Enter Your Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label>Enter Your Age</label>
                <input type="number"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <button type="submit">Add Student</button>
            </form>

            <h2>Student Details</h2>
            {students.length === 0 ? (
                <p>No Student Found</p>
            ) : (
                students.map((student) => {
                    return (
                        <div className="student-details" key= {student.id}>
                            <p> Name: {student.name}</p>
                            <p> Age: {student.age}</p>
                            <button onClick={() => handleDeleteStudent(student.id)}>
                                Delete</button>
                        </div>
                    )

                })
            )}
        </div>
    )
};
export { StudentApp }