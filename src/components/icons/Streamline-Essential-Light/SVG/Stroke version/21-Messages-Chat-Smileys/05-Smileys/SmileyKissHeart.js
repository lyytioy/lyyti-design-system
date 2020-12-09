import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyKissHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-kiss-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-kiss-heart_svg__a"
      d="M7.25 9.251A.25.25 0 117 9.5a.25.25 0 01.25-.25M14.5 9.608a2.359 2.359 0 014 0M12.5 18.5h2a1 1 0 000-2 1 1 0 000-2h-2M19.1 23.5l-1.548-3.548a1.583 1.583 0 01.353-1.819 1.585 1.585 0 012.524.49l.26.561.561-.259a1.585 1.585 0 012.24 1.263 1.586 1.586 0 01-.91 1.615zM22.484 16.708a11.512 11.512 0 10-6.9 6.215"
    />
  );

export default SvgSmileyKissHeart;
