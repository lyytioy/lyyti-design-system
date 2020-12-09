import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M22.272 23.247a.981.981 0 00.978-.978V9.747a1.181 1.181 0 00-.377-.8L12 .747l-10.873 8.2a1.181 1.181 0 00-.377.8v12.522a.981.981 0 00.978.978z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgHouse;
