import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskOval = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23.5c-.827 0-1.5-.673-1.5-1.5V2C.5 1.173 1.173.5 2 .5h20c.827 0 1.5.673 1.5 1.5v20c0 .827-.673 1.5-1.5 1.5H2zm0-22a.5.5 0 00-.5.5v20a.5.5 0 00.5.5h20a.5.5 0 00.5-.5V2a.5.5 0 00-.5-.5H2z" />,
    <path d="M12 20.5c-3.033 0-5.5-3.813-5.5-8.5 0-4.687 2.467-8.5 5.5-8.5s5.5 3.813 5.5 8.5c0 4.687-2.467 8.5-5.5 8.5zm0-16c-2.481 0-4.5 3.365-4.5 7.5s2.019 7.5 4.5 7.5 4.5-3.365 4.5-7.5-2.019-7.5-4.5-7.5z" />
  );

export default SvgMaskOval;
