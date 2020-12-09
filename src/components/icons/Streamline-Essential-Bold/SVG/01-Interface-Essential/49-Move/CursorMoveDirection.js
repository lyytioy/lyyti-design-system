import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursorMoveDirection = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 12a12 12 0 10-12 12 12.013 12.013 0 0012-12zm-5.8-2.686a.746.746 0 01.818.162l1.994 1.992a.751.751 0 010 1.059l-1.986 2A.75.75 0 0117.75 14l-.008-3.993a.748.748 0 01.458-.693zM9.472 4.966l2-1.985a.748.748 0 011.056 0l2 1.985A.75.75 0 0114 6.248h-4a.75.75 0 01-.528-1.282zM6.25 14a.75.75 0 01-1.282.529l-1.986-2a.751.751 0 010-1.057l1.986-2A.75.75 0 016.25 10zM12 9a3 3 0 11-3 3 3 3 0 013-3zM9.472 19.03A.75.75 0 0110 17.748h4a.75.75 0 01.528 1.282l-2 1.986a.748.748 0 01-1.056 0z" />
  );

export default SvgCursorMoveDirection;
