"use client"

import { Document, Page, pdfjs } from "react-pdf";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

function PdfViewer({url, setNumPages, pageNumber, setPageNumber}) {
  const [width, setWidth] = useState(100);
  const [height, setHeight] = useState(200);

  const scale = 1

  return (
    <div
      className="overflow-auto w-full"
    >
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber((p) => Math.min(Math.max(1, p), numPages));
        }}
        loading={<p>Loading PDF …</p>}
        error={<p>Failed to load PDF.</p>}
        className="h-fit w-fit bg-white text-black"
        style={{ height, width }}
      >
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          scale={scale}
          onLoadSuccess={(page) => {
            const viewport = page.getViewport({ scale });
            setHeight(viewport.height);
            setWidth(viewport.width)
          }}
        />
      </Document>
    </div>
  );
}

export default PdfViewer;