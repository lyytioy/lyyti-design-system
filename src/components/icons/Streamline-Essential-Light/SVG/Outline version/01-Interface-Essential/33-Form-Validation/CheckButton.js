import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M15.249 15.499a.504.504 0 01-.379-.175l-3-3.5a.498.498 0 01.379-.825c.147 0 .285.064.38.175l2.624 3.061 4.87-5.566a.498.498 0 01.705-.047.499.499 0 01.047.705l-5.25 6a.498.498 0 01-.376.171z" />,
    <path d="M1.5 18.499c-.827 0-1.5-.673-1.5-1.5v-10c0-.827.673-1.5 1.5-1.5h21c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5h-21zm0-12a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-10a.5.5 0 00-.5-.5h-21z" />
  );

export default SvgCheckButton;
