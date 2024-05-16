import { StyleSheet, Text, View } from '@react-pdf/renderer';
import * as React from 'react';
import { Language } from './data';
import { useLanguagesHook } from './hooks/useLanguagesHook';

const languagesStyles = StyleSheet.create({
    title: {
        fontSize: 12,
        marginTop: '15px',
        marginBottom: '5px',
        fontFamily: 'Roboto-Bold'
    }
})

export const LanguagesSection: React.FC = () => {
    const education = useLanguagesHook()
    const eRows = education.map(e => {
        return <LanguagesRow language={e} />
    })
    return <View>
        <Text style={languagesStyles.title}>Languages</Text>
        {eRows}
    </View>
}

interface LanguagesRowProps {
    language: Language;
}

const languageRowStyles = StyleSheet.create({
    row: {
        flexDirection: 'column',
        fontSize: 8,
        width: '26mm'
    },
    container: {
        width: '250%',
    },
    language: {
        flexDirection: 'row',
        width: '1000%',
        marginTop: '1mm',
    },
    name: {
        fontFamily: 'Roboto-Bold',
        width: '15mm'
    }
})

const LanguagesRow: React.FC<LanguagesRowProps> = ({ language }) => {
    return <View style={languageRowStyles.row}>
        <View style={languageRowStyles.container}>
            <View style={languageRowStyles.language}>
                <Text style={languageRowStyles.name}>{language.name}</Text>
                <Text>{language.calification}</Text>
            </View>
           
        </View>
    </View>
}

