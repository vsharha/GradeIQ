function Submission({submission}) {
  const {studentName, submittedOn} = submission

  return (
    <div>
      <p>{studentName}</p>
    </div>
  );
}

export default Submission;