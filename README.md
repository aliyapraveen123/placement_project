A clean, responsive, and pixel-perfect implementation of a promotional banner, an interactive carousel, and a dynamic product card grid based on design specifications.

🚀 Features
Interactive Carousel: Smooth text switching and dynamic pagination dot updates controlled via previous/next arrows or direct dot clicks.

Responsive Product Grid: A flexible 4-column card layout built with CSS Grid that gracefully scales down to 2-columns on tablets and a single 1-column layout on mobile devices.

Modern CSS Architecture: Utilizes semantic HTML5 markup, CSS variables/reset rules, aspect-ratio controls, and sleek linear gradients for enhanced card readability.

Vanilla JavaScript: Lightweight, zero-dependency script handling carousel state management and DOM manipulation.

🛠️ Tech Stack
HTML5: Semantic markup structure (<main>, <section>, <article>, etc.)

CSS3: Flexbox, CSS Grid, Media Queries, and Aspect Ratio scaling.

JavaScript (ES6+): Vanilla DOM Event Listeners and State Manipulation.

📂 Project Structure
Plaintext


├── index.html     # Semantic structure of the layout
├── style.css      # Core styles, layouts, grid configurations, and media queries
├── script.js      # Carousel logic, dot pagination, and state handlers
└── README.md      # Project documentation
⚙️ Setup and Installation
Since this project relies completely on vanilla technologies, it does not require an installation or build process.

Clone or Download this repository to your local machine.

Open the directory and locate index.html.

Run the project:

Double-click index.html to open it directly in any modern browser.

Alternatively (Recommended): Use an extension like Live Server in VS Code to run a local development environment.

📝 Code Optimization Notes
Responsive Layouts: The cards are constrained via aspect-ratio: 462 / 710 to preserve layout integrity regardless of viewport width shifts.

Typography: The font stack leverages native system UI fonts (-apple-system, BlinkMacSystemFont, Segoe UI) for an optimized, fast-loading, and native-feeling text presentation.
