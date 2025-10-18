function PassingGrade({grade, passing_grade, max_grade}) {
  if(Number.isFinite(grade)) {
    return <>
      <span className={grade>=passing_grade?"text-passed":"text-failed"}>{grade?.toFixed(2)}</span> / <span>{max_grade?.toFixed(2)}</span>
    </>
  }

  return "N/A"
}

export default PassingGrade;