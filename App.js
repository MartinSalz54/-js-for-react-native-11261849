import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { processArray, formatArrayStrings } from './arrayManipulation'; // Correct import
import { getUserInfo, createUserProfiles } from './userInfo'; // Correct import

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  const strings = ['Hello', 'World', 'JavaScript', 'is', 'Awesome'];

  const processedNumbers = processArray(numbers);
  const formattedStrings = formatArrayStrings(strings, processedNumbers);
  
  const userProfiles = createUserProfiles(strings, formattedStrings);
  const userInfo = getUserInfo(1); // For demonstration, let's get the user info with ID 1

  return (
    <View style={styles.container}>
      <Text>MARK HYBRID !</Text>
      <StatusBar style="auto" />
      
      <Text>Processed Numbers:</Text>
      {processedNumbers.map((num, index) => (
        <Text key={index}>{num}</Text>
      ))}

      <Text>Formatted Strings:</Text>
      {formattedStrings.map((str, index) => (
        <Text key={index}>{str}</Text>
      ))}

      <Text>User Profiles:</Text>
      {userProfiles.map((profile, index) => (
        <Text key={index}>
          {`ID: ${profile.id}, Original: ${profile.originalName}, Modified: ${profile.modifiedName}`}
        </Text>
      ))}

      <Text>User Info:</Text>
      <Text>{`ID: ${userInfo.id}, Original: ${userInfo.originalName}, Modified: ${userInfo.modifiedName}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

