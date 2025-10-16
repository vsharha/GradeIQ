import { useEffect, useRef, useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';


export default function PdfViewer({ url }) {
  const [PdfModule, setPdfModule] = useState(null);

  useEffect(() => {
    import("react-pdf").then((mod) => {
      const { pdfjs } = mod;
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      setPdfModule(mod);
    });
  }, []);

  const [width, setWidth] = useState(0);
  const containerRef = useRef();

  useEffect(() => {
    const updateWidth = () => setWidth(containerRef.current?.offsetWidth || 600);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);


  if (!PdfModule) {
    return <p>Loading PDF module…</p>;
  }

  const { Document, Page } = PdfModule;

  return (
    <Document
      file={url}
      onLoadSuccess={({ numPages }) => {
      }}
      loading={<p>Loading PDF …</p>}
      error={<p>Failed to load PDF.</p>}
      className="overflow-auto h-fit w-fit rounded-sm"
      ref={containerRef}
    >
      <Page pageNumber={1} width={width*0.9} scale={1} />
    </Document>
  );
}
