import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHourglass = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M20.5 22H19v-3.5a7.01 7.01 0 00-4.4-6.5A7.011 7.011 0 0019 5.5V2h1.5a1 1 0 000-2h-17a1 1 0 000 2H5v3.5A7.011 7.011 0 009.4 12 7.01 7.01 0 005 18.5V22H3.5a1 1 0 000 2h17a1 1 0 000-2zM8.19 6.92a1 1 0 01.89-.544h5.84a1 1 0 01.811 1.584 4.591 4.591 0 01-7.462 0 1 1 0 01-.079-1.04zm-.27 11.71l3.044-2.936a1.544 1.544 0 012.07 0l3.043 2.935a1.349 1.349 0 01.269 1.6 1.461 1.461 0 01-1.3.771H8.957a1.46 1.46 0 01-1.3-.764 1.352 1.352 0 01.263-1.606z" />
  );

export default SvgHourglass;
