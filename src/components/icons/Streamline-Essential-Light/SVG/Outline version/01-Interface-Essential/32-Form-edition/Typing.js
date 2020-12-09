import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTyping = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 18.499c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-21zm0-12a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-21z" />,
    <path d="M4 15.499a.5.5 0 010-1h.5v-5H4a.5.5 0 010-1h2a.5.5 0 010 1h-.5v5H6a.5.5 0 010 1H4z" />
  );

export default SvgTyping;
