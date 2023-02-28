import {
  ScrollView as OriginalScrollView,
  ScrollViewProps,
  View
} from 'react-native'

import { OSRelative } from '@src/utils/OS'

import { styled } from 'nativewind'

interface IRelativeScrollViewProps extends ScrollViewProps {
  webWithView?: boolean
  contentContainerStyle?: object
}

const RelativeScrollView = ({
  tw,
  children,
  webWithView = false,
  contentContainerStyle,
  ...props
}: IRelativeScrollViewProps) =>
  OSRelative(
    <OriginalScrollView
      contentContainerStyle={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...contentContainerStyle
      }}
      tw={tw}
      {...props}
    >
      {children}
    </OriginalScrollView>,
    webWithView ? (
      <View {...props} tw={tw}>
        {children}
      </View>
    ) : (
      <>{children}</>
    )
  )

export default styled(RelativeScrollView)
