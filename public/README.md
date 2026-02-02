# Public Folder

Store static assets here:

- **Images:** profile.jpg, projects, logos
- **Favicons:** favicon.ico, apple-icon.png
- **Fonts:** custom font files (if not using Google Fonts)
- **Documents:** CV, resume files

## Adding Your Profile Image

1. Save your image as `profile.jpg` in this folder
2. Update image src in Hero and About components:

```jsx
<img src="/profile.jpg" alt="Profile" />
```

## File Size Guidelines

- Profile image: < 500KB (compress before adding)
- Project images: < 300KB each
- Total assets: < 2MB

## Image Format

- JPEG for photos
- PNG for graphics with transparency
- WebP for modern browsers (requires fallback)

## Favicon

Replace default favicon:

1. Create a 32x32 favicon.ico
2. Place in this folder
3. Update in index.html

---

All files in this folder are served at the root `/` path.
