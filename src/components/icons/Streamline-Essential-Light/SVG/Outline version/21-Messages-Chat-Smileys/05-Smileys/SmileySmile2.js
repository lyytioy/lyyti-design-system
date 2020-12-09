import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmile2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={6.5} cy={10} r={0.75} />,
    <circle cx={17.5} cy={10} r={0.75} />,
    <path d="M12.009 20a6.988 6.988 0 01-6.47-4.308A.498.498 0 016 15a.5.5 0 01.462.308A5.989 5.989 0 0012.009 19a5.95 5.95 0 002.299-.461 5.963 5.963 0 003.231-3.231.499.499 0 11.922.385 6.958 6.958 0 01-3.769 3.769 6.948 6.948 0 01-2.683.538z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />
  );

export default SvgSmileySmile2;
