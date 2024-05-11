import React, { useRef, useEffect } from 'react';

function Canvas({ selections }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 512;  // Adjust width as necessary
    canvas.height = 512; // Adjust height as necessary

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

    selections.forEach(selection => {
      const img = new Image();
      img.src = selection.path; // Assuming 'path' is the image path
      img.onload = () => {
        ctx.drawImage(img, 0, 0, 512, 512); // Draw image to canvas
      };
    });
  }, [selections]);

  return <canvas ref={canvasRef} width={512} height={512} />;
}

export default Canvas;
