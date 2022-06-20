import { memo } from "react";
import "./GlobalStyles.scss";
function GlobalStyles({ children }) {
  return children;
}
export default memo(GlobalStyles);
