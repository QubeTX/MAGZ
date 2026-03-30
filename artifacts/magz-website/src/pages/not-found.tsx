export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background text-foreground">
      <div className="text-center border-4 border-foreground p-12">
        <h1 className="font-display text-8xl mb-4">404</h1>
        <p className="font-mono text-lg tracking-widest uppercase">Page Not Found</p>
      </div>
    </div>
  );
}
