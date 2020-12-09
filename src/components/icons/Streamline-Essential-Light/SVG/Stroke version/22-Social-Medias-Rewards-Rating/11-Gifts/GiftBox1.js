import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgGiftBox1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".gift-box-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="gift-box-1_svg__a"
      d="M10.5 14h-4a1 1 0 01-1-1v-1a1 1 0 011-1h11a1 1 0 011 1v1a1 1 0 01-1 1h-4M13.5 14H17l-.434 6.071a1 1 0 01-1 .929H8.431a1 1 0 01-1-.929L7 14h3.5M10.5 11v10M13.5 21V11M8.5 9.688C9.1 10.292 12 11 12 11s-.709-2.9-1.312-3.5A1.547 1.547 0 008.5 9.688zM15.5 9.688C14.9 10.292 12 11 12 11s.709-2.9 1.312-3.5A1.547 1.547 0 0115.5 9.688zM12 4.5V3M19.071 7.429l1.061-1.06M22 14h1.5M4.929 7.429l-1.061-1.06M2 14H.5"
    />
  );

export default SvgGiftBox1;
