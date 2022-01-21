import './topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={'topbar ' + (menuOpen && 'active')}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            aurinko.
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <a href='https://wa.me/6282229334121?text=Hello%20Fajar!'>+62 822 933 4121</a>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <a href='#contact'>fajar.abdillahfn@gmail.com</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
