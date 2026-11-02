export type IconName = 
    | "email"
    | "key"
    | "google"
    | "facebook"
    | "user";

const getViewBox = (name?: IconName) => {
    switch (name) {
        case "email":
            return "0 0 21.5 17.2";
        case "key":
            return "0 0 22 22";
        case "google":
            return "0 0 18 18";
        case "facebook":
            return "0 0 24 24";
        case "user":
            return "0 0 24 24";
        default:
            return "0 0 24 24";
    }
};

const getPath = (name?: IconName) => {
    switch (name) {
        case "email":
            return (
                <path
                    fill="currentColor"
                    d="M21.5 2.15C21.5.968 20.533 0 19.35 0H2.15C.968 0 0 .968 0 2.15v12.9c0 1.183.968 2.15 2.15 2.15h17.2c1.183 0 2.15-.967 2.15-2.15V2.15Zm-2.15 0-8.6 5.375-8.6-5.375h17.2Zm0 12.9H2.15V4.3l8.6 5.375 8.6-5.375v10.75Z"
                />
            );
        case "key":
            return (
                <path
                    stroke="currentColor"
                    strokeWidth={2.303}
                    d="m14.97 11.515 1.727 1.727 3.454-3.454-1.727-1.727M9.997 11.306 20.15 1.151M11.515 14.97a5.182 5.182 0 1 1-10.364 0 5.182 5.182 0 0 1 10.364 0Z"
                />
            );
        case "google":
            return (
                <>
                    <path
                        fill="#4285F4"
                        d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.874 2.684-6.616Z"
                    />
                    <path
                        fill="#34A853"
                        d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z"
                    />
                    <path
                        fill="#FBBC05"
                        d="M3.964 10.707c-.18-.54-.282-1.117-.282-1.707s.102-1.167.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332Z"
                    />
                    <path
                        fill="#EA4335"
                        d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58Z"
                    />
                </>
            );
        case "facebook":
            return (
                <path
                    fill="#1877F2"
                    d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
            );

        case "user":
            return(
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M6.035 18.74A8.966 8.966 0 0 0 12 21a8.966 8.966 0 0 0 5.965-2.26C17.672 17.687 15.569 17 12 17c-3.57 0-5.672.687-5.965 1.74Zm-1.434-1.615C5.726 15.638 8.37 15 12 15c3.63 0 6.274.638 7.4 2.125a9 9 0 1 0-14.799 0ZM12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11ZM8 10c0-2.244 1.58-4 4-4 2.414 0 4 1.922 4 4.2 0 3.28-1.782 4.8-4 4.8-2.24 0-4-1.573-4-5Zm2 0c0 2.27.818 3 2 3 1.178 0 2-.702 2-2.8 0-1.25-.784-2.2-2-2.2-1.266 0-2 .816-2 2Z"
                />
            )
        default:
            return <></>;
    }
};

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
