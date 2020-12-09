import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsInformation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-information_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-information_svg__cls-1"
      d="M9 16.5H.5c.423-2.286.353-3.579 1.609-4.118L6.5 10.5v-2s-.945-.349-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.429.422-2 .491-2 5.331-2 5.822 0a2.628 2.628 0 01-.44 2c.951 0 .691 2 .007 2 0 2.151-.866 2.5-.866 2.5v2l1.5.643"
    />,
    <g
      id="single-man-actions-information_svg___Group_"
      data-name="&lt;Group&gt;"
    >
      <circle
        className="single-man-actions-information_svg__cls-1"
        cx={17.5}
        cy={17.5}
        r={6}
      />
      <path
        className="single-man-actions-information_svg__cls-1"
        d="M17.5 20.5V17a.5.5 0 00-.5-.5h-1M16.75 14a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 20.5h3"
      />
    </g>
  );

export default SvgSingleManActionsInformation;
