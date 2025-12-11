import { Helmet } from "react-helmet-async";
import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const GOOGLE_DRIVE_PDF_URL = "https://drive.google.com/file/d/1QbSQ8gtWaefsH64mnbzdUUYPqb7HErI1/view";
const GOOGLE_DRIVE_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1QbSQ8gtWaefsH64mnbzdUUYPqb7HErI1";

const DownloadPage = () => {
  const handleDownload = () => {
    window.open(GOOGLE_DRIVE_DOWNLOAD_URL, "_blank");
  };

  const handleOpenPDF = () => {
    window.open(GOOGLE_DRIVE_PDF_URL, "_blank");
  };

  return (
    <>
      <Helmet>
        <title>Download - National Youth Manifesto 2025</title>
        <meta
          name="description"
          content="View and download your copy of the National Youth Manifesto 2025 - 1st Edition."
        />
      </Helmet>

      <main className="flex min-h-screen flex-col bg-kenya-gradient">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-background/80 backdrop-blur-sm border-b border-border">
          <a href="/" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
            <span className="font-display text-lg tracking-wide">← MANIFESTO YETU</span>
          </a>
          <Button onClick={handleDownload} size="sm" className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </header>

        {/* PDF Viewer */}
        <div className="flex-1 flex flex-col">
          {/* Mobile: Show buttons and info */}
          <div className="md:hidden p-6 space-y-6 animate-fade-in">
            <div className="text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="font-display text-2xl tracking-wide text-foreground">
                NATIONAL YOUTH MANIFESTO 2025
              </h1>
              <p className="text-muted-foreground text-sm">
                1st Edition - Your voice, your future
              </p>
            </div>

            <div className="space-y-3">
              <Button onClick={handleOpenPDF} className="w-full gap-2" size="lg">
                <ExternalLink className="h-5 w-5" />
                Open PDF
              </Button>
              <Button onClick={handleDownload} variant="outline" className="w-full gap-2" size="lg">
                <Download className="h-5 w-5" />
                Download PDF
              </Button>
            </div>

            {/* Kenya Stripe */}
            <div className="flex h-1 overflow-hidden rounded-full">
              <div className="flex-1 bg-kenya-black" />
              <div className="flex-1 bg-kenya-red" />
              <div className="flex-1 bg-primary" />
            </div>
          </div>

          {/* Desktop: Embed Google Drive PDF */}
          <div className="hidden md:flex flex-1">
            <iframe
              src="https://drive.google.com/file/d/1QbSQ8gtWaefsH64mnbzdUUYPqb7HErI1/preview"
              className="w-full h-full min-h-[calc(100vh-65px)]"
              title="National Youth Manifesto 2025"
              allow="autoplay"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default DownloadPage;
