# Website Updates - Gallery & Code of Conduct

## New Pages Added

### 1. Gallery Page (`gallery.html`)
**Purpose**: Showcase event photos and activities of the UTAMU Innovation Hub

**Features**:
- **Filter System**: Filter photos by category (All, Workshops, Hackathons, Meetups, Community)
- **Lightbox Viewer**: Click any image to view it in full-screen mode with navigation
- **Responsive Grid**: Masonry-style layout that adapts to different screen sizes
- **Smooth Animations**: Elements fade in as you scroll down the page
- **Keyboard Controls**: Use arrow keys to navigate through images in lightbox mode

**Files**:
- `gallery.html` - Main HTML structure
- `styles/gallery.css` - Complete styling with modern design
- `styles/gallery.js` - Interactive functionality (filtering, lightbox, animations)

**How to Add More Photos**:
1. Add your image to the `images/` folder
2. In `gallery.html`, add a new gallery item:
```html
<div class="gallery-item" data-category="workshops">
    <img src="images/your-image.jpg" alt="Description">
    <div class="gallery-overlay">
        <h4>Event Title</h4>
        <p>Event Description</p>
        <i class="fas fa-search-plus"></i>
    </div>
</div>
```
3. Update `data-category` to match one of: `workshops`, `hackathons`, `meetups`, or `community`

---

### 2. Code of Conduct Page (`code-of-conduct.html`)
**Purpose**: Display community guidelines and conduct policies for the Innovation Hub

**Features**:
- **Table of Contents**: Quick navigation to different sections
- **6 Main Sections**:
  1. **Our Commitment**: Mission statement and values
  2. **Expected Behavior**: 4 key behaviors (Respect, Inclusion, Learning, Safety)
  3. **Unacceptable Behavior**: 4 violation categories clearly defined
  4. **Reporting**: Multiple contact methods including Community Lead info
  5. **Response Process**: 3-step timeline showing how reports are handled
  6. **Commitment to Improvement**: Ongoing policy refinement approach

- **Visual Elements**:
  - Animated cards that appear on scroll
  - Color-coded sections for easy reading
  - Icons for visual clarity
  - Timeline visualization for response process

- **Contact Methods**:
  - Community Lead: Godwin Ofwono
  - Email: innovation@utamu.ac.ug
  - WhatsApp: +256 704 376 894
  - Anonymous reporting form

**Files**:
- `code-of-conduct.html` - Main HTML structure
- `styles/code-of-conduct.css` - Complete styling with modern design system
- JavaScript embedded in HTML for smooth scrolling and animations

**Updating Content**:
The Code of Conduct content can be edited directly in `code-of-conduct.html`. Each section has clear HTML structure with semantic classes.

---

## Navigation Updates

All pages now include links to both Gallery and Code of Conduct in:
- **Top Navigation Bar**: Consistent across all pages
- **Footer Quick Links**: (where applicable)

Updated pages:
- ✅ `index.html`
- ✅ `about.html`
- ✅ `projects.html`
- ✅ `gallery.html`
- ✅ `code-of-conduct.html`
- ✅ `contact.html`

---

## Design Consistency

Both new pages follow the existing design system:
- **Color Palette**: Indigo (#4338ca), Cyan (#06b6d4), Amber (#f59e0b)
- **Fonts**: Inter (body text), Poppins (headings)
- **Background**: `Guys.jpeg` with gradient overlay on hero sections
- **Animations**: Floating shapes, fade-in effects, hover transitions
- **Responsive**: Mobile-friendly with hamburger menu on small screens

---

## Testing Checklist

✅ Gallery page loads correctly
✅ Filter buttons work (try clicking different categories)
✅ Lightbox opens when clicking images
✅ Lightbox navigation works (prev/next buttons, arrow keys)
✅ Code of Conduct page displays all 6 sections
✅ Table of Contents links scroll to correct sections
✅ All navigation links work across all pages
✅ Footer links are consistent
✅ Mobile responsive design works
✅ Animations trigger on scroll

---

## Browser Compatibility

Tested features:
- CSS Grid and Flexbox layouts
- CSS Custom Properties (variables)
- Intersection Observer API
- Backdrop filters
- CSS animations and transitions

**Recommended Browsers**:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

## Future Enhancements

**Gallery Page**:
- Add pagination for large photo collections
- Implement upload functionality for authorized users
- Add photo metadata (date, photographer, event name)
- Category management system

**Code of Conduct Page**:
- Add FAQ section
- Include real incident case studies (anonymized)
- Translation into local languages
- Downloadable PDF version

---

## Contact for Support

For technical issues or questions about these pages:
- Community Lead: Godwin Ofwono
- Email: innovation@utamu.ac.ug
- WhatsApp: +256 704 376 894
