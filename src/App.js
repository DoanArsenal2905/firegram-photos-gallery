import React, { useState } from 'react';
import Footer from './components/Footer.jsx';
import ImageGrid from './components/ImageGrid.jsx'
import Modal from './components/Modal.jsx'
import Title from './components/Title.jsx'
import UploadForm from './components/UploadForm.jsx'

function App() {
  const [selectedImg, setSelectedImg] = useState(null)

  return (
    <div className="App">
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      <Footer />
    </div>
  )
}

export default App
