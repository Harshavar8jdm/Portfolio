export default function Footer() {
  return (
    <footer className="bg-slate-900 py-8 text-center border-t border-slate-800 mt-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} A. Harsha Ganesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
