import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.5 20a.5.5 0 01-.5-.5V5.707l-4.646 4.646a.5.5 0 11-.708-.707l5.5-5.5a.502.502 0 01.708 0l5.5 5.5A.5.5 0 0118 10.5a.5.5 0 01-.354-.146L13 5.707V19.5a.5.5 0 01-.5.5z" />,
    <path d="M17.5 24a.5.5 0 010-1h5a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5h-5a.5.5 0 010-1h5c.827 0 1.5.673 1.5 1.5v21c0 .827-.673 1.5-1.5 1.5h-5zM1.5 24C.673 24 0 23.327 0 22.5v-21C0 .673.673 0 1.5 0h5a.5.5 0 010 1h-5a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h5a.5.5 0 010 1h-5z" />
  );

export default SvgUploadBrackets;
