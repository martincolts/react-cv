import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Header } from './Header';
import { Body } from './Body';


Font.register({ family: 'Roboto', src: 'http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#FFF',
    fontFamily: 'Roboto',
  }
});

export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header></Header>
      <Body></Body>
    </Page>
  </Document>
);