import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import XIcon from "@mui/icons-material/X";

function Footer() {
  return (
    <div className="w-full h-[120px] bg-flatBlack flex flex-col md:flex-row justify-evenly md:justify-between items-center md:p-14">
      <div className="tracking-wide">
        <p className="font-poppins text-flatWhite">
          &copy; filmify by{" "}
          <a
            href="https://github.com/codenant"
            target="_blank"
            className="text-mySlate opacity-35 hover:underline"
          >
            codenant
          </a>
        </p>
      </div>
      <div className="flex flex-row gap-3">
        <a
          href="https://www.figma.com/design/LtoVdVXM090ff4nrOjtj4h/filmify?node-id=0-1&t=W8QHZQiXHq07EtZ0-1"
          target="_blank"
        >
          <svg
            className="social"
            width="100%"
            height="100%"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 1.5H8.5C6.567 1.5 5 3.067 5 5C5 6.933 6.567 8.5 8.5 8.5M12 1.5V8.5M12 1.5H15.5C17.433 1.5 19 3.067 19 5C19 6.933 17.433 8.5 15.5 8.5M12 8.5H8.5M12 8.5V15.5M12 8.5H15.5M8.5 8.5C6.567 8.5 5 10.067 5 12C5 13.933 6.567 15.5 8.5 15.5M12 15.5H8.5M12 15.5V19C12 20.933 10.433 22.5 8.5 22.5C6.567 22.5 5 20.933 5 19C5 17.067 6.567 15.5 8.5 15.5M15.5 8.5C17.433 8.5 19 10.067 19 12C19 13.933 17.433 15.5 15.5 15.5C13.567 15.5 12 13.933 12 12C12 10.067 13.567 8.5 15.5 8.5Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <GitHubIcon className="social" />
        <XIcon className="social" />
        <FacebookOutlinedIcon className="social" />
      </div>
    </div>
  );
}

export default Footer;
