export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-automaster-900/95 py-10 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <div>
          <p className="text-sm text-white">AutoMasterPro.ma</p>
          <p className="mt-2 text-sm">Morocco's premium automotive marketplace for garages, mechanics, and roadside assistance.</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} AutoMasterPro.ma. All rights reserved.</p>
      </div>
    </footer>
  );
}
