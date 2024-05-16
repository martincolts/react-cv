import { StyleSheet, Text, View } from '@react-pdf/renderer';
import * as React from 'react';
import { EducationSection } from './Education';
import { LanguagesSection } from './Languages';
import { Experience } from './Experience';
import { PersonalWork } from './PersonalWork';
import { Skills } from './Skills';


const styles = StyleSheet.create({
    body: {
        marginLeft: 5,
        marginRight: 5,
        flexGrow: 2,
    
    },
    container: {
        flexDirection: 'row',
    },
    experience: {
        flexGrow: 0.6,
        padding: 2,
        height: '100%',
    },
    otherInfo: {
        flexGrow: 0.4,
        padding: 2,
        paddingLeft: 5,
        backgroundColor: '#a13108',
        color: 'white',
        width: '242px',
        height: '100%',
        borderRadius: '5px',
    }
});


export const Body: React.FC = () => {
    return <View style={styles.body}>
        <View style={styles.container}>
            <View style={styles.experience}>
                <Experience />
            </View>
            <View style={styles.otherInfo}>
                <EducationSection />
                <LanguagesSection />
                <PersonalWork />
                <Skills />
            </View>
        </View>
    </View>
}