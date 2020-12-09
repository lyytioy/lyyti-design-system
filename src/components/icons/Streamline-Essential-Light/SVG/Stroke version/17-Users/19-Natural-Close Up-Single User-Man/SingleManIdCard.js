import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManIdCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-id-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M12 2.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.5 4.5h5a1 1 0 011 1v17a1 1 0 01-1 1h-15a1 1 0 01-1-1v-17a1 1 0 011-1h5"
    />,
    <path
      className="single-man-id-card_svg__cls-1"
      d="M17.5 21L14 19.5v-2s.866-.35.866-2.5c.684 0 .944-2-.007-2a2.63 2.63 0 00.44-2c-.491-2-5.331-2-5.822 0-2.066-.43-.422 1.712-.422 2-.981 0-.981 2 0 2 0 2.15.945 2.5.945 2.5v2L6.5 21M14.5 6a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V3a2.5 2.5 0 015 0z"
    />
  );

export default SvgSingleManIdCard;
