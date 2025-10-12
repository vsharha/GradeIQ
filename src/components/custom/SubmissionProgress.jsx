import StyledProgress from "@/components/assignments/StyledProgress";
import useSubmissions from "@/hooks/useSubmissions";
import ErrorMessage from "@/components/custom/ErrorMessage";

function SubmissionProgress({ assignment }) {
  const { id } = assignment;

  const {submissions, error, isLoading} = useSubmissions(id)

  if (error) {
    return <ErrorMessage error={error}/>
  }

  if(isLoading || !submissions) {
    return null
  }

  const confirmed_count = submissions.reduce((total, submission) => total + (submission.grade_confirmed ? 1 : 0), 0)

  return (
    <StyledProgress value={confirmed_count} max={submissions.length} label="Grading progress"/>
  );
}

export default SubmissionProgress;