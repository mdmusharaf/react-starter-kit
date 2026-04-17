export const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="p-4 bg-white border rounded-2xl shadow-sm">{children}</div>
  );
};
