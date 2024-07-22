//
//------------------------------------------------------------------GIT------------------------------------------------------------------------
// import React from 'react';
// import {DocumentEditorContainerComponent, Toolbar, Inject} from '@syncfusion/ej2-react-documenteditor';
// import './App.css';

// function App() {
//   let editorObj: DocumentEditorContainerComponent | null;
//   const onSave=()=>{
//     editorObj?.documentEditor.save("Sample", "Docx");
//   }
//   return (
//     <div className="App">
//       <button onClick={onSave} style={{marginBottom:10}}>Save</button>
//      <DocumentEditorContainerComponent ref={(ins=>editorObj=ins)} height='590' enableToolbar={true}
//       serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/">
//       <Inject services={[Toolbar]}></Inject>
//      </DocumentEditorContainerComponent>
//     </div>
//   );
// }

// export default App;

//-----------------------------------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
// import './App.css';

// function App() {
//   let editorObj: DocumentEditorContainerComponent | null;
  
//   const onSave = () => {
//     editorObj?.documentEditor.save("Sample", "Docx");
//   }

//   return (
//     <div className="App">
//       <button onClick={onSave} style={{ marginBottom: 10 }}>Save</button>
//       <DocumentEditorContainerComponent
//         ref={(ins => editorObj = ins)}
//         height='590'
//         enableToolbar={true}
//         serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
//       >
//         <Inject services={[Toolbar]}></Inject>
//       </DocumentEditorContainerComponent>
//     </div>
//   );
// }

// export default App;

//--------------------------------------------------------------------------------------------------------------------------------------------

// import React, { useRef } from 'react';
// import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
// import './App.css';

// function App() {
//   const editorObj = useRef<DocumentEditorContainerComponent | null>(null);

//   const onSave = () => {
//     if (editorObj.current) {
//       editorObj.current.documentEditor.saveAsBlob("Docx")
//         .then((blob: Blob | null) => {
//           if (!blob) {
//             console.error('Failed to generate document blob');
//             return;
//           }
//           const formData = new FormData();
//           formData.append('file', blob, 'Sample.docx');

//           fetch('/convert-to-doc', {
//             method: 'POST',
//             body: formData
//           })
//           .then(response => response.blob())
//           .then(blob => {
//             if (!blob) {
//               console.error('Failed to receive converted document');
//               return;
//             }
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.style.display = 'none';
//             a.href = url;
//             a.download = 'Sample.doc';
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//           })
//           .catch(error => console.error('Error converting document:', error));
//         })
//         .catch(error => console.error('Error generating document blob:', error));
//     }
//   }

//   return (
//     <div className="App">
//       <button onClick={onSave} style={{ marginBottom: 10 }}>Save as .doc</button>
//       <DocumentEditorContainerComponent
//         ref={editorObj}
//         height='590'
//         enableToolbar={true}
//         serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
//       >
//         <Inject services={[Toolbar]} />
//       </DocumentEditorContainerComponent>
//     </div>
//   );
// }

// export default App;


//save as .doc is possible


//---------------------------------------------------------------------------------------------------------------------------------


// import React, { useRef } from 'react';
// import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
// import './App.css';

// function App() {
//   const editorObj = useRef<DocumentEditorContainerComponent | null>(null);

//   const onLoadDocument = () => {
//     const documentUrl = process.env.PUBLIC_URL + '/Document.doc';
    
//     fetch('/convert-to-sfdt', {
//       method: 'POST',
//       body: JSON.stringify({ documentUrl }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(response => response.blob())
//     .then(blob => {
//       if (!blob) {
//         console.error('Failed to convert document to .sfdt');
//         return;
//       }
//       const url = window.URL.createObjectURL(blob);
//       editorObj.current?.documentEditor.open(url); // Open the converted .sfdt file
//     })
//     .catch(error => console.error('Error converting document to .sfdt:', error));
//   };

//   const onSave = () => {
//     if (editorObj.current) {
//       editorObj.current.documentEditor.saveAsBlob("Docx")
//         .then(blob => {
//           if (!blob) {
//             console.error('Failed to generate document blob');
//             return;
//           }
//           const formData = new FormData();
//           formData.append('file', blob, 'Document.docx');

//           fetch('/convert-to-doc', {
//             method: 'POST',
//             body: formData
//           })
//           .then(response => response.blob())
//           .then(blob => {
//             if (!blob) {
//               console.error('Failed to receive converted document');
//               return;
//             }
//             const url = window.URL.createObjectURL(blob);
//             const a = document.createElement('a');
//             a.style.display = 'none';
//             a.href = url;
//             a.download = 'Document.doc';
//             document.body.appendChild(a);
//             a.click();
//             window.URL.revokeObjectURL(url);
//           })
//           .catch(error => console.error('Error converting document to .doc:', error));
//         })
//         .catch(error => console.error('Error generating document blob:', error));
//     }
//   };

//   return (
//     <div className="App">
//       <button onClick={onLoadDocument} style={{ marginBottom: 10 }}>Load Document</button>
//       <button onClick={onSave} style={{ marginBottom: 10 }}>Save as .doc</button>
//       <DocumentEditorContainerComponent
//         ref={editorObj}
//         height='590'
//         enableToolbar={true}
//         serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
//       >
//         <Inject services={[Toolbar]} />
//       </DocumentEditorContainerComponent>
//     </div>
//   );
// }

// export default App;


// NOT LOAD THE DOCUMENT


//------------------------------------------------------------WORKING--------------------------------------------------------------------------



import React, { useRef } from 'react';
import { DocumentEditorContainerComponent, Toolbar, Inject } from '@syncfusion/ej2-react-documenteditor';
import './App.css';

function App() {
  const editorObj = useRef<DocumentEditorContainerComponent | null>(null);

  const onSave = () => {
    if (editorObj.current) {
      editorObj.current.documentEditor.saveAsBlob("Docx")
        .then((blob: Blob | null) => {
          if (!blob) {
            console.error('Failed to generate document blob');
            return;
          }
          const formData = new FormData();
          formData.append('file', blob, 'Sample.docx');

          fetch('/convert-to-doc', {
            method: 'POST',
            body: formData
          })
          .then(response => response.blob())
          .then(blob => {
            if (!blob) {
              console.error('Failed to receive converted document');
              return;
            }
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'Sample.doc';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(error => console.error('Error converting document:', error));
        })
        .catch(error => console.error('Error generating document blob:', error));
    }
  }

  return (
    <div className="App">
      <button onClick={onSave} style={{ marginBottom: 10 }}>Save as .doc</button>
      <DocumentEditorContainerComponent
        ref={editorObj}
        height='590'
        enableToolbar={true}
        serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/documenteditor/"
      >
        <Inject services={[Toolbar]} />
      </DocumentEditorContainerComponent>
    </div>
  );
}

export default App;


//save as .doc is possible

