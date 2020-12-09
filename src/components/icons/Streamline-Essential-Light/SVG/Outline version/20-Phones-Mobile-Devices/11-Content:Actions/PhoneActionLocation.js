import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionLocation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={21.5} r={0.75} />,
    <path d="M7.5 24A2.503 2.503 0 015 21.5v-19C5 1.121 6.121 0 7.5 0h9C17.878 0 19 1.121 19 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21.5c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5V20H6v1.5zM18 19V5H6v14h12zm0-15V2.5c0-.827-.673-1.5-1.5-1.5h-9C6.673 1 6 1.673 6 2.5V4h12z" />,
    <path d="M10.5 3a.5.5 0 010-1h3a.5.5 0 010 1h-3zM8.8 17a.499.499 0 01-.464-.686l3.2-8C11.612 8.123 11.794 8 12 8s.388.123.464.314l3.2 8a.5.5 0 01-.793.562L12 14.365l-2.871 2.512A.504.504 0 018.8 17zm1.237-2.247l1.633-1.429a.503.503 0 01.659 0l1.633 1.429L12 9.846l-1.963 4.907z" />
  );

export default SvgPhoneActionLocation;
