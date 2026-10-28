export type IconName = 
    | "email"
    | "key"

const getViewBox = (name?:IconName)=>{
    switch(name){
        case "email":
            return "0 0 21.5 17.2" ;
        case "key":
            return "0 0 19 19" ;
    }
}
const getPath = (name?:IconName) => {
    switch(name){
        case "email":
            return(
                <path
                    fill="currentColor"
                    d="M21.5 2.15C21.5.968 20.533 0 19.35 0H2.15C.968 0 0 .968 0 2.15v12.9c0 1.183.968 2.15 2.15 2.15h17.2c1.183 0 2.15-.967 2.15-2.15V2.15Zm-2.15 0-8.6 5.375-8.6-5.375h17.2Zm0 12.9H2.15V4.3l8.6 5.375 8.6-5.375v10.75Z"
                />
            );
        case "key":
            return(
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.303}
                  d="m14.97 11.515 1.727 1.727 3.454-3.454-1.727-1.727M9.997 11.306 20.15 1.151M11.515 14.97a5.182 5.182 0 1 1-10.364 0 5.182 5.182 0 0 1 10.364 0Z"
                />
            );
        default:
            return <></>;
    }
}

export interface SVGIconProps {
  name?: IconName;
  style?: React.CSSProperties;
  fill?: string;
  viewBox?: string;
  height?: string;
  width?: string;
  className?: string;
  strokeWidth?: number | string;
  stroke?: string;
  stopColor?: string;
}

const SVGIcon: React.FC<SVGIconProps> = ({
    name,
    style = {},
    viewBox = "",
    height = "24",
    width = "24",
    className = "",
    stroke = "",
    strokeWidth,
    fill,
}) => (
    <svg
        stroke={stroke}
        strokeWidth={strokeWidth}
        fill={fill}
        style={style}
        width={width}
        height={height}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={viewBox || getViewBox(name)}
        xmlnsXlink="http://www.w3.org/1999/xlink"
    >
        {getPath(name)}
    </svg>
);
export default SVGIcon;