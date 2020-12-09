import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M11.5 20a.492.492 0 01-.355-.148l-5.499-5.499a.5.5 0 11.708-.707L11 18.293V5a.5.5 0 011 0v13.293l4.646-4.646a.5.5 0 11.708.707l-5.5 5.5A.507.507 0 0111.5 20z" />,
    <path d="M17.5 24a.5.5 0 010-1h5a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-5a.5.5 0 010-1h5c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-5zM1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h5a.5.5 0 010 1h-5z" />
  );

export default SvgDownloadBrackets;
