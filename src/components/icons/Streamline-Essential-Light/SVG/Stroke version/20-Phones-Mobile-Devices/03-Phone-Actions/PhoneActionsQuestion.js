import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionsQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-actions-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-actions-question_svg__a"
      d="M16 5.5A1.5 1.5 0 1117.5 7M17.5 8.5a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-actions-question_svg__a"
      d="M17.433.5a6.059 6.059 0 00-5.152 9.259L10.5 13.5l3.741-1.782A6.064 6.064 0 1017.433.5z"
    />,
    <path
      className="phone-actions-question_svg__a"
      d="M8.612 12.813a44.777 44.777 0 01-1.828-2.093l.708-.707a2 2 0 000-2.828L5.369 5.064a2 2 0 00-2.828 0L1.378 6.228A2.994 2.994 0 001 10a46.47 46.47 0 0013 13 3 3 0 003.774-.379l1.164-1.162a2 2 0 000-2.828l-2.121-2.123a2 2 0 00-2.829 0l-.707.707a45.845 45.845 0 01-2.094-1.828"
    />
  );

export default SvgPhoneActionsQuestion;
