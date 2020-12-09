import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.423 20.6l-5.062-5.124a9.99 9.99 0 10-2.813 2.844l5.029 5.092a2.028 2.028 0 002.829.016 2 2 0 00.017-2.828zM10 1.755a8.25 8.25 0 11-8.25 8.25A8.26 8.26 0 0110 1.755z" />,
    <circle cx={10} cy={10.005} r={6.75} />
  );

export default SvgSearch;
