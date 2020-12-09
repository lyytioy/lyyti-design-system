import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUserSignal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={12} cy={10.997} r={2.5} />,
    <path d="M12.647 13.555A3.5 3.5 0 008.5 17v3a.5.5 0 00.5.5h1.052l.34 3.055a.5.5 0 00.5.445h2.222a.5.5 0 00.5-.445l.339-3.055H15a.5.5 0 00.5-.5v-2.857a3.573 3.573 0 00-2.853-3.588z" />,
    <path d="M19.119 15.009a7.8 7.8 0 10-14.24 0 1 1 0 001.826-.818 5.835 5.835 0 012.1-7.222 5.752 5.752 0 016.38 0 5.834 5.834 0 012.105 7.222 1 1 0 001.825.817z" />,
    <path d="M23.482 10.86a11.5 11.5 0 10-19.614 8.769 1 1 0 101.414-1.414 9.5 9.5 0 1113.436 0 1 1 0 001.414 1.414 11.519 11.519 0 003.35-8.769z" />
  );

export default SvgUserSignal;
