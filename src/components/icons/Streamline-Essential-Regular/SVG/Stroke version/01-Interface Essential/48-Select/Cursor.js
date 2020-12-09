import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M3.465 4.285l6.311 15.327a.75.75 0 001.224.244l3.447-3.447 3.712 3.713a.752.752 0 001.061 0l1.06-1.061a.75.75 0 000-1.061l-3.712-3.712 3.447-3.447a.75.75 0 00-.245-1.224L4.444 3.306a.75.75 0 00-.979.979z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  );

export default SvgCursor;
