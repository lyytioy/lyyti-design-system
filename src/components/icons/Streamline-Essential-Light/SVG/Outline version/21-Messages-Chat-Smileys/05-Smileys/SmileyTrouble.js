import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <path d="M9.5 17a.5.5 0 010-1h5a.5.5 0 010 1h-5z" />,
    <circle cx={6.5} cy={7} r={0.75} />,
    <path d="M6.5 12C4.57 12 3 10.43 3 8.5S4.57 5 6.5 5 10 6.57 10 8.5 8.43 12 6.5 12zm0-6C5.121 6 4 7.121 4 8.5S5.121 11 6.5 11 9 9.879 9 8.5 7.879 6 6.5 6z" />,
    <circle cx={17.5} cy={7} r={0.75} />,
    <path d="M17.5 12c-1.93 0-3.5-1.57-3.5-3.5S15.57 5 17.5 5 21 6.57 21 8.5 19.43 12 17.5 12zm0-6C16.122 6 15 7.121 15 8.5s1.122 2.5 2.5 2.5S20 9.879 20 8.5 18.878 6 17.5 6z" />
  );

export default SvgSmileyTrouble;
