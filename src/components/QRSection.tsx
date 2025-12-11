import { QRCodeSVG } from "qrcode.react";

const QRSection = () => {
  // Google Drive PDF URL
  const pdfUrl = "https://drive.google.com/file/d/1QbSQ8gtWaefsH64mnbzdUUYPqb7HErI1/view";

  return (
    <div className="flex flex-col items-center justify-center gap-8 p-8 lg:p-12">
      {/* QR Code Container */}
      <div className="relative animate-slide-in-left">
        <div className="absolute -inset-4 rounded-2xl bg-primary-foreground/20 blur-xl" />
        <div className="relative rounded-2xl bg-primary-foreground p-6 shadow-2xl animate-pulse-glow">
          <QRCodeSVG
            value={pdfUrl}
            size={200}
            level="H"
            includeMargin={false}
            fgColor="hsl(145, 100%, 25%)"
            bgColor="transparent"
            className="h-48 w-48 lg:h-56 lg:w-56"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
        <h2 className="font-display text-2xl lg:text-3xl tracking-wide text-primary-foreground">
          SCAN TO DOWNLOAD
        </h2>
        <p className="text-primary-foreground/80 text-sm lg:text-base max-w-xs">
          Scan this QR code with your phone to download the National Youth Manifesto 2025
        </p>
      </div>

      {/* Decorative Kenya Stripe */}
      <div className="absolute bottom-0 left-0 right-0 h-2 flex">
        <div className="flex-1 bg-kenya-black" />
        <div className="flex-1 bg-kenya-red" />
        <div className="flex-1 bg-primary" />
      </div>
    </div>
  );
};

export default QRSection;
