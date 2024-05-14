import { StyleSheet, Text, View } from "@react-pdf/renderer";
import * as React from "react";
import { usePersonalDataHook } from "./useDataHook";
import { Phone } from "./icons/phone";
import { Address } from "./icons/address";
import { LinkedIn } from "./icons/linkedin";
import { Email } from "./icons/email";
import { Url } from "./icons/url";

const styles = StyleSheet.create({
  body: {
    margin: 10,
    flexGrow: 0.09,
    borderRadius: "20px",
    flexDirection: "row",
  },
  title: {
    flexGrow: 0.6,
    justifyContent: "center",
    width: "10%",
  },
  contact: {
    flexGrow: 0.4,
    fontSize: 10,
    backgroundColor: "#a13108",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    width: "10%",
    padding: 10,
    color: "white",
    justifyContent: "center",
    marginLeft: 0
  },
  contactRow: {
    margin: 3,
  },
  contactRowSmall: {
    margin: 3,
    fontSize: 8,
  },
  titleDescription: {
    fontSize: 12,
    color: "#a13108"
  },
  descriptionText: {
    marginTop: 10,
    width: '98%',
    fontSize: 8,
    textAlign: "justify",
 
  },
  line: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export const Header: React.FC = () => {
  const personalData = usePersonalDataHook();

  return (
    <View style={styles.body}>
      <View style={styles.title}>
        <Text>{personalData.name}</Text>
        <Text style={styles.titleDescription}>{personalData.title}</Text>
        <Text style={styles.descriptionText}>{personalData.description}</Text>
      </View>
      <View style={styles.contact}>
        <View style={styles.line}>
          <Phone />
          <Text style={styles.contactRow}>
            Phone: {personalData.phoneNumber}
          </Text>
        </View>

        <View style={styles.line}>
          <Address />
          <Text style={styles.contactRow}>
            Address: {personalData.address.city}, {personalData.address.state},{" "}
            {personalData.address.country}
          </Text>
        </View>

        <View style={styles.line}>
          <LinkedIn />
          <Text style={styles.contactRowSmall}>
            LinkedIn: {personalData.linkedInProfile}
          </Text>
        </View>

        <View style={styles.line}>
            <Email/>
        <Text style={styles.contactRow}>Email: {personalData.email}</Text>
        </View>
        <View style={styles.line}>
            <Url/>
        <Text style={styles.contactRow}>Url: {personalData.url}</Text>
        </View>
      </View>
    </View>
  );
};
