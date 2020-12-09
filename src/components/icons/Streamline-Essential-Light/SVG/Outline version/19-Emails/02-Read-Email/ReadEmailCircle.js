import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgReadEmailCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M6.5 17c-.827 0-1.5-.673-1.5-1.5v-7C5 7.673 5.673 7 6.5 7h11c.827 0 1.5.673 1.5 1.5v7c0 .827-.673 1.5-1.5 1.5h-11zM6 15.5a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V9.861l-4.958 2.827a2.002 2.002 0 01-2.102-.011L6 9.861V15.5zm5.453-3.681c.171.107.359.16.55.16.188 0 .37-.052.527-.15L18 8.709V8.5a.5.5 0 00-.5-.5h-11a.5.5 0 00-.5.5v.209l5.453 3.11z" />
  );

export default SvgReadEmailCircle;
