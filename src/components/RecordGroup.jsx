import React, { useContext, useEffect, useState } from "react";
import SkeletonRecord from "./SkeletonRecord";
import Record from "./Record";
import { GetCourse } from "../service/courses.service";
import { DataContext } from "../Context/DataContext";

const RecordGroup = () => {
  const {courses,setCourses} = useContext(DataContext);
  const [ready,setReady] = useState(false);
  const LoaderRowCount = Array.from({length:4},(_,index) => index);

    useEffect(() => {
        (async() => {
            const data = await GetCourse();
            setCourses(data);
            setReady(true);
        })()
    },[])
  return (
    <tbody id="recordGroup">
      {!ready && LoaderRowCount.map((el,index) => <SkeletonRecord key={index} />)}
      {courses.map((course) => <Record key={course.id} course={course} />)}
    </tbody>
  );
};

export default RecordGroup;
