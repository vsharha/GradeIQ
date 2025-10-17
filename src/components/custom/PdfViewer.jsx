import { useEffect, useState } from "react";

function PdfViewer({url, setNumPages, pageNumber, setPageNumber}) {
  const [PdfModule, setPdfModule] = useState(null);
  const [isWorkerReady, setIsWorkerReady] = useState(false);

  useEffect(() => {
    import("react-pdf").then((mod) => {
      const { pdfjs } = mod;
      pdfjs.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      setPdfModule(mod);
      setIsWorkerReady(true);
    });
  }, []);

  return (
    <div
      className="overflow-auto h-fit w-full"
    >
      {!PdfModule || !isWorkerReady ?
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
  );
}

export default PdfViewer;