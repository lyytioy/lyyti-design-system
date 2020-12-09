import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageSlider = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-slider_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-slider_svg__a"
      d="M14 20H6a.5.5 0 01-.5-.5v-17A.5.5 0 016 2h12a.5.5 0 01.5.5v12M5.5 18H2a.5.5 0 01-.5-.5v-13A.5.5 0 012 4h3.5M18.5 4H22a.5.5 0 01.5.5V18"
    />,
    <path
      className="ui-webpage-slider_svg__a"
      d="M16.03 15.876a.5.5 0 00-.644.644l1.463 3.9a.5.5 0 00.821.178l2.438-2.437a.5.5 0 00-.178-.822zM18.889 19.379L21.01 21.5M8 6h8M8 9h8M8 12h5"
    />
  );

export default SvgUiWebpageSlider;
