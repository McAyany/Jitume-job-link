export function Card({ title, children }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      {children}
    </div>
  );
}
