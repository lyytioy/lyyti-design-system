import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEmailActionUnread = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M3 20.5a2.252 2.252 0 01-2.25-2.25v-12a2.22 2.22 0 01.498-1.411l.023-.027A2.238 2.238 0 013 4h18a2.245 2.245 0 011.757.845l.018.026c.311.399.475.875.475 1.379v12A2.252 2.252 0 0121 20.5H3zm-.75-2.25c0 .414.336.75.75.75h18a.75.75 0 00.75-.75V6.562l-7.276 5.596a4.077 4.077 0 01-2.474.841c-.891 0-1.77-.299-2.474-.841L2.25 6.562V18.25zm8.19-7.281c.444.342.998.53 1.56.53s1.115-.188 1.559-.53l7.111-5.47H3.329l7.111 5.47z" />
  );

export default SvgEmailActionUnread;
