import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { SkillEntry } from "./data"
import { useSkillsHook } from "./hooks/useSkillsHook"

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

export const Skills = () => {

    const skills = useSkillsHook()

    return <View>
        <Text style={styles.title}>Skills</Text>
        {skills.map(entry => {
            return <SkillRow entry={entry}/>
        })}
    </View>
}

interface SkillRowProps {
    entry: SkillEntry
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

const SkillRow: React.FC<SkillRowProps> = ({entry}) => {

    return <View style={rowStyle.entry}>
            <Text style={rowStyle.tool}>{entry.name}</Text>
            <Text style={rowStyle.description}>{entry.description}</Text>
    </View>

}