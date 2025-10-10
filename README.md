# Vaibhav Borse - Portfolio Website

A modern, fully responsive portfolio website built with React.js and Tailwind CSS, showcasing the skills and projects of Vaibhav Borse, a Web Developer & DevOps Engineer.

## 🚀 Features

- **Modern Design**: Clean, professional design with blue-gray and neon green color scheme
- **Fully Responsive**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations and transitions
- **Interactive UI**: Hover effects, animated progress bars, and dynamic content
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Performance Optimized**: Fast loading and smooth scrolling

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Build Tool**: Create React App
- **Deployment**: AWS Amplify / S3 ready

## 📱 Sections

1. **Hero Section**: Animated introduction with dynamic role typing
2. **About**: Professional summary with statistics
3. **Experience**: Timeline-based work experience
4. **Projects**: Featured projects with tech stacks
5. **Skills**: Comprehensive technical skills with progress bars
6. **Certifications**: Professional certifications and achievements
7. **Contact**: Contact form and social links

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/vaibhavpatil7111/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🌐 AWS Deployment

### Option 1: AWS Amplify

1. Install AWS Amplify CLI:
```bash
npm install -g @aws-amplify/cli
```

2. Initialize Amplify:
```bash
amplify init
```

3. Add hosting:
```bash
amplify add hosting
```

4. Deploy:
```bash
amplify publish
```

### Option 2: AWS S3 + CloudFront

1. Build the project:
```bash
npm run build
```

2. Create an S3 bucket and enable static website hosting

3. Upload the `build` folder contents to S3

4. Set up CloudFront distribution for global CDN

5. Configure Route 53 for custom domain (optional)

## 🎨 Customization

### Colors

The color scheme is defined in `tailwind.config.js`:
- Primary: Blue shades (#3b82f6)
- Accent: Green shades (#22c55e)
- Dark: Gray shades

### Content

Update personal information in the respective component files:
- `src/components/Hero.js` - Name and titles
- `src/components/About.js` - Professional summary
- `src/components/Experience.js` - Work experience
- `src/components/Projects.js` - Project details
- `src/components/Skills.js` - Technical skills
- `src/components/Certifications.js` - Certifications
- `src/components/Contact.js` - Contact information

### Resume Download

Update the resume download link in `src/components/Hero.js`:
```javascript
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = '/path/to/your/resume.pdf'; // Update this path
  link.download = 'Vaibhav_Borse_Resume.pdf';
  link.click();
};
```

## 📱 Mobile Optimization

- Mobile-first responsive design
- Touch-friendly navigation
- Optimized images and animations
- Fast loading on mobile networks

## 🔧 Performance Optimization

- Lazy loading of components
- Optimized images
- Minimal bundle size
- Efficient animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/vaibhavpatil7111/portfolio/issues).

## 📞 Contact

**Vaibhav Borse**
- Email: vaibhavborse0019@gmail.com
- Phone: +91 7517632242
- LinkedIn: [linkedin.com/in/vaibhavborse](https://linkedin.com/in/vaibhavborse)
- GitHub: [github.com/vaibhavpatil7111](https://github.com/vaibhavpatil7111)

---

⭐ Star this repo if you found it helpful!