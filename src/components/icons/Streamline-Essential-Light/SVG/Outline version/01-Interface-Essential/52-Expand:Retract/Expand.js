import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgExpand = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.5 10a.5.5 0 01-.5-.5v-4a.5.5 0 00-.5-.5h-6a.5.5 0 010-1h6c.827 0 1.5.673 1.5 1.5v4a.5.5 0 01-.5.5zM.5 10a.5.5 0 01-.5-.5v-4C0 4.673.673 4 1.5 4h6a.5.5 0 010 1h-6a.5.5 0 00-.5.5v4a.5.5 0 01-.5.5zM16.5 20a.5.5 0 010-1h6a.5.5 0 00.5-.5v-4a.5.5 0 011 0v4c0 .827-.673 1.5-1.5 1.5h-6zM1.5 20C.673 20 0 19.327 0 18.5v-4a.5.5 0 011 0v4a.5.5 0 00.5.5h6a.5.5 0 010 1h-6zM5.5 15.999c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h13c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5h-13zm0-7a.5.5 0 00-.5.5v5a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-5a.5.5 0 00-.5-.5h-13z" />
  );

export default SvgExpand;
