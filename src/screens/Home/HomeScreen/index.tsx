import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../helpers/utils';
import {
  getPostDetail,
  getPostListDetail,
  getUserDetail,
} from '../../../actions/authActions';
import {fontSize, hp, wp} from '../../../helpers/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {screenString} from '../../../helpers/strings';
import {Header} from '../../../components';

const HomeScreen: React.FC = ({navigation}: any) => {
  const {allUserData} = useSelector((state: any) => state?.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    let request = {
      onSuccess: () => {},
      onFail: (e: unknown) => {},
    } as never;
    dispatch(getUserDetail(request) as never);
  }, []);

  const onPressUserClick = (item: any) => {
    let request = {
      onSuccess: () => {
        navigation.navigate(screenString.postListScreen);
      },
      onFail: (e: unknown) => {},
    } as never;
    dispatch(getPostListDetail(request) as never);
  };

  const renderUserItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() => onPressUserClick(item)}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textStyle}>Status : {item.status}</Text>
          <Text style={styles.textStyle}> Id : {item.id}</Text>
        </View>
        <Text style={styles.textStyle}>UserName : {item.name}</Text>
        <Text style={styles.textStyle}>Email : {item.email}</Text>
        <Text style={styles.textStyle}>Gender : {item.gender}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Header isTitle={'Home'} />
      <FlatList
        data={allUserData}
        renderItem={renderUserItem}
        showsVerticalScrollIndicator={false}
      />
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

export default HomeScreen;
