# Spacelab Gulp Project

A modern web development project built with Gulp 4, SCSS, JavaScript, and Web Components.

## 🚀 Features

- **Gulp 4** - Latest version with modern task automation
- **SCSS** - Advanced CSS preprocessing with variables and mixins
- **JavaScript ES6+** - Modern JavaScript with modules and classes
- **Web Components** - Reusable custom elements
- **Live Reload** - Browser-sync for instant development feedback
- **Source Maps** - For debugging SCSS and JavaScript
- **Minification** - Production-ready builds
- **Responsive Design** - Mobile-first approach

## 📁 Project Structure

```
spacelab_test/
├── src/
│   ├── index.html          # Main HTML file
│   ├── scss/
│   │   └── main.scss       # Main SCSS file with all styles
│   ├── js/
│   │   ├── main.js         # Main JavaScript file
│   │   └── components.js   # Web Components
│   └── assets/             # Images, fonts, etc.
├── dist/                   # Built files (generated)
├── gulpfile.js            # Gulp configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🛠️ Setup

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start development server:**

   ```bash
   npm start
   # or
   gulp
   ```

3. **Open your browser:**
   The development server will automatically open at `http://localhost:3000`

## 🎯 Available Commands

| Command         | Description                               |
| --------------- | ----------------------------------------- |
| `npm start`     | Start development server with live reload |
| `npm run dev`   | Same as start (development mode)          |
| `npm run build` | Build for production (minified)           |
| `npm run clean` | Clean the dist folder                     |

## 🔧 Development

### Live Development Mode

The project includes **Browser-sync** for live reloading:

- **Automatic reload** when you save files
- **Cross-device testing** - access from any device on your network
- **Hot reload** for CSS changes (no page refresh needed)

### File Watching

Gulp automatically watches for changes in:

- `src/**/*.html` - HTML files
- `src/scss/**/*.scss` - SCSS files
- `src/js/**/*.js` - JavaScript files
- `src/components/**/*.js` - Web Components
- `src/assets/**/*` - Assets (images, fonts, etc.)

### SCSS Features

- **Variables** - Colors, fonts, spacing, breakpoints
- **Mixins** - Responsive breakpoints, flexbox utilities
- **Nesting** - Organized and readable CSS
- **Autoprefixer** - Automatic vendor prefixes
- **Source maps** - For debugging

### JavaScript Features

- **ES6+ syntax** - Modern JavaScript features
- **Modules** - Organized code structure
- **Web Components** - Custom elements
- **Error handling** - Global error catching
- **Performance monitoring** - Page load timing

### Web Components

The project includes custom web components:

- **`<custom-modal>`** - Reusable modal dialog
- **`<custom-tooltip>`** - Tooltip component
- **`<custom-button>`** - Enhanced button component

## 🏗️ Build Process

### Development Build

```bash
npm start
```

- Compiles SCSS to CSS with source maps
- Processes JavaScript with source maps
- Serves files with live reload
- Watches for file changes

### Production Build

```bash
npm run build
```

- Minifies CSS and JavaScript
- Optimizes HTML
- Removes source maps
- Creates production-ready files in `dist/`

## 📱 Responsive Design

The project uses a mobile-first approach with breakpoints:

- **Mobile**: Default styles
- **Tablet**: `@media (min-width: 768px)`
- **Desktop**: `@media (min-width: 1024px)`
- **Large Desktop**: `@media (min-width: 1280px)`

## 🎨 Customization

### Colors

Edit `src/scss/main.scss` to customize the color scheme:

```scss
$primary-color: #2563eb;
$secondary-color: #64748b;
$accent-color: #f59e0b;
```

### Typography

Customize fonts and sizes:

```scss
$font-family-primary: "Inter", sans-serif;
$font-size-base: 1rem;
```

### Spacing

Adjust spacing scale:

```scss
$spacing-md: 1rem;
$spacing-lg: 1.5rem;
```

## 🔍 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Development Dependencies

- **gulp** - Task runner
- **gulp-sass** - SCSS compilation
- **gulp-autoprefixer** - CSS vendor prefixes
- **gulp-clean-css** - CSS minification
- **gulp-uglify** - JavaScript minification
- **browser-sync** - Live reload server
- **gulp-sourcemaps** - Source map generation

## 🚀 Deployment

After building for production:

```bash
npm run build
```

The `dist/` folder contains all optimized files ready for deployment to any web server.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own work.

## 🆘 Troubleshooting

### Common Issues

**Port 3000 already in use:**

- Change the port in `gulpfile.js` line 175
- Or kill the process using port 3000

**SCSS compilation errors:**

- Check for syntax errors in SCSS files
- Ensure all variables are defined before use

**JavaScript errors:**

- Check browser console for errors
- Verify all dependencies are installed

**Live reload not working:**

- Ensure Browser-sync is running
- Check firewall settings
- Try accessing via `http://localhost:3000`

### Getting Help

If you encounter issues:

1. Check the browser console for errors
2. Verify all dependencies are installed
3. Try running `npm run clean` then `npm start`
4. Check the Gulp output for error messages
