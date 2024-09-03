export const handleError = (error) => {
    if (error.response) {
      // Server responded with a status outside the range of 2xx
      console.error("Server responded with an error:", error.response.data);
      
      if (error.response.status === 400) {
        return error.response.data.message || "Invalid credentials";
      } else if (error.response.status === 500) {
        return "Server error. Please try again later.";
      } else {
        return "An error occurred. Please try again.";
      }
      
    } else if (error.request) {
      // No response was received from the server
      console.error("No response received:", error.request);
      return "No response from server. Please check your network and try again.";
      
    } else {
      // Error in setting up the request
      console.error("Error setting up the request:", error.message);
      return "An error occurred. Please try again.";
    }
  };
  