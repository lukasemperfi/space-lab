const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const fileinclude = require("gulp-file-include");
const browserSync = require("browser-sync").create();
const del = require("del");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");

// File paths
const paths = {
  src: {
    html: "src/**/*.html",
    scss: "src/scss/**/*.scss",
    componentScss: "src/components/**/*.scss",
    js: "src/js/**/*.js",
    components: "src/components/**/*.js",
    data: "src/data/**/*.js",
    assets: "src/assets/**/*",
  },
  dist: {
    root: "dist",
    css: "dist/css",
    js: "dist/js",
    assets: "dist/assets",
  },
  watch: {
    html: "src/**/*.html",
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    components: "src/components/**/*.js",
    data: "src/data/**/*.js",
  },
};

// Error handling
const errorHandler = {
  errorHandler: notify.onError({
    title: "Gulp Error",
    message: "<%= error.message %>",
  }),
};

// Clean dist folder
function clean() {
  return del([paths.dist.root]);
}

// Compile SCSS to CSS
function styles() {
  return gulp
    .src([paths.src.scss, paths.src.componentScss])
    .pipe(plumber(errorHandler))
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "expanded",
        includePaths: ["node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream())
    .pipe(
      notify({
        message: "SCSS compiled successfully!",
        onLast: true,
      })
    );
}

// Minify CSS for production
function stylesMin() {
  return gulp
    .src(paths.src.scss)
    .pipe(plumber(errorHandler))
    .pipe(
      sass({
        outputStyle: "compressed",
        includePaths: ["node_modules"],
      }).on("error", sass.logError)
    )
    .pipe(
      autoprefixer({
        cascade: false,
        grid: true,
      })
    )
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(
      notify({
        message: "SCSS minified successfully!",
        onLast: true,
      })
    );
}

// Process JavaScript
function scripts() {
  return gulp
    .src([paths.src.js, paths.src.components, paths.src.data], { base: "src" })
    .pipe(plumber(errorHandler))
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist.root))
    .pipe(browserSync.stream())
    .pipe(
      notify({
        message: "JavaScript processed successfully!",
        onLast: true,
      })
    );
}

// Minify JavaScript for production
function scriptsMin() {
  return gulp
    .src([paths.src.js, paths.src.components, paths.src.data], { base: "src" })
    .pipe(plumber(errorHandler))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.dist.root))
    .pipe(
      notify({
        message: "JavaScript minified successfully!",
        onLast: true,
      })
    );
}

// Process HTML
function html() {
  return gulp
    .src(paths.src.html)
    .pipe(plumber(errorHandler))
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      rename(function (path) {
        // Move all files from pages folder to root
        if (path.dirname === "pages") {
          path.dirname = "";
        }
      })
    )
    .pipe(gulp.dest(paths.dist.root))
    .pipe(browserSync.stream())
    .pipe(
      notify({
        message: "HTML processed successfully!",
        onLast: true,
      })
    );
}

// Minify HTML for production
function htmlMin() {
  return gulp
    .src(paths.src.html)
    .pipe(plumber(errorHandler))
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(
      rename(function (path) {
        // Move all files from pages folder to root
        if (path.dirname === "pages") {
          path.dirname = "";
        }
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        minifyCSS: true,
        minifyJS: true,
      })
    )
    .pipe(gulp.dest(paths.dist.root))
    .pipe(
      notify({
        message: "HTML minified successfully!",
        onLast: true,
      })
    );
}

// Copy assets
function assets() {
  return gulp
    .src(paths.src.assets)
    .pipe(gulp.dest(paths.dist.assets))
    .pipe(
      notify({
        message: "Assets copied successfully!",
        onLast: true,
      })
    );
}

// Browser Sync server
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dist.root,
      middleware: function (req, res, next) {
        // Handle clean URLs
        const cleanUrls = {
          "/token": "/token-page.html",
          "/fund": "/fund-page.html",
          "/marketplace": "/marketplace-page.html",
        };

        if (cleanUrls[req.url]) {
          req.url = cleanUrls[req.url];
        }

        next();
      },
    },
    port: 3000,
    open: true,
    notify: false,
  });
}

// Watch files for changes
function watch() {
  gulp.watch(paths.watch.html, html);
  gulp.watch(paths.watch.scss, styles);
  gulp.watch(paths.watch.js, scripts);
  gulp.watch(paths.watch.components, scripts);
  gulp.watch(paths.watch.data, scripts); // Added watch for data files
  gulp.watch(paths.src.assets, assets);
}

// Development task
const dev = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, assets),
  gulp.parallel(serve, watch)
);

// Build task for production
const build = gulp.series(
  clean,
  gulp.parallel(htmlMin, stylesMin, scriptsMin, assets)
);

// Default task
const start = gulp.series(
  clean,
  gulp.parallel(html, styles, scripts, assets),
  gulp.parallel(serve, watch)
);

// Export tasks
exports.clean = clean;
exports.styles = styles;
exports.stylesMin = stylesMin;
exports.scripts = scripts;
exports.scriptsMin = scriptsMin;
exports.html = html;
exports.htmlMin = htmlMin;
exports.assets = assets;
exports.serve = serve;
exports.watch = watch;
exports.dev = dev;
exports.build = build;
exports.start = start;
exports.default = start;
