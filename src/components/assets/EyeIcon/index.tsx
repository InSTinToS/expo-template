
import { styled } from "nativewind";
import { View, ViewProps } from "react-native";
import Svg, { Path } from "react-native-svg"

interface IEyeIconProps extends ViewProps {
  fill: string
  enabled: boolean
}

const EyeIcon = ({ fill, enabled, ...props }: IEyeIconProps) => (
  <View {...props}>
    {enabled ?
      <Svg viewBox="0 0 22 16">
        <Path
          d="M11 5.344a3 3 0 100 6 3 3 0 000-6zm0 8a5 5 0 110-10 5 5 0 010 10zm0-12.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5z"
          fill={fill}
        />
      </Svg>
      :
      <Svg viewBox="0 0 22 20">
        <Path
          d="M10.83 6.844l3.17 3.16v-.16a3 3 0 00-3-3h-.17zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 003 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 01-5-5c0-.79.2-1.53.53-2.2zM1 2.114l2.28 2.28.45.45c-1.65 1.3-2.95 3-3.73 5 1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.43.42 2.92 2.92 1.27-1.27L2.27.844m8.73 4a5 5 0 015 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-4 .7l2.17 2.15c.57-.22 1.18-.35 1.83-.35z"
          fill={fill}
        />
      </Svg>}
  </View >
)

export default styled(EyeIcon)
