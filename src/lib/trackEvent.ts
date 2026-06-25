export const trackEvent = async (action: string, details?: any) => {
  try {
    const response = await fetch("/api/track", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ action, details }),
    });
    
    if (!response.ok) {
      console.warn("Tracking event failed (ensure MongoDB URI is set in .env.local)");
    }
  } catch (error) {
    console.error("Tracking request failed:", error);
  }
};
