export interface Data {
    personalData: PersonalData;
    otherInfo: OtherInfo;
    workExperience: WorkExperience[];
    personalWork: PersonalWork;
    skills: SkillEntry[];
}

export interface PersonalData {
    name: string;
    description: string;
    title: string
    phoneNumber: string;
    linkedInProfile: string;
    url: string;
    email: string;
    address: Address;
}

export interface Address {
    city: string;
    street: string;
    streetNumber: string;
    zipCode: string;
    state: string;
    country: string;
}

export interface OtherInfo {
    education: Education[]
    languages: Language[]
}

export interface Education {
    pediod: string;
    title: string;
    schoolName: string
    place: string;
    thesis: string;
}

export interface Language {
    name: string;
    calification: string;
}

export interface WorkExperience {
    period: string;
    company: string;
    place: string;
    lines: string[];
    title: string;

}

export interface PersonalWork {
    description: string;
    works: PersonalWorkEntry[];
}

export interface PersonalWorkEntry {
    tool: string;
    description: string
}

export interface SkillEntry {
    name: string;
    description: string;
}

export const data = {
    personalData: {
        name: 'Jose Martin Lopez',
        description: `As a seasoned Senior Software Developer, I bring a wealth of experience in both Front-end and Back-end development, proficient in a diverse array of languages including Java, Golang, Node.js, and React. My expertise lies in crafting robust architectures and delivering clean, maintainable code. Driven by a passion for continuous improvement, I eagerly explore new languages, frameworks, and techniques to enhance my professional repertoire.`,
        title: 'Senior System Engineer',
        phoneNumber: '+54 2494 20 9692',
        email: 'martinlopez89.quequen@gmail.com',
        linkedInProfile: 'linkedin.com/in/jose-martin-lopez-software-engineer/',
        url: 'https://martincolts.github.io/',
        address: {
            city: 'Tandil',
            street: 'Primera Junta',
            streetNumber: '253',
            zipCode: '7000',
            state: 'Buenos Aires',
            country: 'Argentina'
        }
    },
    otherInfo: {
        education: [
            {
                pediod: "2005-2007",
                place: "Necochea, ARG",
                schoolName: "E.E.T. N 2 Gral. Mariano Necochea",
                title: "High School Diploma and Electromecanic Technician"
            },
            {
                pediod: "2008-2016",
                place: "Tandil, ARG",
                schoolName: "UNICEN",
                title: "Systems Engineer",
                thesis: "Thesis: Análisis de Técnicas para predecir patrones de uso de los dispositivos móviles. (Analysis of techniques to predict patterns of mobile devices usage.)"
            }
        ],
        languages: [
            {
                name: "Spanish",
                calification: "Native",
            }, 
            {
                name: "English",
                calification: "Upper Intermediate"
            }
        ]
    },
    workExperience: [
        {
            company: 'Tiny Mile',
            title: 'Sr. Software Engineer',
            place: 'Remote',
            period: 'Sep 2022 - Present',
            lines: [
                         "Responsible for the design maintenance and development of all enterprise microservices.",
                     "Microservices developed with Go Languages using gRPC and PubSub for microservices communication. Pulumi as infrastructure as code. Github, and Github actions for code versioning and CI. Deploying in GCP.",
                         "Responsible for the development and maintenance of front-end applications, using ReactJS with Typescript with tools like MUI, Tanstack, and Zustand. Also, some applications were developed with Svelte using pure CSS for styling."
                     ]
        },
        {
            company: 'BitTtrap',
            title: 'Sr. Software Engineer',
            place: 'Remote',
            period: 'Jul 2021 - Sep 2022',
            lines: [
                "Security Certificates Application: Responsible for the design and development of the Certificate Generation project. Using NodeJS and React framework with tools to generate PDF documents.",
                "Using technologies as JavaScript using NodeJS in the backend and nexe for an agent. ReactJS for frontend development.",
                "GitLab as Version Control Tool, and other tools like Jira and Travis.",
                "Using Docker to run all the system in containers.",
                "Develop a tool using the Bitcoin blockchain to detect changes in a Bitcoin wallet.",
                "Responsible for the design and development of the new version 2 of the application."
            ]
        },
        {
            company: 'Split',
            title: 'Sr. Software Engineer',
            place: 'Tandil, ARG',
            period: 'Oct 2020 - Jul 2021',
            lines: [
                "Responsible for maintenance and development of new features for Web Admin service and Splits admin service. Using Java and Dropwizard as Web API Framework.",
                "Responsible for the development of a new Auth microservice.",
                "Using technologies such as Java, Dropwizard, Guice, and MongoDB with Morphia as ODM, Redis, and Fastly. GitHub as Version Control Tool, and other tools like Jira and Travis.",
            ]
        },
        {
            company: 'Khoros',
            title: 'Sr. Backend Engineer',
            place: 'Remote',
            period: 'Jul 2019 - Oct 2020',
            lines: [
                "Responsible for the maintenance and development of new features of microservices related to the Analitycs project on the Khoros application, using Scala as the main language with Twitter Finatra as Web API Framework and Apache SPARK for Data Engineering to create the stats and charts. GraphQL with Sangria Framework. MySQL, Postgres and Cassandra databases.",
                "Responsible for the maintenance and development of new features of the Analytics front-end page using ReactJS.",
                "Responsible for the maintenance and development of new features on the Web Admin application with OAuth support using Java and Dropwizard as Web API frameworks.",
                "Responsible for creating new features and configuring the CI using Kubernetes and Jenkins tools.",
            ]
        },
        {
            company: 'Infor',
            title: 'Sr. Backend Engineer',
            place: 'Tandil, ARG',
            period: 'Jul 2017 - Jul 2019',
            lines: [
                "Using Java 8 with Spring boot Framework, Hibernate as ORM.",
                "GIT as Version Control Tool, and other tools like BitBucket, Jira, Bamboo.",
                "Volume performance & Load Testing: Automation scripts built with Python and Bash, using JMeter to execute load testing and generating reports."
            ]
        },
        {
            company: 'Technisys',
            title: 'Front-end developer',
            place: 'Tandil, ARG',
            period: 'Sep 2015 - Jul 2017',
            lines: [
                "Front-end developer using a framework developed by Technisys called VIEW where I had the opportunity to work with HTML and JS technologies with an application using MySQL Database.",
                "Front–end developer on Home Banking project for Falabella Bank. I was responsible to generate the deliverable artifact and creating installation documentation.",
                "Front–end developer on Bussines Banking for Patagonia Bank."
            ]
        },
    ],
    personalWork: {
        description: "As a professional I like to be up to date with the technologies and that is why I am a person that investigate and work in personal projects in order to apply the things that I have learnt. Following I detail some technologies in which I have been working on.",
        works: [
            {
                description: "I have worked with NodeJS using NestJS framework and Typescript as language and TypeORM as ORM for Postgres and MongoDB.",
                tool: "NodeJS"
            },
            {
                description: "I have been working with Golang to create an API in gin-gonic using Gorm as ORM for Postgres database.",
                tool: "Golang"
            },
            {
                description: "I have created small projects in react using Redux or React context as application state manager and using Boostrap or Material design to apply styles.",
                tool: "ReactJS"
            }, 
            {
                description: "I have created small projects to work with Angular 8 using Akita as State Manager.",
                tool: "Angular"
            },
            {
                description: "Since in my thesis I had to apply some algorithms from scikit-learn I created a Web API using Flask.",
                tool: "Python"
            }, 
            {
                description: "I have created a Web API using Finatra framework and Slick as ORM for Postgres database.",
                tool: "Scala"   
            }
        ]
    },
    skills: [
        {
            name: "Programming Languages",
            description: "Java, Kotlin, Scala, JavaScript, TypeScript, HTML, CSS, C/C++, Prolog, Pascal, Python, Bash scripting, Golang"
        },
        {
            name: "Technologies known",
            description: "Relational databases: PostgreSQL and MySQL. No Relational databases: Cassandra, MongoDB. Application servers: Tomcat. Tools: Jira, JMeter. Operative systems: Linux and Windows, Agile practices: Scrum, Pair programming. Version-control Tools: GIT. Build automation tools: Maven, Gradle. Container Runner: Docker"
        }, 
        {
            name: "Frameworks/Tools",
            description: "Spring Boot, Spring Data, Spring Security, Dropwizard, Guice, Morphia, ReactJS, Angular, NodeJS, JUnit, Mockito, EasyMock, Express, Chai, Jest, Mocha, Nexe, Finatra, Sangria."
        }
    ]
} as Data