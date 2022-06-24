import React from 'react';
import {Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useTheme} from '@react-navigation/native';
import {colors} from '../../../helpers/utils';

import {fontSize, hp, wp} from '../../../helpers/constants';
import {Header} from '../../../components';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {getPostDetail} from '../../../actions/authActions';
import {screenString} from '../../../helpers/strings';

const PostListScreen: React.FC = ({navigation}: any) => {
  const {allPostData} = useSelector((state: any) => state?.auth);

  const dispatch = useDispatch();

  console.log('getPostDetail', allPostData);
  const onPressPost = (item: any) => {
    let request = {
      data: {
        postID: item.id,
      },
      onSuccess: () => {
        navigation.navigate(screenString.postScreen);
      },
      onFail: (e: unknown) => {},
    } as never;
    dispatch(getPostDetail(request) as never);
  };

  const renderUserItem = ({item}: any) => {
    return (
      <TouchableOpacity
        style={styles.cardContent}
        onPress={() => onPressPost(item)}>
        <Text style={[styles.textStyle, {textAlign: 'center'}]}>
          {' '}
          Id : {item?.id}
        </Text>
        <Text
          style={[styles.textStyle, {marginTop: hp(1), textAlign: 'center'}]}>
          {item?.title}
        </Text>
        <Text style={[styles.textStyle, {marginTop: hp(1)}]}>
          Body : {item?.body}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <Header
        isTitle={'Post List'}
        isLeftView={true}
        onLeftIconPress={() => navigation.goBack()}
      />
      <FlatList
        data={allPostData}
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

export default PostListScreen;
