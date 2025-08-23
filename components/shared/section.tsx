export default function Section({
  heading,
  subheading,
  secondary,
  children,
}: {
  heading: string;
  subheading: string;
  secondary: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-32 container mx-auto px-4">
      <div className="text-center">
        <p className="text-primary font-bold uppercase">{subheading}</p>
        <h2 className="my-4 text-pretty text-4xl font-bold lg:text-6xl">
          {heading}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl mx-auto">
          {secondary}
        </p>
      </div>
      {children}
    </section>
  );
}
