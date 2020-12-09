import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMessagesBubbleEmpty = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path
      d="M23.5 10a7.522 7.522 0 01-7.5 7.5h-2.5l-4 4v-4H8a7.5 7.5 0 010-15h8a7.522 7.522 0 017.5 7.5z"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );

export default SvgMessagesBubbleEmpty;
