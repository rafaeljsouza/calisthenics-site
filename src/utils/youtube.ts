export function getYoutubeEmbedUrl(url: string): string {
    let videoId = '';
    let startTime = 0;
  
    // Extrair ID do vídeo
    if (url.includes('youtu.be')) {
      // Format: https://youtu.be/VIDEO_ID
      videoId = url.split('youtu.be/')[1].split('?')[0];
    } else if (url.includes('youtube.com')) {
      // Format: https://www.youtube.com/watch?v=VIDEO_ID
      const urlParams = new URLSearchParams(url.split('?')[1]);
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtube.com/shorts')) {
      // Format: https://www.youtube.com/shorts/VIDEO_ID
      videoId = url.split('shorts/')[1].split('?')[0];
    }
  
    // Extrair tempo inicial
    if (url.includes('t=')) {
      const timeMatch = url.match(/t=(\d+)/);
      if (timeMatch) {
        startTime = parseInt(timeMatch[1]);
      }
    }
    if (url.includes('start=')) {
      const timeMatch = url.match(/start=(\d+)/);
      if (timeMatch) {
        startTime = parseInt(timeMatch[1]);
      }
    }
  
    // Construir URL de embed
    return `https://www.youtube.com/embed/${videoId}?start=${startTime}&rel=0&modestbranding=1`;
  }