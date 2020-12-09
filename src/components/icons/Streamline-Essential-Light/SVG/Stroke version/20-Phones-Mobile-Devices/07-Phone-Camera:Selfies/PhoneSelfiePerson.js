import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneSelfiePerson = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-selfie-person_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-selfie-person_svg__a"
      d="M4 23.5v-18a2 2 0 012-2M18 3.5a2 2 0 012 2v18M20 8.504H4"
    />,
    <circle className="phone-selfie-person_svg__a" cx={12} cy={5.504} r={1} />,
    <path
      className="phone-selfie-person_svg__a"
      d="M12 2.504v-2M10 3.504l-1.5-1.5M14 3.504l1.5-1.5M15 5.504h2M7 5.504h2M6 23.5a6.543 6.543 0 01.522-2.5c.368-.736 1.9-1.246 3.833-1.96.522-.193.436-1.555.205-1.809a3.849 3.849 0 01-1-2.984A2.515 2.515 0 0112 11.5a2.515 2.515 0 012.442 2.755 3.849 3.849 0 01-1 2.984c-.231.254-.317 1.616.205 1.809 1.929.714 3.465 1.224 3.833 1.96A6.543 6.543 0 0118 23.5z"
    />
  );

export default SvgPhoneSelfiePerson;
