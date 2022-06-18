import Home from "./Home";
import Default from "./Default";
import Other from "./Other";
function HomeLayout({ children }) {
  return (
    <Default>
      <Home>{children}</Home>
    </Default>
  );
}

function OtherLayout({ children }) {
  return (
    <Default>
      <Other>{children}</Other>
    </Default>
  );
}
// export { default as DefaultLayout } from "./Default";
// export { default as HomeLayout } from "./Home";
export { HomeLayout, OtherLayout };
