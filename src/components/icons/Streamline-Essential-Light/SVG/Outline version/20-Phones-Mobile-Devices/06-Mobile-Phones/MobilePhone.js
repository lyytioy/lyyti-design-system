import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobilePhone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M6.5 24A2.503 2.503 0 014 21.5v-19C4 1.121 5.121 0 6.5 0h11C18.878 0 20 1.121 20 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-11zM5 21.5c0 .827.673 1.5 1.5 1.5h11c.827 0 1.5-.673 1.5-1.5V20H5v1.5zM19 19V2.5c0-.827-.673-1.5-1.5-1.5h-11C5.673 1 5 1.673 5 2.5V19h14z" />,
    <path d="M9.5 3a.5.5 0 010-1h5a.5.5 0 010 1h-5z" />,
    <circle cx={12} cy={21.25} r={0.75} />
  );

export default SvgMobilePhone;
