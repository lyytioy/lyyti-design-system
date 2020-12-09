import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-question_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-question_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-question_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M9.5 10a2.5 2.5 0 113.31 2.366A1.2 1.2 0 0012 13.5v.5M12 16a.25.25 0 11-.25.25A.25.25 0 0112 16"
    />
  );

export default SvgPhoneActionQuestion;
