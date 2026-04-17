// src/components/layout/main-layout.tsx
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <header className="p-4 border-b bg-white">Header</header>
      <main className="p-6">{children}</main>
    </div>
  );
};
