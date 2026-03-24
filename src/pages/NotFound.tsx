import { Link } from "react-router-dom";

const NotFound = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background">
    <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
    <p className="text-xl text-muted-foreground mb-8">Page not found</p>
    <Link to="/" className="text-primary hover:underline">Go back home</Link>
  </div>
);

export default NotFound;
