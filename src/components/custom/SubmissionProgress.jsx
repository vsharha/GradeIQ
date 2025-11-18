import StyledProgress from "@/components/assignments/StyledProgress";
import useSubmissions from "@/hooks/useSubmissions";
import ErrorMessage from "@/components/custom/ErrorMessage";

function SubmissionProgress({ assignment }) {
  const { id } = assignment;

  const { submissions, error, isLoading } = useSubmissions(id);

  const confirmed_count = submissions?.reduce(
    (total, submission) => total + (submission.grade_confirmed ? 1 : 0),
    0,
  );

  return (
    <StyledProgress
      value={confirmed_count || 0}
      max={submissions?.length || 0}
      label="Grading progress"
      isLoading={isLoading}
      error={error}
    />
  );
}

export default SubmissionProgress;
