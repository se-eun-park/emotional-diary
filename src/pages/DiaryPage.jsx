import React from "react";
import { useParams } from "react-router-dom";

const DiaryPage = () => {
  const { id } = useParams();
  console.log(id);

  return <div>diary</div>;
};

export default DiaryPage;
