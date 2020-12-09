import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmileUpsideDown = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={17.5} cy={14} r={0.75} />,
    <circle cx={6.5} cy={14} r={0.75} />,
    <path d="M6 9a.499.499 0 01-.461-.692 6.955 6.955 0 013.769-3.769 6.96 6.96 0 015.358-.011 6.955 6.955 0 013.796 3.78c.052.123.052.259.001.383A.495.495 0 0118 9a.498.498 0 01-.461-.308 5.964 5.964 0 00-3.254-3.241 5.957 5.957 0 00-4.592.011 5.963 5.963 0 00-3.231 3.231A.5.5 0 016 9z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
  );

export default SvgSmileySmileUpsideDown;
