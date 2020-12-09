import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySad1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={6.5} cy={10} r={0.75} />,
    <circle cx={17.5} cy={10} r={0.75} />,
    <path d="M16.5 19.5a.5.5 0 01-.5-.5c0-2.206-1.794-4-4-4s-4 1.794-4 4a.5.5 0 01-1 0c0-2.757 2.243-5 5-5s5 2.243 5 5a.5.5 0 01-.5.5z" />
  );

export default SvgSmileySad1;
