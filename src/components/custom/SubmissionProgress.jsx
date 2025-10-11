import StyledProgress from "@/components/assignments/StyledProgress";
import { getSubmissionCount } from "@/data/data";

function SubmissionProgress({ assignmentID }) {
  const { count, confirmed_count } = getSubmissionCount(assignmentID)
  console.log(confirmed_count)

  return (
    <StyledProgress value={confirmed_count} max={count} label="Grading progress"/>
  );
}

export default SubmissionProgress;