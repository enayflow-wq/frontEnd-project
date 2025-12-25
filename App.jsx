function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <div className="max-w-md w-full mx-4">
        {/* Main Card */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
          {/* Status Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
              <span className="text-xs font-medium text-emerald-700 tracking-wide">ACTIVE</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-semibold text-neutral-900 text-center mb-3 tracking-tight">
            Tailwind CSS
          </h1>

          {/* Subtitle */}
          <p className="text-neutral-500 text-center text-sm leading-relaxed mb-8">
            Jika warna, spacing, dan tipografi berubah, berarti Tailwind sudah berjalan dengan baik pada sistem Anda.
          </p>

          {/* Button */}
          <button className="w-full py-3 bg-neutral-900 text-white text-sm font-medium rounded-lg hover:bg-neutral-800 transition-colors duration-200">
            Test Interaction
          </button>

          {/* Divider */}
          <div className="my-8 border-t border-neutral-100"></div>

          {/* Features Grid */}
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Font</div>
              <div className="text-neutral-900 text-sm font-medium">Inter</div>
            </div>
            <div>
              <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Theme</div>
              <div className="text-neutral-900 text-sm font-medium">Minimal</div>
            </div>
            <div>
              <div className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Status</div>
              <div className="text-emerald-600 text-sm font-medium">Ready</div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <p className="text-center text-xs text-neutral-400 mt-6">
          Powered by Tailwind CSS
        </p>
      </div>
    </div>
  );
}

export default App;

