import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6">
      <span className="text-accent-warm font-semibold tracking-wider uppercase text-sm mb-4">Error 404</span>
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Esta página no existe</h1>
      <p className="text-text-muted mb-8 max-w-md">
        Puede que el enlace esté mal escrito o que la página se haya movido.
      </p>
      <Link
        to="/"
        className="bg-accent hover:bg-accent-strong text-white px-8 py-3 rounded-full font-medium transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;
