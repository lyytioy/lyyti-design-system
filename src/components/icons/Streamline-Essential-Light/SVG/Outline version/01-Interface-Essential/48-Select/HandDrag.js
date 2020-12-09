import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHandDrag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.165 23c-2.372 0-4.186-1.51-5.056-2.409C4.828 19.266 4 17.66 4 16.5v-4c0-1.103.897-2 2-2h1v-4a2.002 2.002 0 013.113-1.661 2 2 0 013.774 0A2.002 2.002 0 0117 6.5v.268A2.002 2.002 0 0120 8.5v9c0 3.033-2.467 5.5-5.5 5.5h-3.335zM6 11.5c-.551 0-1 .449-1 1v4c0 1.764 2.917 5.5 6.165 5.5H14.5c2.481 0 4.5-2.019 4.5-4.5v-9a1.001 1.001 0 00-2 0v4a.5.5 0 01-1 0v-6a1.001 1.001 0 00-2 0v5a.5.5 0 01-1 0v-6a1.001 1.001 0 00-2 0v6a.5.5 0 01-1 0v-5c0-.551-.449-1-1-1s-1 .449-1 1v9a.5.5 0 01-1 0v-4H6z" />
  );

export default SvgHandDrag;
