import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLikePlus = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.5 24A2.503 2.503 0 010 21.5v-19C0 1.121 1.121 0 2.5 0h19C22.878 0 24 1.121 24 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-19zM1 21.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V6H1v15.5zM23 5V2.5c0-.827-.673-1.5-1.5-1.5H17v4h6zm-7 0V1H8v4h8zM7 5V1H2.5C1.673 1 1 1.673 1 2.5V5h6z" />,
    <path d="M10.5 20a.5.5 0 01-.5-.5V17H7.5a.5.5 0 01-.5-.5v-3a.5.5 0 01.5-.5H10v-2.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5V13h2.5a.5.5 0 01.5.5v3a.5.5 0 01-.5.5H14v2.5a.5.5 0 01-.5.5h-3zm2.5-1v-2.5a.5.5 0 01.5-.5H16v-2h-2.5a.5.5 0 01-.5-.5V11h-2v2.5a.5.5 0 01-.5.5H8v2h2.5a.5.5 0 01.5.5V19h2z" />
  );

export default SvgLikePlus;
