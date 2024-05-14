export interface Data {
    personalData: PersonalData;
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


export const data = {
    personalData: {
        name: 'Jose Martin Lopez',
        description: `As a seasoned Senior Software Developer, I bring a wealth of experience in both Front-end and Back-end development, proficient in a diverse array of languages including Java, Scala, Golang, Node.js, and React. My expertise lies in crafting robust architectures and delivering clean, maintainable code. Driven by a passion for continuous improvement, I eagerly explore new languages, frameworks, and techniques to enhance my professional repertoire.`,
        title: 'System Engineer',
        phoneNumber: '+54 2494 20 9692',
        email: 'martinlopez89.quequen@gmail.com',
        linkedInProfile: 'linkedin.com/in/jose-martin-lopez-full-stack-dev',
        url: 'https://martincolts.github.io/',
        address: {
            city: 'Tandil',
            street: 'Primera Junta',
            streetNumber: '253',
            zipCode: '7000',
            state: 'Buenos Aires',
            country: 'Argentina'
        }
    }
} as Data