# Althea M. Rao Portfolio

A minimalist portfolio website built with plain HTML/CSS for GitHub Pages.

## Quick Start

1. **Test Locally**: Open `index.html` in your browser to preview the site
2. **Add Your Images**: Place images in the `assets/images/` folder
3. **Edit Content**: Update the HTML files with your actual content
4. **Deploy**: Push to GitHub to make it live at `altheamrao.github.io`

## File Structure

```
altheamrao.github.io/
├── index.html                  ← Homepage with project grid
├── bio.html                    ← Bio page (with headshot)
├── cv.html                     ← CV page
├── artist-statement.html       ← Artist statement
├── stss.html                   ← STSS page
├── lor.html                    ← Letter of Recommendation page
├── academic-job-market.html    ← Job Market Guide
├── css/
│   └── style.css               ← All styling (colors, fonts, layout)
├── js/
│   └── nav.js                  ← Navigation (EDIT THIS to change nav)
├── assets/
│   └── images/
│       ├── headshot.jpg        ← Bio page photo
│       ├── thumbnails/         ← Homepage grid thumbnails
│       │   ├── soft-trigger.jpg
│       │   └── ...
│       └── projects/           ← Project detail images
│           ├── soft-trigger/
│           ├── commit-to-memory/
│           └── ...
├── projects/
│   ├── project-template.html   ← Template for new projects
│   ├── soft-trigger.html
│   └── ...
└── README.md
```

## Modular Navigation

Navigation is defined once in `js/nav.js` and loads on all pages automatically.

### To edit the navigation:

Open `js/nav.js` and edit the `navTemplate` string at the top of the file. Changes will apply to all pages.

### Navigation sections:

- **Projects** (first 10 visible, rest hidden behind "More" toggle)
- **Info** (Bio, Artist Statement, CV visible; STSS, LOR, Job Market Guide behind "More" toggle)

### To add a new project to navigation:

1. Open `js/nav.js`
2. Add a new `<li>` in the appropriate section (visible or "more")
3. Save the file

## Adding a New Project

### 1. Create the project page

Copy `projects/project-template.html` and rename it:
```
projects/my-new-project.html
```

Edit the file:
- Update the `<title>` tag
- Replace placeholder text with your content
- Add images to the gallery section

### 2. Create image folder

```
assets/images/projects/my-new-project/
```

Add your project images (name them `01.jpg`, `02.jpg`, etc. or use descriptive names).

### 3. Add a thumbnail

Save a thumbnail image to:
```
assets/images/thumbnails/my-new-project.jpg
```
Recommended size: 400-600px wide

### 4. Add to homepage

Open `index.html` and add a new project item (copy an existing one):
```html
<article class="project-item">
    <a href="projects/my-new-project.html" class="project-link">
        <div class="project-thumbnail">
            <img src="assets/images/thumbnails/my-new-project.jpg"
                 alt="My New Project"
                 loading="lazy">
        </div>
        <h3 class="project-title">My New Project <span class="project-year">2025</span></h3>
    </a>
</article>
```

### 5. Add to navigation

Open `js/nav.js` and add to the project list:
```html
<li><a href="projects/my-new-project.html">My New Project</a></li>
```

## Image Organization

| Type | Location | Naming | Size |
|------|----------|--------|------|
| Headshot | `assets/images/headshot.jpg` | Single file | < 500KB |
| Thumbnails | `assets/images/thumbnails/` | `project-slug.jpg` | 400-600px wide |
| Project images | `assets/images/projects/[slug]/` | `01.jpg`, `02.jpg` or descriptive | 1200-1920px wide |

## Text Styling Classes

Use these CSS classes to style text consistently across project pages:

### Work Titles (italicized)
```html
<em class="work-title">The New York Earth Room</em>
```

### Film/Production Credits
```html
<ul class="credits-list">
    <li><span class="credit-role">Director:</span> Name Here</li>
    <li><span class="credit-role">Producer:</span> Name Here</li>
    <li><span class="credit-role">Cast:</span> Actor 1, Actor 2</li>
</ul>
```

### Artist/Performer Credits
```html
<ul class="artist-credits">
    <li>Performer Name <span class="artist-role">as Character</span></li>
    <li>Musician Name <span class="artist-role">– Instrument</span></li>
</ul>
```

### Screening/Exhibition Lists
```html
<ul class="screening-list">
    <li><span class="screening-year">2024</span> Festival Name, City, State</li>
    <li><span class="screening-year">2023</span> Another Festival, City</li>
</ul>
```

## Customizing Colors

All colors are defined in `css/style.css` using CSS variables:

```css
:root {
    --bg-color: #fff9f5;      /* Warm white background */
    --text-color: #1a1a1a;    /* Main text color */
    --text-muted: #4a4a4a;    /* Secondary text */
    --text-light: #777777;    /* Light text */
}
```

Change these values to update colors across the entire site.

## Embedding Content

### Heyzine Flipbook

```html
<section class="project-embed">
    <iframe allowfullscreen="allowfullscreen" scrolling="no"
            src="https://heyzine.com/flip-book/YOUR-ID.html"
            style="border: 1px solid lightgray; width: 100%; height: 600px;"
            sandbox="allow-same-origin allow-scripts allow-pointer-lock allow-forms">
    </iframe>
</section>
```

### Vimeo/YouTube

```html
<section class="project-embed">
    <iframe src="https://player.vimeo.com/video/YOUR-ID"
            width="100%" height="400" frameborder="0"
            allow="autoplay; fullscreen" allowfullscreen>
    </iframe>
</section>
```

## Lightbox (Image Viewer)

Images with the `glightbox` class open in a full-screen overlay when clicked:

```html
<a href="assets/images/projects/my-project/01.jpg"
   class="glightbox" data-gallery="my-project">
    <img src="assets/images/projects/my-project/01.jpg"
         alt="Description" loading="lazy">
</a>
```

The `data-gallery` attribute groups images for navigation.

## Deploying to GitHub Pages

### First Time Setup

1. Create a GitHub account at github.com
2. Create a new repository named `altheamrao.github.io`
3. Upload all files from this folder to the repository
4. Go to Settings → Pages → Enable GitHub Pages from main branch
5. Your site will be live at `https://altheamrao.github.io`

### Updating the Site

After making changes locally:
1. Go to your repository on github.com
2. Click "Add file" → "Upload files"
3. Drag your updated files
4. Click "Commit changes"
5. Changes go live within a few minutes

### Updating via Command Line

If you prefer using the terminal (faster for frequent updates):

```bash
# Navigate to your project folder
cd ~/altheamrao.github.io

# Stage all changes
git add .

# Create a commit with a descriptive message
git commit -m "Update project description"

# Push to GitHub
git push
```

Changes typically go live within 1-2 minutes after pushing.

### GitHub CLI Authentication

If you get authentication errors when pushing, you may need to re-authenticate:

```bash
# Login to GitHub CLI
gh auth login

# Follow the prompts:
# 1. Choose "GitHub.com"
# 2. Choose "HTTPS"
# 3. Choose "Login with a web browser"
# 4. Copy the one-time code and paste it in your browser
```

### Video Hosting

Videos for this portfolio are hosted on **Vimeo**, not stored locally in the repository. This keeps the repository size manageable and provides better video playback performance.

To embed a Vimeo video, use the embed code from Vimeo's share options and place it in a `<section class="project-embed">` container.

## Welcome Popup

A welcome popup appears once when visitors first land on the homepage. After closing, it won't appear again (uses browser localStorage).

### To edit the popup content:

Open `index.html` and find the section marked with `<!-- POPUP CONTENT -->`:

```html
<div class="welcome-popup-content">
    <!-- POPUP CONTENT: Edit the text below to customize your welcome message -->
    <p>
        Your welcome message here...
    </p>
    <!-- END POPUP CONTENT -->
</div>
```

### To reset the popup for testing:

Open your browser's Developer Tools (F12), go to Application → Local Storage, and delete the `welcomePopupShown` key.

### To disable the popup entirely:

Remove or comment out the entire `<!-- Welcome Popup -->` section in `index.html`.

## Contact Email

The contact email in the sidebar is obfuscated to prevent spam bots from easily harvesting it.

### To change the email address:

Open `js/nav.js` and find this line in the `navTemplate`:

```html
<a href="#" class="social-link contact-link" data-u="althea.rao" data-d="gmail.com" title="Email">
```

Change the values:
- `data-u` = the part before the @ (e.g., "althea.rao")
- `data-d` = the domain (e.g., "gmail.com")

The JavaScript will combine these at runtime: `data-u` + `@` + `data-d`

## Browser Support

Works in all modern browsers:
- Chrome, Firefox, Safari, Edge
- Mobile Safari and Chrome

## Credits

- Font: [Inter](https://fonts.google.com/specimen/Inter) by Rasmus Andersson
- Lightbox: [GLightbox](https://biati-digital.github.io/glightbox/)
