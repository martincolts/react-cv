import { StyleSheet, Text, View } from '@react-pdf/renderer';
import * as React from 'react';


const styles = StyleSheet.create({
    header: {
        marginLeft: 10,
        marginRight: 10,
        padding: 10,
        flexGrow: 2,
        border: '1px black solid'
    }
  });


export const Body: React.FC = () => {
    return <View style={styles.header}>
        <Text>Body</Text>
    </View>
}