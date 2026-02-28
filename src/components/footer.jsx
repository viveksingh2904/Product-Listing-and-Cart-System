import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Created by Vivek Singh</h3>

        <div className="social-icons">
          <a
            href="https://github.com/viveksingh2904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/viveksingh2904"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} All rights reserved by Vivek Singh
        </p>
      </div>
    </footer>
  );
}
