import { useParams } from "react-router-dom";

export const Survey = () => {
  let { moodId } = useParams();

  return <div>survey {moodId}</div>;
};
