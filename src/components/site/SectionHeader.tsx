export function SectionHeader({
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  tone?: "dark" | "light";
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      <h2
        className="font-display uppercase leading-[1.05] text-cream"
        style={{ fontSize: "clamp(2rem, 6vw, 3.75rem)" }}
      >
        {title}
      </h2>
      <div
        className={`mt-4 h-1.5 w-16 rounded-full bg-steel sm:w-20 ${
          isCenter ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p
          className={`mt-5 text-sm leading-relaxed text-cream/75 sm:text-base lg:text-lg ${
            isCenter ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
