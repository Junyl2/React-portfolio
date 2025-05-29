import { useEffect, useState } from 'react';

export function usePageReady(imageUrls = []) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let loaded = 0;

    const handleLoad = () => {
      loaded++;
      if (loaded === imageUrls.length) {
        setReady(true);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = handleLoad;
      img.onerror = handleLoad;
      img.src = url;
    });

    if (imageUrls.length === 0) setReady(true);
  }, [imageUrls]);

  return ready;
}
