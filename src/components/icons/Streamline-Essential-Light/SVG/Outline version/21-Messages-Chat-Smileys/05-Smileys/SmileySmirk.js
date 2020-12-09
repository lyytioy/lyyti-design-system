import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmirk = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 19.004a6.96 6.96 0 01-2.692-.542.499.499 0 11.384-.923 5.955 5.955 0 002.3.461 5.99 5.99 0 005.547-3.692.498.498 0 01.923.001.494.494 0 01-.001.383 6.952 6.952 0 01-3.796 3.78 6.953 6.953 0 01-2.665.532z" />,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={8.5} cy={8} r={0.75} />,
    <circle cx={15.5} cy={8} r={0.75} />
  );

export default SvgSmileySmirk;
