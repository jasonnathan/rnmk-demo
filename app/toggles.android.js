/**
 * Created by ywu on 15/7/24.
 */

const React = require('react-native');
const MK = require('react-native-material-kit');
const appStyles = require('./styles');

const {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  PixelRatio,
} = React;

const {
  MKColor,
  mdl,
  getTheme,
} = MK;

const toPx = PixelRatio.getPixelSizeForLayoutSize.bind(PixelRatio);

const styles = Object.assign(appStyles, StyleSheet.create({
  toggleText: {
    fontSize: 16,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#616161',
  },
  toggleOnText: {
    color: getTheme().primaryColor,
  },
  switch: {
    marginTop: toPx(5),
    marginBottom: toPx(5),
  },
  appleSwitch: {
    width: toPx(26),
    height: toPx(15),
    marginTop: toPx(2),
    marginBottom: toPx(5),
  },
}));

// const FatSwitch = MKSwitch.mkSwitch()
//   .withThumbRadius(toPx(7))
//   .withStyle(styles.appleSwitch)
//   .withOnCheckedChange(() => console.log('fat switch clicked'))
//   .build();

class Toggles extends Component {
  _onChecked(event) {
    console.log(`icon toggle is checked? ${event.checked}`);
  }

  _onToggleClicked() {
    console.log('you clicked a toggle');
  }

  render() {
    return (
      <ScrollView style={styles.scrollView}
                  contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <mdl.Switch checked={true}
                        style={styles.switch}
            />
            <Text style={styles.legendLabel}>Switch on</Text>
          </View>
          <View style={styles.col}>
            <mdl.Switch style={styles.appleSwitch}
                        onColor="rgba(255,152,0,.3)"
                        thumbOnColor={MKColor.Orange}
                        rippleColor="rgba(255,152,0,.2)"
                        onPress={() => console.log('orange switch pressed')}
                        onCheckedChange={(e) => console.log('orange switch checked', e)}
              />
            <Text style={styles.legendLabel}>Switch off</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

module.exports = Toggles;
