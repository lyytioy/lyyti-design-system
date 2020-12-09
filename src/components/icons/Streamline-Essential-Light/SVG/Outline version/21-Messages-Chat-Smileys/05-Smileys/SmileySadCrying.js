import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySadCrying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1z" />,
    <circle cx={8.5} cy={8} r={0.75} />,
    <circle cx={15.5} cy={8} r={0.75} />,
    <path d="M17.5 14.5c-1.103 0-2-.897-2-2 0-.935 1.323-2.9 1.588-3.284.091-.131.245-.209.412-.209s.32.078.411.209c.266.384 1.589 2.349 1.589 3.284 0 1.103-.897 2-2 2zm0-4.088c-.59.944-1 1.793-1 2.088a1 1 0 002 0c0-.296-.409-1.144-1-2.088zM16.5 19.5a.5.5 0 01-.5-.5c0-2.206-1.794-4-4-4s-4 1.794-4 4a.5.5 0 01-1 0c0-2.757 2.243-5 5-5s5 2.243 5 5a.5.5 0 01-.5.5z" />
  );

export default SvgSmileySadCrying;
