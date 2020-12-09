import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHelpQuestionNetwork = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".help-question-network_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="help-question-network_svg__a" cx={3} cy={21} r={2.25} />,
    <path
      className="help-question-network_svg__a"
      d="M4.679 19.502L6.749 18"
    />,
    <circle className="help-question-network_svg__a" cx={3} cy={3} r={2.25} />,
    <path className="help-question-network_svg__a" d="M4.679 4.499L6.749 6" />,
    <circle
      className="help-question-network_svg__a"
      cx={21}
      cy={21}
      r={2.25}
    />,
    <path
      className="help-question-network_svg__a"
      d="M19.322 19.502L17.252 18"
    />,
    <circle className="help-question-network_svg__a" cx={21} cy={3} r={2.25} />,
    <path
      className="help-question-network_svg__a"
      d="M19.322 4.499L17.252 6M12 17.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M9 9.75a3 3 0 114 2.829 1.5 1.5 0 00-1 1.415v.631"
    />
  );

export default SvgHelpQuestionNetwork;
