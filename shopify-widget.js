// Set the Intercom URL
window.shopicomUrl = "https://webhook.site";

// Main application function
function myAppJavaScript() {
    // Fetch and inject the Intercom widget
    fetch("/apps/web2chat-proxy")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const parsedHtml = parser.parseFromString(html, "text/html");
            const intercomWidgetContent = parsedHtml.querySelector("#web2chat-widget").textContent;
            
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.id = "#web2chat-widget";
            script.textContent = intercomWidgetContent;
            
            document.body.appendChild(script);
        })
        .catch(error => console.error('Error loading web2chat widget:', error));
}

// Run the main function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', myAppJavaScript);
