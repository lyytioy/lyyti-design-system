import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPortablePlayer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 24C5.57 24 4 22.43 4 20.5v-17C4 1.57 5.57 0 7.5 0h9C18.43 0 20 1.57 20 3.5v17c0 1.93-1.57 3.5-3.5 3.5h-9zm0-23A2.502 2.502 0 005 3.5v17C5 21.878 6.121 23 7.5 23h9c1.378 0 2.5-1.122 2.5-2.5v-17C19 2.121 17.878 1 16.5 1h-9z" />,
    <path d="M7 9c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h10c.552 0 1 .449 1 1v4c0 .551-.448 1-1 1H7zm0-1h10V4H7v4zM12 21.5c-3.033 0-5.5-2.467-5.5-5.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5-2.467 5.5-5.5 5.5zm0-10c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5z" />,
    <circle cx={12} cy={16} r={0.75} />
  );

export default SvgPortablePlayer;
