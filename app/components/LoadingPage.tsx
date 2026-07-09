export default function LoadingPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-white/20 border-t-white"></div>
        <h1 className="text-2xl font-semibold mb-2">Loading…</h1>
        <p className="text-sm text-slate-300">Hang tight — your page is on its way.</p>
      </div>
    </div>
  );
}
