import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMailboxFull = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M16.5 10a.5.5 0 01-.5-.5V4h-4.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v9a.5.5 0 01-.5.5zM16 3V1h-4v2h4z" />,
    <path d="M11.5 24a.5.5 0 01-.5-.5V17H.5a.5.5 0 01-.5-.5v-6C0 8.019 2.019 6 4.5 6h10a.5.5 0 010 1h-10C2.57 7 1 8.57 1 10.5V16h19V7h-1.5a.5.5 0 010-1h2a.5.5 0 01.5.5V9h2.5a.498.498 0 01.494.583l-1 5.999A.5.5 0 0122.5 16H21v.5a.5.5 0 01-.5.5H12v6.5a.5.5 0 01-.5.5zm10.577-9l.833-5H21l1.077 5z" />
  );

export default SvgMailboxFull;
