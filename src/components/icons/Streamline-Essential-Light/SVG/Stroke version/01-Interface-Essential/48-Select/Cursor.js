import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCursor = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M13.675 11.671l2.941-2.941a.5.5 0 00-.186-.824L4.168 3.527a.5.5 0 00-.639.639l4.379 12.262a.5.5 0 00.824.186l2.943-2.943 6.146 6.146a.5.5 0 00.707 0l1.293-1.293a.5.5 0 000-.707z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgCursor;
