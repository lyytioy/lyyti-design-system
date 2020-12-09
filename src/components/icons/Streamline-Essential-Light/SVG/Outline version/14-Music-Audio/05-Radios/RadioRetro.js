import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRadioRetro = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.5 24a.5.5 0 01-.5-.5V22H4v1.5a.5.5 0 01-1 0V22h-.5A2.503 2.503 0 010 19.5v-10C0 8.121 1.121 7 2.5 7H5V3.5a.5.5 0 011 0V7h15.5C22.878 7 24 8.121 24 9.5v10c0 1.378-1.122 2.5-2.5 2.5H21v1.5a.5.5 0 01-.5.5zM1 19.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V16H1v3.5zM23 15V9.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 8 1 8.673 1 9.5V15h22z" />,
    <path d="M4 13a.5.5 0 010-1h16a.5.5 0 010 1H4zM4 11a.5.5 0 010-1h16a.5.5 0 010 1H4zM5.5 19a.5.5 0 010-1h13a.5.5 0 010 1h-13z" />,
    <circle cx={3} cy={18.5} r={0.75} />,
    <circle cx={21} cy={18.5} r={0.75} />,
    <path d="M5.5 2a.5.5 0 01-.5-.5v-1a.5.5 0 011 0v1a.5.5 0 01-.5.5zM7.5 4a.5.5 0 010-1h1a.5.5 0 010 1h-1zM2.5 4a.5.5 0 010-1h1a.5.5 0 010 1h-1z" />
  );

export default SvgRadioRetro;
