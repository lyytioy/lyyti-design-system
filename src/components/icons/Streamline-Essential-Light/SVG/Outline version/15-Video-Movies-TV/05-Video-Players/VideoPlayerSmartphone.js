import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoPlayerSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.039 15.923a1.036 1.036 0 01-1.042-1.037v-6.77a1.044 1.044 0 011.555-.903l5.922 3.385a1.039 1.039 0 010 1.804l-5.921 3.384c-.158.09-.335.137-.514.137zm-.001-7.846a.04.04 0 00-.04.04v6.767c.016.037.035.039.04.039l5.94-3.389c.025-.033.019-.057 0-.068l-5.921-3.384-.019-.005zM9.498 3a.5.5 0 010-1h5a.5.5 0 010 1h-5z" />,
    <path d="M5.5 24A2.503 2.503 0 013 21.5v-19C3 1.121 4.121 0 5.5 0h13C19.878 0 21 1.121 21 2.5v19c0 1.378-1.122 2.5-2.5 2.5h-13zM4 21.5c0 .827.673 1.5 1.5 1.5h13c.827 0 1.5-.673 1.5-1.5V20H4v1.5zM20 19V2.5c0-.827-.673-1.5-1.5-1.5h-13C4.673 1 4 1.673 4 2.5V19h16z" />,
    <circle cx={12} cy={21.25} r={0.75} />
  );

export default SvgVideoPlayerSmartphone;
