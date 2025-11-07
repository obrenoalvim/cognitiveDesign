'use client';

import { useEffect, useRef } from 'react';

interface DesignPreviewProps {
  htmlCode: string;
  cssCode: string;
}

export default function DesignPreview({ htmlCode, cssCode }: DesignPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const document = iframe.contentDocument;

      if (document) {
        document.open();
        document.write(`
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                * {
                  margin: 0;
                  padding: 0;
                  box-sizing: border-box;
                }
                body {
                  font-family: system-ui, -apple-system, sans-serif;
                  padding: 2rem;
                  background: #f8fafc;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                ${cssCode}
              </style>
            </head>
            <body>
              ${htmlCode}
            </body>
          </html>
        `);
        document.close();
      }
    }
  }, [htmlCode, cssCode]);

  return (
    <div className="w-full rounded-lg border bg-slate-50 overflow-hidden">
      <iframe
        ref={iframeRef}
        className="w-full h-[600px] border-0"
        title="Design Preview"
      />
    </div>
  );
}
