import React from "react";
import { Typography } from "@material-tailwind/react";
import footerBg from "../../assets/FooterImage2.jpeg";
import logo from "../../assets/Planty'sLogo.png";

const LINKS = [
  {
    title: "",
    items: ["Plants", "Categories", "Best Sellers", "About", "Contact Us"],
  },
  {
    title: "",
    items: [
      <Typography
        as="a"
        href="#"
        className="flex gap-4 opacity-80 transition-opacity hover:opacity-100"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12,2a8.009,8.009,0,0,0-8,8c0,3.255,2.363,5.958,4.866,8.819,0.792,0.906,1.612,1.843,2.342,2.791a1,1,0,0,0,1.584,0c0.73-.948,1.55-1.885,2.342-2.791C17.637,15.958,20,13.255,20,10A8.009,8.009,0,0,0,12,2Zm0,11a3,3,0,1,1,3-3A3,3,0,0,1,12,13Z"></path>
        </svg>

        <p>No.25, Katubedda, Moratuwa.</p>
      </Typography>,
      <Typography
        as="a"
        href="#"
        className="flex gap-4 opacity-80 transition-opacity hover:opacity-100"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
        </svg>

        <p>011 5 288 888</p>
      </Typography>,
      <Typography
        as="a"
        href="#"
        className="flex gap-4 opacity-80 transition-opacity hover:opacity-100"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
          <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
        </svg>

        <p>myplantshop@gmail.com</p>
      </Typography>,
    ],
  },
];

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer
      className="relative w-full"
      style={{
        backgroundImage: `url(${footerBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "575px",
        marginBottom: "0px",
      }}
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 justify-between md:grid-cols-2">
          <Typography className="mb-6 mt-5">
            <img
              src={logo}
              alt="logo"
              className="mr-10 w-40 cursor-pointer"
              style={{ marginLeft: "-10px" }}
            />
            <div className="ml-0 mt-8 font-light">
              We help you find <br /> your dream plant
            </div>
            <div className="ml-0">
              <div
                className="flex gap-7 text-blue-gray-900 mt-8"
                style={{ marginLeft: "-10px" }}
              >
                <Typography
                  as="a"
                  href="#"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Typography>
                <Typography
                  as="a"
                  href="#"
                  className="opacity-80 transition-opacity hover:opacity-100"
                >
                  <svg
                    className="h-7 w-7"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M23.643 4.937c-.835.37-1.73.62-2.675.733a4.69 4.69 0 002.048-2.572 9.23 9.23 0 01-2.926 1.114 4.681 4.681 0 00-7.965 4.267 13.269 13.269 0 01-9.63-4.877 4.69 4.69 0 001.447 6.24 4.655 4.655 0 01-2.118-.583v.06a4.683 4.683 0 003.751 4.584 4.721 4.721 0 01-2.11.08 4.684 4.684 0 004.374 3.25 9.36 9.36 0 01-5.802 2.003c-.376 0-.746-.022-1.11-.065a13.173 13.173 0 007.157 2.096c8.587 0 13.287-7.117 13.287-13.287 0-.203-.004-.405-.014-.606a9.47 9.47 0 002.324-2.413z" />
                  </svg>
                </Typography>
              </div>
            </div>
          </Typography>
          <div
            className="grid grid-cols-2 justify-between mt-6"
            style={{ marginLeft: "-350px", marginRight: "500px" }}
          >
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography
                  variant="small"
                  color="#000000"
                  className="mb-3 font-semibold opacity-500"
                >
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      color="gray"
                      className="py-1.5 font-normal transition-colors hover:text-blue-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div
          className="flex w-full flex-col items-center justify-center border-t border-black py-4 md:flex-row md:justify-between"
          style={{ marginTop: "15px" }}
        >
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear} All Rights Reserved. Term of use Planty’x
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
