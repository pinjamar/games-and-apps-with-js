import { Link, Outlet } from "react-router-dom";

export default function Welcome() {
  return (
    <section>
      <h1>Welcome page</h1>
      <Link to="new-user">New User</Link>
      <Outlet />
    </section>
  );
}
