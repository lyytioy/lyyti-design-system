import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyUnhappy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={8.5} cy={8} r={0.75} />,
    <circle cx={15.5} cy={8} r={0.75} />,
    <path d="M10.38 19a.496.496 0 01-.384-.819 7.017 7.017 0 015.409-2.525c.58 0 1.158.073 1.718.215a.496.496 0 01.36.608.498.498 0 01-.483.376.461.461 0 01-.123-.016 5.965 5.965 0 00-1.471-.184 6.02 6.02 0 00-4.641 2.165.502.502 0 01-.385.18z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
  );

export default SvgSmileyUnhappy;
