import { StyleSheet, Text, View } from "@react-pdf/renderer"
import { useExperienceHook } from "./hooks/useExperienceHook"
import { WorkExperience } from "./data"
import { AddressLine } from "./icons/address_line"
import { Circle } from "./icons/circle"


const experienceStyle = StyleSheet.create({
    workExperience: {
        flexDirection: 'column',
        width: '330px'
    },
    title: {
        fontSize: 12,
        fontFamily: 'Roboto-Bold'
    }
})

export const Experience: React.FC = () => {
    const workExperience = useExperienceHook()
    return <View style={experienceStyle.workExperience}>
        <Text style={experienceStyle.title}>Experience</Text>
        {workExperience.map(workExperience => {
            return <WorkExperienceRow experience={workExperience}/>
        })}
    </View>
}

interface WorkExperienceRowProps {
    experience: WorkExperience
}

const experienceRowStyle = StyleSheet.create({
    row: {
        fontSize: 9,
        marginTop: 10,
    },
    workTitle: {
        flexDirection: 'row',
        alignContent: "flex-end",
        alignItems: "flex-end",
    },
    period: {
        fontFamily: 'Roboto-Medium'
    },
    company: {
        marginLeft: '2mm',
        marginRight: '5mm',
        fontSize: 10,
        fontFamily: 'Roboto-Bold'
    },
    place: {
        fontFamily: 'Roboto-Italic'
    },
    placeLine: {
        flexDirection: 'row',
        alignContent: "center",
        alignItems: "center",
    },
    position: {
        fontSize: 10,
        fontFamily: 'Roboto-Italic',
        color:  '#a13108'
    },
    lines: {
        flexDirection: 'row',
        margin: 0,
        marginTop: '2px',
    },
    line: {
        textIndent: 2,
        textAlign: "justify",
        width: '330px',
        fontSize: 8,

    }
})

const WorkExperienceRow: React.FC<WorkExperienceRowProps> = ({ experience }) => {

    return <View wrap style={experienceRowStyle.row}>
        <View>
            <View style={experienceRowStyle.workTitle}>
            <Text style={experienceRowStyle.period}>{experience.period}</Text>
            <Text style={experienceRowStyle.company}>{experience.company}</Text>
            <View  style={experienceRowStyle.placeLine}>
            <AddressLine/>
            <Text style={experienceRowStyle.place}>{experience.place}</Text>
            </View>
            
            </View>
            <Text style={experienceRowStyle.position}>{experience.title}</Text>
            {experience.lines.map(l => {
                return <View wrap style={experienceRowStyle.lines}> 
                <Circle/>
                <Text style={experienceRowStyle.line}>{l}</Text>
                </View>
            })}
        </View>
    </View>
}
