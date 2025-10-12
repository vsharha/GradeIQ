function Loader({size = 1}) {
  return (
    <div className="overflow-hidden">
      <div style={{height:`${2*size}rem`, width:`${2*size}rem`, borderWidth:`${0.25*size}rem`}} className="border-t-stone-500 border-stone-400 rounded-full animate-spin dark:border-input dark:border-t-muted-foreground"></div>
    </div>
  );
}

export default Loader;