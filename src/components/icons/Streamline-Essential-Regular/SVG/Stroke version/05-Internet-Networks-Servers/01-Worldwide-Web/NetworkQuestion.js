import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkQuestion = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-question_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="network-question_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="network-question_svg__a"
      d="M15.375 16.125A1.875 1.875 0 1117.25 18M17.25 20.25a.375.375 0 11-.375.375.375.375 0 01.375-.375M10.485 23.149a11.251 11.251 0 1112.669-12.628"
    />,
    <path
      className="network-question_svg__a"
      d="M9.289 22.921C7.768 20.689 6.75 16.633 6.75 12S7.768 3.312 9.289 1.079M.775 11.25H10.5M2.999 5.25H21M2.048 17.25h5.166M14.711 1.079a17 17 0 012.307 7.161"
    />
  );

export default SvgNetworkQuestion;
