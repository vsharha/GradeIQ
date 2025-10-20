function LandingFooter() {
  return (
    <footer className="flex items-center justify-center py-4">
      <p className="text-center w-fit">&copy; GradeIQ, {(new Date()).getFullYear()}</p>
    </footer>
  );
}

export default LandingFooter;