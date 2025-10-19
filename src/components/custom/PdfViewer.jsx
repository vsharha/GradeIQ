"use client"

import { Document, Page, pdfjs } from "react-pdf";
import { useState, useEffect, useRef } from "react";

try {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
} catch (error) {
  console.error("Failed to initialize PDF worker:", error);
}

function PdfViewer({url, setNumPages, pageNumber, setPageNumber}) {
  const [dimensions, setDimensions] = useState({ width: null, height: null });
  const [documentLoaded, setDocumentLoaded] = useState(false);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    setDocumentLoaded(false);
    setDimensions({ width: null, height: null });

    return () => {
      mountedRef.current = false;
    };
  }, [url]);

  if(!url) {
    return <div><p>Failed to load PDF file.</p></div>;
  }

  const scale = 1

  return (
    <div
      style={{overflow:'auto', width:'full'}}
    >
      <Document
        key={url}
        file={url}
        onLoadSuccess={({ numPages }) => {
          if (mountedRef.current) {
            setNumPages(numPages);
            setPageNumber((p) => Math.min(Math.max(1, p), numPages));
            setDocumentLoaded(true);
          }
        }}
        onLoadError={(error) => {
          console.error("PDF load error:", error);
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
              onLoadError={(error) => {
                console.error("PDF Page load error:", error);
              }}
              onLoadSuccess={(page) => {
                if (mountedRef.current) {
                  const viewport = page.getViewport({ scale });
                  setDimensions({ height: viewport.height, width: viewport.width });
                }
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
