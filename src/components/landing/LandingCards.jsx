import LandingCard from "@/components/landing/LandingCard";

function LandingCards({cards}) {
  return (
    <div className="w-full p-3 px-5 flex flex-col items-center sm:flex-row h-fit md:h-55 lg:h-60 flex-1">
      {cards.map(({title, icon}, i) =>
        <LandingCard title={title} key={title} index={i+1}>
          {icon}
        </LandingCard>
      )}
    </div>
  );
}

export default LandingCards;