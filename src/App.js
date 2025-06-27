import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", age: "", level: "" });

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/students")
      .then((res) => setStudents(res.data));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:8080/api/students", form);
    setStudents([...students, res.data]);
    setForm({ name: "", age: "", level: "" });
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/students/${id}`);
    setStudents(students.filter((s) => s.id !== id));
  };

  return (
    <div style={{ padding: 30 }}>
      <h1>French Students</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Age"
          type="number"
          required
        />
        <input
          name="level"
          value={form.level}
          onChange={handleChange}
          placeholder="Level"
          required
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} - {s.age} - {s.level}
            <button
              onClick={() => handleDelete(s.id)}
              style={{ marginLeft: 10 }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
