import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCopyPaste = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M1.5 22C.673 22 0 21.327 0 20.5v-16C0 3.673.673 3 1.5 3h1.586c.209-.59.774-1 1.414-1h2v-.001c0-1.103.897-2 2-2s2 .897 2 2V2h2c.64 0 1.205.41 1.414 1H15.5c.827 0 1.5.673 1.5 1.5V8a.5.5 0 01-1 0V4.5a.5.5 0 00-.5-.5H14v.5c0 .827-.673 1.5-1.5 1.5h-8C3.673 6 3 5.327 3 4.5V4H1.5a.5.5 0 00-.5.5v16a.5.5 0 00.5.5h8a.5.5 0 010 1h-8zm3-19a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h8a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-2.271c-.356.612-1.018.999-1.729.999S7.127 3.612 6.771 3H4.5zm4-2.001c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z" />,
    <path d="M12.5 24c-.827 0-1.5-.673-1.5-1.5V11c0-.827.673-1.5 1.5-1.5h7.086c.401 0 .777.156 1.061.439l1.914 1.914c.279.28.439.666.439 1.061V22.5c0 .827-.673 1.5-1.5 1.5h-9zm0-13.5a.5.5 0 00-.5.5v11.5a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9.586a.501.501 0 00-.146-.353l-1.914-1.914a.498.498 0 00-.354-.146H12.5z" />,
    <path d="M14.5 14.999a.5.5 0 010-1h5a.5.5 0 010 1h-5zM14.5 17.999a.5.5 0 010-1h5a.5.5 0 010 1h-5z" />
  );

export default SvgCopyPaste;