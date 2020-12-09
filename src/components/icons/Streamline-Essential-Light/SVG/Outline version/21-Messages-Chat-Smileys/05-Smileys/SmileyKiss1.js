import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKiss1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12.5 19a.5.5 0 010-1h2a.5.5 0 000-1 .5.5 0 010-1 .5.5 0 000-1h-2a.5.5 0 010-1h2c.827 0 1.5.673 1.5 1.5 0 .37-.14.727-.383 1 .243.273.383.63.383 1 0 .827-.673 1.5-1.5 1.5h-2z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={6.5} cy={10} r={0.75} />,
    <circle cx={17.5} cy={10} r={0.75} />
  );

export default SvgSmileyKiss1;
