import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircleAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm0 22a10 10 0 1110-10 10.011 10.011 0 01-10 10z" />,
    <path d="M20.764 11.545C20.638 11.3 17.61 5.5 12 5.5s-8.64 5.8-8.766 6.045a1 1 0 000 .91C3.36 12.7 6.389 18.5 12 18.5s8.639-5.8 8.765-6.045a.994.994 0 00-.001-.91zM12 16.5c-3.574 0-5.952-3.273-6.718-4.5.765-1.227 3.143-4.5 6.718-4.5s5.953 3.273 6.719 4.5c-.767 1.227-3.145 4.5-6.719 4.5z" />,
    <circle cx={11.999} cy={12} r={2.5} />
  );

export default SvgViewCircleAlternate;
