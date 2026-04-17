export const Input = (props: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="w-full px-3 py-2 border rounded-lg focus:ring-2 outline-none"
      {...props}
    />
  );
};
