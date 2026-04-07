import LinkedInIcon from "@mui/icons-material/LinkedIn";
import CopyrightIcon from "@mui/icons-material/Copyright";

function Footer() {
  return (
    <div className="mb-3 flex items-center justify-center gap-4">
      <div className="flex gap-1 items-center">
        <div className="flex items-center justify-center">
          <p className="font-semibold text-sm">Linkedin</p>
          <LinkedInIcon style={{ color: "#000000" }} />
        </div>
        <CopyrightIcon style={{ color: "#000000", fontSize: 15 }} />
        <p className="text-sm text-neutral-600">2025</p>
      </div>
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        User Agreement
      </a>
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        Privacy Policy
      </a>{" "}
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        Community Guidelines
      </a>{" "}
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        Cookie Policy
      </a>{" "}
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        Copyright Policy
      </a>{" "}
      <a
        href="#"
        className="text-xs font-semibold text-neutral-600 hover:underline"
      >
        Send Feedback
      </a>
    </div>
  );
}

export default Footer;
