import { Page, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { Header } from './Header';
import { Body } from './Body';

Font.register({ family: 'Roboto', src: 'http://fonts.gstatic.com/s/roboto/v16/zN7GBFwfMP4uA6AR0HCoLQ.ttf' });
Font.register({ family: 'Roboto-Bold', src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf' });
Font.register({ family: 'Roboto-Medium', src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf' });
Font.register({ family: 'Roboto-Italic', src: 'https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf' });

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    fontFamily: 'Roboto',
    margin:0,
    padding:0
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