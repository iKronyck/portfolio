import * as React from "react";

const Header: React.FC = () => {
  const [activeNav, setActiveNav] = React.useState(false);
  let activeClass = activeNav ? "active" : "";

  const handleNavToggle = () => setActiveNav(!activeNav);

  return (
    <>
      <header className="fixed w-screen my-5 header">
        <div className="grid grid-cols-2 mx-5">
          <div className="flex md:justify-center">
            <svg height="55" width="55" viewBox="0 0 100 100">
              <path
                d="M49.6296 0.213833C49.8588 0.0815126 50.1412 0.0815129 50.3704 0.213833L92.9309 24.7862C93.1601 24.9185 93.3013 25.163 93.3013 25.4277V74.5723C93.3013 74.837 93.1601 75.0815 92.9309 75.2138L50.3704 99.7862C50.1412 99.9185 49.8588 99.9185 49.6296 99.7862L7.0691 75.2138C6.83991 75.0815 6.69873 74.837 6.69873 74.5723V25.4277C6.69873 25.163 6.83991 24.9185 7.0691 24.7862L49.6296 0.213833Z"
                fill="#FDFDFD"
              />
              <path
                d="M49.6296 23.7324C49.8588 23.6 50.1412 23.6 50.3704 23.7324L72.5633 36.5454C72.7924 36.6777 72.9336 36.9223 72.9336 37.1869V62.8131C72.9336 63.0777 72.7924 63.3223 72.5633 63.4546L50.3704 76.2676C50.1412 76.4 49.8588 76.4 49.6296 76.2676L27.4367 63.4546C27.2075 63.3223 27.0664 63.0777 27.0664 62.8131V37.1869C27.0664 36.9223 27.2075 36.6777 27.4367 36.5454L49.6296 23.7324Z"
                fill="#FF3847"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M41.2963 87.1398C41.2963 87.4045 41.4375 87.649 41.6667 87.7813L49.6296 92.3788C49.8588 92.5111 50.1412 92.5111 50.3704 92.3788L62.8704 85.162L59.0741 82.9702C58.8449 82.8379 58.7037 82.5934 58.7037 82.3287V12.8602C58.7037 12.5955 58.5625 12.351 58.3333 12.2187L50.3704 7.62124C50.1412 7.48892 49.8588 7.48892 49.6296 7.62123L37.1296 14.838L40.9259 17.0298C41.1551 17.1621 41.2963 17.4066 41.2963 17.6713V87.1398ZM53.2075 48.5758C53.2075 48.3112 53.0663 48.0666 52.8371 47.9343L50.3704 46.5101C50.1412 46.3778 49.8588 46.3778 49.6296 46.5101L47.1629 47.9343C46.9337 48.0666 46.7925 48.3112 46.7925 48.5758V51.4242C46.7925 51.6888 46.9337 51.9334 47.1629 52.0657L49.6296 53.4899C49.8588 53.6222 50.1412 53.6222 50.3704 53.4899L52.8371 52.0657C53.0663 51.9334 53.2075 51.6888 53.2075 51.4242V48.5758Z"
                fill="#0E1A2A"
              />
            </svg>
          </div>
          <div className="flex col-start-3 md:col-start-2 md:justify-center">
            <a className={`header_hamburger ${ activeClass }`} onClick={handleNavToggle}>
							<svg className="hamburger" width="60" height="60" viewBox="0 0 100 100">
								<path className="hamburger_poly" d="M 50 0 L 94 25 V 75 L 50 100 L 6 75 V 25 Z" />
								<polyline className="hamburger_line hamburger_top" points="60,27 25,47 15,53 15,70 50,90 75,76 34,34" fill="none" />
								<line className="hamburger_line hamburger_mid" x1="32" y1="60" x2="68" y2="40" fill="none" />
								<polyline className="hamburger_line hamburger_bot" points="40,73 75,53 85,47 85,30 50,10 15,30 15,70 24,75 64,36" fill="none" />
							</svg>
						</a>
          </div>
        </div>
      </header>
      <nav className={`nav ${activeClass} bg-secondary`}>
        <ul className="nav_list fx ac jc listReset">
          <li className="nav_item">
            <a className="nav_link" href="#about">
              About
            </a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#work">My Work</a>
          </li>
          <li className="nav_item">
            <a className="nav_link" href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
