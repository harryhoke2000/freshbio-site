export function Card({ className = '', children }) {
  return (
    <div className={`bg-white shadow-sm rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}
