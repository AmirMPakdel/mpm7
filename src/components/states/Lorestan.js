import React from 'react';
import {Svg, Path, G} from 'react-native-svg';
import {View} from 'react-native';

const Lorestan = props => {
  const {width, svgProps} = props;
  const aspectRatio = 87.13 / 131.39; // h/w
  const _height = width * aspectRatio;
  return (
    <View
      style={{
        width: width,
        height: _height,
      }}>
      <Svg viewBox="115.91 280.01 135.39 91.13" width={'100%'} height={'100%'}>
        <G {...svgProps}>
          <Path d="M149.96 281.01l-1.2.32-.8.53-.12 1.12.38 2.71-.24 2.8-2.01 1.04-2.96.15-2.38 1.18-.25.71.1.49.25.33.28.3.21.4.08.58-.12.93.04.54.16.38-.59.97-.72.51.57.78.94 2.19.37 2.45-.21 1.58-.56 1.12-.98 1.05-2.31 1.55-.82 1.16-14.49 4.09-2.57 2.44-.91 2.26-.72.08-.71.31-.12.74-.64 1.93.05.38.65.37.93 1.66 1.3.68 1.08 1.38.87.32 2.26 1.38.43.18.16.42-.06.5-.48.87.12.42.54.66.54.48.75.34 1.56.5.07.13.06.24.14.23.29.11.23-.06.21-.23.27-.05.32.07.24.18.19.24 2.05 1.57.73.34v.65l.75.77 1.06.64 1.76.44 5.09 2.55.44.52.23.62.53.17.62.03.45.21.99 1.16.81 1.56.54.6.78.23.61.31 1.36 1.5 4.87 6.42 6.66 14.05.81 1.19.51.48 2.26-3.32 5.66-14.89 2.24-1.71 10.21-.68 2.9-.9 4.4-.33 4.3 1.28 2.12 2.07 2.58.79 9.17.93 9.64 6.65 5.81.55 3.04-.64-.03-.48.26-1.18.55-1 .95-.61 3.3-1.1 1.89-1.43.75-5.85 2.38-2.8 6.15-1.74.99-.59.09-.92.23-1.16 4.18-8.43-.1-2.13.17-2.7.93-1.98-.36-.4-2.65-1.43-.29-1.41.06-1.46-.89-.92-1.34-1.04-.65-1.18-.93-.56-1.45 1.04-.81 1.61-.27 1.29-.97.65-1.28-1.01-1.42-1.5-3.11-1.57-1.35-1.16-.4-1.16.45-1.48.66-1.42-.04-1.33-1.13-1.93-1.82-2.2-2.27-.73-2.08 1.19-2.28.78-1.84 1.05-1.41 4.35-.78.82-3.31 2.1-1.14-.42-4.67-.41-2.74-1-2.1-1.23-.54-1.04.21-1.2.35-1.1 1.65-3.83-.14-1.14-.52-1.35.3-1.62.65-1.06-11.29-4.83-2.72.3-2.2-.13-1.08.3-2.17 2.24-1.23.33-1.53-.58-9.19-1.11-17.77-11.7-.85-1.24-1.78-1.15-1.03-.46-2.85-.39z" />
        </G>
      </Svg>
    </View>
  );
};

export default Lorestan;
