import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Download, CheckCircle, FileText } from "lucide-react";

const DownloadPage = () => {
  const [downloadStatus, setDownloadStatus] = useState<"pending" | "downloading" | "complete">("pending");

  useEffect(() => {
    // Small delay to show the UI before triggering download
    const timer = setTimeout(() => {
      setDownloadStatus("downloading");
      
      const link = document.createElement("a");
      link.href = "/docs/manifesto.pdf";
      link.download = "National-Youth-Manifesto-2025.pdf";
      link.click();

      // Mark as complete after a brief moment
      setTimeout(() => {
        setDownloadStatus("complete");
      }, 1500);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Download - National Youth Manifesto 2025</title>
        <meta
          name="description"
          content="Download your copy of the National Youth Manifesto 2025 - 1st Edition."
        />
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-kenya-gradient p-6">
        <div className="w-full max-w-md animate-fade-in">
          <div className="rounded-2xl bg-primary-foreground p-8 shadow-2xl text-center space-y-6">
            {/* Icon */}
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              {downloadStatus === "complete" ? (
                <CheckCircle className="h-10 w-10 text-primary animate-fade-in" />
              ) : downloadStatus === "downloading" ? (
                <Download className="h-10 w-10 text-primary animate-bounce" />
              ) : (
                <FileText className="h-10 w-10 text-primary" />
              )}
            </div>

            {/* Title */}
            <h1 className="font-display text-3xl tracking-wide text-foreground">
              {downloadStatus === "complete"
                ? "DOWNLOAD COMPLETE"
                : downloadStatus === "downloading"
                ? "DOWNLOADING..."
                : "PREPARING DOWNLOAD"}
            </h1>

            {/* Description */}
            <p className="text-muted-foreground">
              {downloadStatus === "complete"
                ? "Your National Youth Manifesto 2025 has been downloaded successfully."
                : "Your download will begin automatically. Please wait..."}
            </p>

            {/* Document Info */}
            <div className="rounded-lg border border-border bg-muted/50 p-4 text-left">
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-secondary" />
                <div>
                  <p className="font-medium text-foreground">National-Youth-Manifesto-2025.pdf</p>
                  <p className="text-sm text-muted-foreground">1st Edition</p>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <a
              href="/"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              ← Back to Home
            </a>

            {/* Kenya Stripe */}
            <div className="flex h-1 overflow-hidden rounded-full mt-6">
              <div className="flex-1 bg-kenya-black" />
              <div className="flex-1 bg-kenya-red" />
              <div className="flex-1 bg-primary" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DownloadPage;
