import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiScreenSplit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M7.5 23.5A2.503 2.503 0 015 21v-1.5H1.5C.673 19.5 0 18.827 0 18V2C0 1.173.673.5 1.5.5h21c.827 0 1.5.673 1.5 1.5v16c0 .827-.673 1.5-1.5 1.5H19V21c0 1.378-1.122 2.5-2.5 2.5h-9zM6 21c0 .827.673 1.5 1.5 1.5h9c.827 0 1.5-.673 1.5-1.5v-1.5H6V21zm-5-3a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-4.5H1V18zm22-5.5v-5H1v5h22zm0-6V2a.5.5 0 00-.5-.5h-21A.5.5 0 001 2v4.5h22z" />,
    <path d="M12 22a.502.502 0 01-.278-.084l-1.5-1A.501.501 0 0110.5 20c.099 0 .195.029.277.084l1.223.815 1.223-.815a.496.496 0 01.693.139.5.5 0 01-.139.693l-1.5 1A.496.496 0 0112 22z" />
  );

export default SvgUiScreenSplit;
