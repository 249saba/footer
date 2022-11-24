import Circlebutton from "../Circlebutton.js";
import "./index.css";

function App() {
  const footerLinks = [
    [
      { label: "About Us", link: "./Aboutus" },
      { label: "Trust", link: "./Trust" },
      { label: "Safety & Security", link: "./Safetyandsecurity" },
      { label: "Terms of Service", link: "./Termsofservice" },
    ],
    [
      { label: "Desktop App", link: "./Desktop" },
      { label: "Feeback", link: "./Feedbakc" },
      { label: "Help & Support", link: "./Helpandsupport" },
    ],
    [
      { label: "Privacy Policy", link: "./Privacypolicy" },
      { label: "Cookie Policy", link: "./Cookiepolicy" },
      { label: "Community", link: "./Community" },
    ],
    [
      { label: "Upwork Foundation", link: "./Upworkfoundation" },
      { label: "Accessability", link: "./Accessability" },
      { label: "Enterprise Solutions", link: "./Enterprisesolutions" },
    ],
  ];

  return (
    <div>
      <div className="footer">
        {footerLinks.map((links) => (
          <div className="innercontainer">
            {links.map((label) => {
              return <label>{label.label}</label>;
            })}
          </div>
        ))}
      </div>
      <div className="icons">
        <div className="start">
          <label className="follow">Follow Me</label>
          <Circlebutton icon={"fab fa-facebook-f"} />
          <Circlebutton icon={"fab fa-linkedin-in"} />
          <Circlebutton icon={"fab fa-twitter"} />
        </div>
        <div className="end">
          <label className="follow">Github</label>
          <Circlebutton icon={"fab fa-github-alt"} />
        </div>
      </div>
    </div>
  );
}

export default App;
