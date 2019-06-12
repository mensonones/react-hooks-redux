import React from "react";

import { useSelector, useDispatch } from "react-redux";

export default function CourseList() {
  const courses = useSelector(state => state.data);
  const dipatch = useDispatch();

  function addCourse() {
    dipatch({ type: "ADD_COURSE", title: "GraphQL" });
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Adicionar Curso
      </button>
    </>
  );
}
