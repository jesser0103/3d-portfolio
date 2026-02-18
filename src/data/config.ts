const config = {
  title: "Jasser Souissi | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Jasser, a full-stack developer and creative technologist specializing in interactive web experiences, 3D animations, and innovative projects. Discover my latest work, including Coding Ducks, The Booking Desk, Ghostchat, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Jasser, a full-stack developer creating interactive web experiences and innovative projects.",
  },
  keywords: [
    "Jasser",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Coding Ducks",
    "The Booking Desk",
    "Ghostchat",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Jasser Souissi",
  email: "jasser.souissi.741.@gmail.com",
  site: "https://jassersouissi.com",

  // for github stars button
  githubUsername: "jasser-souissi",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/jassersouissi",
    linkedin: "https://www.linkedin.com/in/jasser-souissi/",
    instagram: "https://www.instagram.com/jassersouissi",
    facebook: "https://www.facebook.com/jassersouissi/",
    github: "https://github.com/jasser-souissi",
  },
};
export { config };
