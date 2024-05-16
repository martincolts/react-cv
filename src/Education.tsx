import { Font, StyleSheet, Text, View } from '@react-pdf/renderer';
import * as React from 'react';
import { useEducationHook } from './hooks/useEducationHook';
import { Education } from './data';

const educationStyles = StyleSheet.create({
    education: {
        fontSize: 12,
        marginTop: '5px',
        marginBottom: '5px',
        fontFamily: 'Roboto-Bold'
    }
})

export const EducationSection: React.FC = () => {
    const education = useEducationHook()
    const eRows = education.map(e => {
        return <EducationRow education={e} />
    })
    return <View>
        <Text style={educationStyles.education}>Education</Text>
        {eRows}
    </View>
}

interface EducationRowProps {
    education: Education;
}

const educationRowStyles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        fontSize: 8,
        width: '26mm',
        marginBottom: '5mm'
    },
    container: {
        width: '300%',
    },
    period: {
        fontFamily: 'Roboto-Bold'
    },
    school: {
        flexDirection: 'row',
        marginTop: '1mm',
        justifyContent: 'space-between'
    },
    schoolLine: {
        width: '50mm',
        fontFamily: 'Roboto-Bold',
        fontSize: 9,
    },
    thesis: {
        fontSize: 7,
        marginTop: '1mm',
    },
    place: {
        
    },
    title: {
        marginTop: '2mm',
        fontFamily: 'Roboto-Italic'
    }
})

const EducationRow: React.FC<EducationRowProps> = ({ education }) => {
    return <View style={educationRowStyles.row}>
        <View style={educationRowStyles.container}>
            <Text style={educationRowStyles.period}>{education.pediod}</Text>
            <View style={educationRowStyles.school}>
                <Text style={educationRowStyles.schoolLine}>{education.schoolName}</Text>
                <Text style={educationRowStyles.place}>{education.place}</Text>
            </View>
            <Text style={educationRowStyles.title}>{education.title}</Text>
            <Text style={educationRowStyles.thesis}>{education.thesis}</Text>
        </View>
    </View>
}

