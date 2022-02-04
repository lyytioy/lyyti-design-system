import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const MonitorPieChart = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.monitor-chart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="monitor-chart_svg__a"
      d="M15 23.253H9l.75-4.5h4.5l.75 4.5zM6.75 23.253h10.5"
    />,
    <rect
      className="monitor-chart_svg__a"
      x={0.75}
      y={0.753}
      width={22.5}
      height={18}
      rx={3}
      ry={3}
    />,
    <circle className="monitor-chart_svg__a" cx={8.25} cy={9.753} r={4.5} />,
    <path
      className="monitor-chart_svg__a"
      d="M8.25 5.253v4.5l3.182 3.182M15.75 6.753h3M15.75 9.753h3M15.75 12.753h3"
    />
  );

export default MonitorPieChart;
