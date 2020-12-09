import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLockUnlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M19.5 9.5h-.75V6.75A6.751 6.751 0 005.533 4.811a1.25 1.25 0 102.395.717A4.251 4.251 0 0116.25 6.75V9a.5.5 0 01-.5.5H4.5a2 2 0 00-2 2V22a2 2 0 002 2h15a2 2 0 002-2V11.5a2 2 0 00-2-2zm-9.5 6a2 2 0 113 1.723V19.5a1 1 0 01-2 0v-2.277a1.994 1.994 0 01-1-1.723z" />
  );

export default SvgLockUnlock;
