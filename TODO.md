# TODO List for Fixing Background Video Overlap

- [x] Add z-0 class to the background div in src/components/Hero.tsx to ensure it stays below the content
- [x] Change the content div to absolute positioning with z-10 to ensure it overlays the background properly
- [x] Add semi-transparent background to the content div to ensure text visibility against the animated background
- [ ] Test the change by running the development server and checking if the content remains visible above the background
