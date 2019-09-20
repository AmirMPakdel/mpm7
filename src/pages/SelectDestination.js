import React, {Component} from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated';
import Province from '../components/Provinces/Province';
import {
  Guilan,
  Lorestan,
  WestAzarbayjan,
} from '../components/Provinces/SvgData';
const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');
const {Value, event, interpolate} = Animated;
const svgProps = {
  fill: '#c5f0b9',
  fillOpacity: 1,
  stroke: '#000',
  strokeWidth: 1,
};
const PROVINCE_WIDTH = WIDTH * 0.4;
const IS = 10; // Indicator Size
const ISS = 2 * IS; // indicator shell size
const IJS = 5; // indicator jump size

export class SelectDestination extends Component {
  constructor(props) {
    super(props);

    this.scrollX = new Value(0);
    this.onScrollEventHandler = event(
      [{nativeEvent: {contentOffset: {x: this.scrollX}}}],
      {useNativeDriver: true},
    );
    this.indicatorWidth = interpolate(this.scrollX, {
      inputRange: [
        0,
        WIDTH / 2,
        WIDTH,
        (3 / 2) * WIDTH,
        2 * WIDTH,
        (5 / 2) * WIDTH,
        3 * WIDTH,
      ],
      outputRange: [IS, IS * IJS, IS, IS * IJS, IS, IS * IJS, IS],
    });

    this.indicatorOffsetX = interpolate(this.scrollX, {
      inputRange: [0, WIDTH, 2 * WIDTH, 3 * WIDTH],
      outputRange: [
        0,
        IS * IJS - IS / 2,
        IS * IJS * 2 - IS / 2,
        IS * IJS * 3 - IS / 2,
      ],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.ScrollView
          horizontal={true}
          style={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          snapToInterval={WIDTH}
          bounces={false}
          onScroll={this.onScrollEventHandler}>
          <View style={styles.scrollViewContainer}>
            {/* top view of provinces */}
            <View style={styles.scrollViewTop}>
              <View style={styles.item}>
                <Province
                  width={PROVINCE_WIDTH}
                  svgProps={svgProps}
                  svgData={Guilan}
                />
              </View>
              <View style={styles.item}>
                <Province
                  width={PROVINCE_WIDTH}
                  svgProps={svgProps}
                  svgData={Lorestan}
                />
              </View>
              <View style={styles.item}>
                <Province
                  width={PROVINCE_WIDTH}
                  svgProps={svgProps}
                  svgData={WestAzarbayjan}
                />
              </View>
            </View>

            {/* bottom view of descriptions */}
            <View style={styles.scrollViewBottom}></View>
          </View>
        </Animated.ScrollView>
        <View
          style={{
            width: '100%',
            height: 2 * IS,
            alignItems: 'center',
            transform: [{translateX: -IJS * IS + IS / 2}],
            marginBottom: 10,
            marginTop: 10,
          }}>
          <View style={[styles.indicatorShell]} />
          <View
            style={[styles.indicatorShell, {translateX: IJS * IS - IS / 2}]}
          />
          <View
            style={[styles.indicatorShell, {translateX: 2 * IJS * IS - IS / 2}]}
          />
          <Animated.View
            style={{
              width: this.indicatorWidth,
              height: IS,
              borderRadius: IS / 2,
              margin: 5,
              backgroundColor: 'red',
              position: 'absolute',
              top: IS - 0.5 * ISS,
              transform: [{translateX: this.indicatorOffsetX}],
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  scrollView: {
    width: WIDTH,
    height: '100%',
  },
  scrollViewContainer: {
    // width: NUM_DEST * WIDTH,
    height: '100%',
    flexDirection: 'column',
  },
  scrollViewTop: {width: '100%', flexDirection: 'row', alignItems: 'center'},
  scrollViewBottom: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'yellow',
    flexGrow: 2,
  },
  item: {
    width: WIDTH,
    alignItems: 'center',
  },
  indicatorShell: {
    width: ISS,
    height: ISS,
    borderRadius: ISS / 2,
    borderColor: '#000',
    borderWidth: 1,
    position: 'absolute',
    top: IS - 0.5 * ISS,
  },
});
export default SelectDestination;