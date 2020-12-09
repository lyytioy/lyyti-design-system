import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonStop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M8.5 16.999c-.827 0-1.5-.673-1.5-1.5v-7c0-.827.673-1.5 1.5-1.5h7c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5h-7zm0-9a.5.5 0 00-.5.5v7a.5.5 0 00.5.5h7a.5.5 0 00.5-.5v-7a.5.5 0 00-.5-.5h-7z" />,
    <path d="M12 23.999c-6.617 0-12-5.383-12-12s5.383-12 12-12 12 5.383 12 12-5.383 12-12 12zm0-23c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.935-11-11-11z" />
  );

export default SvgButtonStop;
