import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="gift-heart_svg__a"
      d="M22.651 5.387a5.659 5.659 0 00-5.4-3.128C14.966 2.385 14.01 3.533 12 5.25 9.99 3.533 9.034 2.385 6.75 2.259a5.659 5.659 0 00-5.4 3.128C-1.5 11.25 7.368 17.924 12 21.75c4.632-3.826 13.5-10.5 10.651-16.363zM12 5.25v16.5M12 10.5l3.75 3.75M8.25 14.25L12 10.5"
    />,
    <path
      className="gift-heart_svg__a"
      d="M12 10.5l3.257-3.257a1.908 1.908 0 111.349 3.257zM12 10.5L8.743 7.243A1.908 1.908 0 107.394 10.5z"
    />
  );

export default SvgGiftHeart;
