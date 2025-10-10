import StyledProgress from "@/components/assignments/StyledProgress";
import { getSubmissionCount } from "@/data/data";

function SubmissionProgress({ assignmentID }) {
  const { count, confirmedCount } = getSubmissionCount(assignmentID)

  return (
    <StyledProgress value={confirmedCount} max={count} label="Grading progress"/>
  );
}

export default SubmissionProgress;