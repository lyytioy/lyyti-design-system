import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpenBookmark = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-bookmark_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-open-bookmark_svg__a"
      d="M12 6.164v16.375M9.5 8.164A23.408 23.408 0 003 6.924M9.5 12.424a23.408 23.408 0 00-6.5-1.24M9.5 16.664a23.408 23.408 0 00-6.5-1.24M14.5 12.424a23.416 23.416 0 016.5-1.24M14.5 16.664a23.416 23.416 0 016.5-1.24M16 2.387a.5.5 0 01.376-.485 23.243 23.243 0 013.065-.563.5.5 0 01.558.5v7.325l-2-2-2 2z"
    />,
    <path
      className="book-open-bookmark_svg__a"
      d="M20 2.8c.638-.06 1.3-.1 1.967-.123a1 1 0 011.032 1v14.5a1 1 0 01-.97 1C16.591 19.34 12 20.838 12 22.664c0-1.826-4.591-3.324-10.03-3.486a1 1 0 01-.97-1V3.68a1 1 0 011.032-1C7.443 2.851 12 4.345 12 6.164c0-.711.7-1.372 1.867-1.924"
    />
  );

export default SvgBookOpenBookmark;
