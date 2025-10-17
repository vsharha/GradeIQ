import { Document, Page, pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

function PdfViewer({url, setNumPages, pageNumber, setPageNumber}) {
  return (
    <div
      className="overflow-auto h-fit w-full"
    >
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => {
          setNumPages(numPages);
          setPageNumber((p) => Math.min(Math.max(1, p), numPages));
        }}
        loading={<p>Loading PDF …</p>}
        error={<p>Failed to load PDF.</p>}
        className="min-h-full min-w-full w-fit flex items-center justify-center"
      >
        <Page
          key={pageNumber}
          pageNumber={pageNumber}
          scale={1}
        />
      </Document>
    </div>
  );
}

export default PdfViewer;