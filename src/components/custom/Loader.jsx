function Loader({size = 1}) {
  return (
    <div className="overflow-hidden">
      <div style={{height:`${2*size}rem`, width:`${2*size}rem`, borderWidth:`${0.25*size}rem`}} className="border-muted border-t-muted-foreground rounded-full animate-spin"></div>
    </div>
  );
}

export default Loader;