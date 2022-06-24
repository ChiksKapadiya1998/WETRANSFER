import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {fontSize, hp, statusBarHeight, wp} from '../../../helpers/constants';
import {icons} from '../../../helpers/iconConstant';
import {colors} from '../../../helpers/utils';

interface props {
  mainContainer?: object;
  isLeftView?: boolean;
  leftIcon?: any;
  leftIconStyle?: object;
  onLeftIconPress?: () => void;
  isTitle?: string;
}

const Header: React.FC<props> = ({
  mainContainer,
  onLeftIconPress,
  isTitle,

  isLeftView,
}) => {
  return (
    <View style={[style.mainContainer, mainContainer]}>
      {isLeftView ? (
        <TouchableOpacity
          style={style.leftSideViewStyle}
          onPress={onLeftIconPress}>
          <Image source={icons.backIcon} style={style.leftImage} />
        </TouchableOpacity>
      ) : (
        <View style={style.leftSideViewStyle} />
      )}
      <View style={style.centerViewStyle}>
        <Text style={[style.headerTextStyle]}>{isTitle}</Text>
      </View>

      <View style={{flex: 1}} />
    </View>
  );
};

const style = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(100),
    marginBottom: hp(1),
  },
  leftSideViewStyle: {
    flex: 1,
    paddingStart: wp(5.33),
  },
  centerViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  settingIconStyle: {
    height: wp(4),
    width: wp(5),
  },
  iconStyle: {
    height: hp(1.75),
    width: hp(2.14),
    tintColor: colors.commonColor,
  },
  hitSlopStyle: {
    right: 10,
    top: 10,
    left: 10,
    bottom: 10,
  },
  headerTextStyle: {
    alignSelf: 'center',
    fontSize: fontSize(20),
    fontWeight: '700',
    color: colors.primaryBlack,
    lineHeight: fontSize(26),
  },
  leftImage: {
    height: wp(9),
    width: wp(9),
  },
});

export default Header;
