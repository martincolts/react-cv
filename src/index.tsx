import ReactDOM from 'react-dom/client';
import { MyDocument } from './App';
import { PDFViewer } from '@react-pdf/renderer';


const styles = {
  width: '100%',
  height: '1000px'
}
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <PDFViewer style={styles}>
  <MyDocument />
</PDFViewer>
);


