import Link from "next/link";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  href?: string;
}

const sizes = {
  sm: { pin: 28, font: "text-lg",  gap: "gap-2" },
  md: { pin: 36, font: "text-2xl", gap: "gap-2.5" },
  lg: { pin: 48, font: "text-3xl", gap: "gap-3" },
};

export function Logo({ size = "md", href = "/" }: LogoProps) {
  const s = sizes[size];
  const inner = (
    <span className={`flex items-center ${s.gap} select-none`}>
      <svg
        width={s.pin}
        height={Math.round(s.pin * 1.2)}
        viewBox="0 0 40 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="20" cy="18" r="18" fill="#6BA07E" />
        <path d="M14 32 L20 48 L26 32" fill="#6BA07E" />
        <rect x="9"  y="12" width="22" height="4"  rx="2" fill="white" />
        <rect x="17" y="12" width="6"  height="14" rx="2" fill="white" />
        <circle cx="32" cy="6" r="5.5" fill="#C4883A" />
      </svg>
      <span
        className={`font-serif ${s.font} font-semibold tracking-tight leading-none`}
        style={{ color: "#2A3B30", letterSpacing: "-0.02em" }}
      >
        tro<span style={{ color: "#6BA07E" }}>vu</span>
      </span>
    </span>
  );

  if (href) return <Link href={href} className="focus:outline-none">{inner}</Link>;
  return inner;
}
