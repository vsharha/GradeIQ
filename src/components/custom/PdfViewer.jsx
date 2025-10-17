import { useEffect, useRef, useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";

export default function PdfViewer({ url }) {
  const [PdfModule, setPdfModule] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [height, setHeight] = useState(600);
  const containerRef = useRef(null);

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
    const updateHeight = () => {
      const h = containerRef.current?.clientHeight ?? containerRef.current?.offsetHeight ?? 600;
      setHeight(h || 600);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const goPrevious = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min(numPages || p, p + 1));

  return (
    <div className="mb-2 bg-muted rounded-md p-2">

      {!!PdfModule &&
        <div className="flex items-center justify-center gap-2">
          <Button onClick={goPrevious} disabled={pageNumber <= 1} variant="ghost">
            <ArrowLeft />
          </Button>

          <span>
            {pageNumber}
            {numPages ? ` / ${numPages}` : ""}
          </span>

          <Button onClick={goNext} disabled={!numPages || pageNumber >= numPages} variant="ghost">
            <ArrowRight />
          </Button>
        </div>
      }
      <div ref={containerRef} className="mt-3 w-full flex justify-center max-h-full">
        <div className="w-fit rounded-sm overflow-hidden">
          <div
            className="overflow-auto h-fit w-full"
            // style={{ maxHeight: `${height}px` }}
          >
            {!PdfModule?
              <p>Loading PDF module...</p>
              :
              <PdfModule.Document
                file={url}
                onLoadSuccess={({ numPages }) => {
                  setNumPages(numPages);
                  setPageNumber((p) => Math.min(Math.max(1, p), numPages));
                }}
                loading={<p>Loading PDF …</p>}
                error={<p>Failed to load PDF.</p>}
                className="min-h-full min-w-full w-fit flex items-center justify-center"
              >
                <PdfModule.Page
                  key={pageNumber}
                  pageNumber={pageNumber}
                  scale={1}
                />
              </PdfModule.Document>
            }
          </div>
        </div>
      </div>
    </div>
  );
}
