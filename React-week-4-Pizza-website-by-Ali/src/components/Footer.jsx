const Footer = () => {
  return (
    <footer className="footer footer-center bg-red-400 text-white p-4">
      <aside>
        <p>© {new Date().getFullYear()} - Pizza Bay</p>
      </aside>
    </footer>
  );
};
export default Footer;