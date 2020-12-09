import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-upload_svg__a"
      d="M9.614 20.5h-8a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v5M4.615 4.501v-4M8.615 4.501v-4M12.615 4.501v-4"
    />,
    <circle className="notes-upload_svg__a" cx={17.615} cy={17.501} r={6} />,
    <path
      className="notes-upload_svg__a"
      d="M17.615 20.501v-6M17.615 14.501l-2.25 2.25M17.615 14.501l2.25 2.25"
    />
  );

export default SvgNotesUpload;
