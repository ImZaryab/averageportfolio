interface TextBadgeProps {
  isSideProject: boolean;
}

const TextBadge = ({ isSideProject }: TextBadgeProps) => {
  return (
    <span className={`flex items-center gap-1 rounded-full ${ isSideProject ? "bg-violet-500/10 text-violet-500" : "bg-emerald-500/10 text-emerald-500"} px-2 py-1 text-xs`}>
      {isSideProject ? "Side-Project" : "Client-Project"}
    </span>
  );
};

export default TextBadge;
