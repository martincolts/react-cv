import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { usePersonalWorkHook } from "./hooks/usePersonalWorkHook"
import { PersonalWorkEntry } from "./data"

const styles = StyleSheet.create({
    title: {
        fontSize: 12,
        marginTop: '15px',
        marginBottom: '5px',
        fontFamily: 'Roboto-Bold'
    },
    description: {
        fontSize: 8
    }
})

export const PersonalWork = () => {

    const personalWork = usePersonalWorkHook()

    return <View>
        <Text style={styles.title}>Personal Work</Text>
        <Text style={styles.description}>{personalWork.description}</Text>
        {personalWork.works.map(entry => {
            return <PersonalWorkRow entry={entry}/>
        })}
    </View>
}

interface PersonalWorkRowProps {
    entry: PersonalWorkEntry
}

const rowStyle = StyleSheet.create({
    entry: {
        flexDirection: 'row',
        fontSize: 8,
        marginTop: '10px'
    },
    tool: {
        fontFamily: 'Roboto-Bold',
        width: '50px'
    },
    description: {
        width: '175px'
    }
})

const PersonalWorkRow: React.FC<PersonalWorkRowProps> = ({entry}) => {

    return <View style={rowStyle.entry}>
            <Text style={rowStyle.tool}>{entry.tool}</Text>
            <Text style={rowStyle.description}>{entry.description}</Text>
    </View>

}

