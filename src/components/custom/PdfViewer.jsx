"use client";

import { useState, useEffect, useMemo } from "react";

export default function PdfViewer({ base64String }) {
  const [components, setComponents] = useState(null);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const mod = await import("react-pdf");
      mod.pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${mod.pdfjs.version}/pdf.worker.min.js`;
      if (mounted) setComponents({ Document: mod.Document, Page: mod.Page });
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const pdfData = useMemo(() => {
    if (!base64String) return null;
    const clean = base64String.replace(/^data:application\/pdf;base64,/, "");
    try {
      return Uint8Array.from(atob(clean), (c) => c.charCodeAt(0));
    } catch {
      return null;
    }
  }, [base64String]);

  if (!components) return <div>Loading PDF viewer...</div>;
  if (!pdfData) return <div>No PDF data</div>;

  const { Document, Page } = components;
  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <div className="flex flex-col items-center">
      <Document file={{ data: pdfData }} onLoadSuccess={onLoadSuccess}>
        {numPages &&
          Array.from({ length: numPages }, (_, i) => (
            <Page key={`page_${i + 1}`} pageNumber={i + 1} width={600} />
          ))}
      </Document>
    </div>
  );
}
