export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-50"
      style={{
        background: `
          radial-gradient(
            circle at 20% 20%,
            rgba(122,103,255,.16),
            transparent 30%
          ),

          radial-gradient(
            circle at 80% 75%,
            rgba(94,235,255,.14),
            transparent 32%
          ),

          #080611
        `,
      }}
    />
  );
}