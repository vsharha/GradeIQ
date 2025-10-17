import { useState } from "react";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import {Button} from "@/components/ui/button";
import {ArrowLeft, ArrowRight} from "lucide-react";
import PdfViewer from "@/components/custom/PdfViewer";

export default function CustomPdfViewer({ url }) {
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);

  const goPrevious = () => setPageNumber((p) => Math.max(1, p - 1));
  const goNext = () => setPageNumber((p) => Math.min(numPages || p, p + 1));

  return (
    <div className="mb-2 bg-muted rounded-md p-2">

      {/*{!!PdfModule &&*/}
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
      {/*}*/}
      <div className="mt-3 w-full flex justify-center max-h-full">
        <div className="w-fit rounded-sm overflow-hidden">
          <PdfViewer url={url} setNumPages={setNumPages} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
        </div>
      </div>
    </div>
  );
}
