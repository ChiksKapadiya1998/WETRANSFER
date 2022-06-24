import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {colors} from '../../../helpers/utils';

import {fontSize, hp, wp} from '../../../helpers/constants';
import {Header} from '../../../components';

const PostScreen: React.FC = ({navigation}: any) => {
  const {postData} = useSelector((state: any) => state?.auth);

  return (
    <SafeAreaView>
      <Header
        isTitle={'Post List'}
        isLeftView={true}
        onLeftIconPress={() => navigation.goBack()}
      />
      <View style={styles.cardContent}>
        <Text style={[styles.textStyle, {textAlign: 'center'}]}>
          {' '}
          Id : {postData?.id}
        </Text>
        <Text
          style={[styles.textStyle, {marginTop: hp(1), textAlign: 'center'}]}>
          {postData?.title}
        </Text>
        <Text style={[styles.textStyle, {marginTop: hp(1)}]}>
          Body : {postData?.body}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primaryWhite,
  },
  cardContent: {
    borderWidth: 1,
    marginHorizontal: wp(3.5),
    paddingVertical: hp(1.2),
    marginBottom: hp(1),
    paddingHorizontal: wp(3),
    borderRadius: wp(3),
    backgroundColor: colors.backgroundColor,
  },
  textStyle: {
    fontSize: fontSize(18),
    color: colors.primaryBlack,
    lineHeight: fontSize(24),
  },
});

export default PostScreen;
