import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-man-actions-credit-card_svg__cls-1"
      d="M11.5 17.5h12M17.5 20.5h3"
    />,
    <rect
      className="single-man-actions-credit-card_svg__cls-1"
      x={11.5}
      y={14.5}
      width={12}
      height={9}
      rx={1}
      ry={1}
    />,
    <path
      className="single-man-actions-credit-card_svg__cls-1"
      d="M9.5 16.5h-9c.423-2.286.353-3.58 1.609-4.118L6.5 10.5v-2s-.945-.35-.945-2.5c-.981 0-.981-2 0-2 0-.288-1.644-2.43.422-2 .491-2 5.331-2 5.822 0a2.63 2.63 0 01-.44 2c.951 0 .691 2 .007 2 0 2.15-.866 2.5-.866 2.5v2l4.391 1.882a1.908 1.908 0 01.187.091"
    />
  );

export default SvgSingleManActionsCreditCard;
