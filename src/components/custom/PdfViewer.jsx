"use client"

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

try {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
} catch (error) {
  console.error("Failed to initialize PDF worker:", error);
}

function PdfViewer({url, setNumPages, pageNumber, setPageNumber}) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [documentLoaded, setDocumentLoaded] = useState(false);

  if(!url) {
    return <div><p>Failed to load PDF file.</p></div>;
  }

  const scale = 1

  return (
    <div
      style={{overflow:'auto', width:'full'}}
    >
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber((p) => Math.min(Math.max(1, p), numPages));
          setDocumentLoaded(true);
        }}
        error={<p>Failed to load PDF.</p>}
        loading={<div>Loading PDF...</div>}
      >
        {documentLoaded && (
          <div
            style={
              dimensions.width && dimensions.height
                ? { minHeight: dimensions.height, minWidth: dimensions.width, display: 'flex', alignItems: 'center', justifyContent: 'center' }
                : {}
            }
          >
            <Page
              key={pageNumber}
              pageNumber={pageNumber}
              scale={scale}
              onLoadSuccess={(page) => {
                const viewport = page.getViewport({ scale });
                setDimensions({ height: viewport.height, width: viewport.width });
              }}
              loading={<div style={{ height: dimensions.height || 'auto', width: dimensions.width || 'auto', background: 'white', text: 'black' }} />}
            />
          </div>
        )}
      </Document>
    </div>
  );
}

export default PdfViewer
