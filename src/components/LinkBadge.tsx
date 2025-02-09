import Image from "next/image";

interface LinkBadgeProps {
  title: string;
  border?: boolean;
  underline?: boolean;
  href: string;
  disabled?: boolean;
}

const LinkBadge = ({
  title,
  href,
  disabled,
  underline = false,
  border = true,
}: LinkBadgeProps) => {
  return (
    <button disabled={disabled} className="disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-30 disabled:select-none">
      <a
        aria-disabled={disabled}
        target={disabled ? "_self" : "_blank"}
        href={href}
        className={`text-zinc-400 text-sm w-fit py-2 px-4 flex items-center gap-2 group rounded-full transition duration-500 hover:cursor-pointer ${
          border ? "border border-slate-700" : ""
        } hover:bg-slate-700 hover:text-white disabled:pointer-events-none`}
      >
        <p className={`${underline ? "underline underline-offset-2" : ""}`}>
          {title}
        </p>
        <Image
          src={"/arrow-up-right.svg"}
          height={24}
          width={24}
          alt=""
          className="group-hover:rotate-45 transition duration-300"
        />
      </a>
    </button>
  );
};

export default LinkBadge;
