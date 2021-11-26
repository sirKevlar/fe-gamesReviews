export default function FancyCard({ children, commentBody }) {
  return (
    <section key={commentBody} className="fancy-card">
      {children}
    </section>
  );
}
