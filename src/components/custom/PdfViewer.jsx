// javascript
import { useEffect, useRef, useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function PdfViewer({ url }) {
  const [PdfModule, setPdfModule] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [width, setWidth] = useState(600);
  const containerRef = useRef();

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

  useEffect(() => {
    const updateWidth = () => setWidth(containerRef.current?.offsetWidth || 600);
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!PdfModule) return <p>Loading PDF module…</p>;

  const { Document, Page } = PdfModule;

  const goPrevious = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min(numPages || p, p + 1));

  return (
    <div ref={containerRef}>
      <div className="flex items-center justify-center gap-2 mb-2">
        <Button
          onClick={goPrevious}
          disabled={pageNumber <= 1}
        >
          <ArrowLeft/>
        </Button>

        <span>
          {pageNumber}
          {numPages ? ` / ${numPages}` : ''}
        </span>

        <Button
          onClick={goNext}
          disabled={!numPages || pageNumber >= numPages}
        >
          <ArrowRight/>
        </Button>
      </div>

      <Document
        file={url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber((p) => Math.min(Math.max(1, p), numPages));
        }}
        loading={<p>Loading PDF …</p>}
        error={<p>Failed to load PDF.</p>}
        className="overflow-auto h-fit w-fit rounded-sm"
      >
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          width={Math.floor(width * 0.9)}
        />
      </Document>
    </div>
  );
}
