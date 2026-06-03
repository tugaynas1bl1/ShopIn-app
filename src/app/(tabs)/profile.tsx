import { Button, StyleSheet, Text, View } from 'react-native'
import StyledView from '../components/StyledView'
import StyledText from '../components/StyledText'
import { useMMKVBoolean, useMMKVString } from 'react-native-mmkv'

const Profile = () => {
  const [accessToken, setAccessToken] = useMMKVString('accessToken')
  return (
    <StyledView>
      <StyledText>Profile page</StyledText>
      <Button onPress={() => {
        setAccessToken('')
      }} title={'Log out'}></Button>
    </StyledView>
  )
}

export default Profile

const styles = StyleSheet.create({})