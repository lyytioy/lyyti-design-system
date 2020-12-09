import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEraser = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11 21.657H1a1 1 0 000 2h10a1 1 0 100-2zM20.513 6.435L14.858.777a1.5 1.5 0 00-2.121 0L4.977 8.54a1 1 0 000 1.414l6.361 6.364a1 1 0 001.414 0l7.761-7.762a1.5 1.5 0 000-2.121zM1.8 19.114a1.754 1.754 0 001.2.543h4.662a1.823 1.823 0 001.215-.528L9.889 18a.5.5 0 00-.02-.689L4.1 11.585a.522.522 0 00-.708 0L.74 14.286a2.592 2.592 0 00-.021 3.6zM16.5 21.657h-2a1 1 0 100 2h2a1 1 0 000-2zM23 21.657h-2a1 1 0 000 2h2a1 1 0 000-2z" />
  );

export default SvgEraser;
