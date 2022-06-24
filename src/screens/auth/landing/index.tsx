import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextBase,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenString} from '../../../helpers/strings';
import {colors} from '../../../helpers/utils';

interface props {
  navigation: any;
}

const LandingScreen: React.FC<props> = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(screenString.homeScreen);
    }, 500);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size={'large'} />
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
});

export default LandingScreen;
