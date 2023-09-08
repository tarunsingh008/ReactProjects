import logo from '../logo.svg';
import '../CSS/footer.css';
import propTypes from 'prop-types';

function Footer({ data }) {
  return (
    <div className="Footer">
      <div className="inner-footer-style">
        <div className="footer-content">
          {/* Uncomment the image tag if you want to use the logo */}
          {/* <img className="Footer-logo" src={logo} alt="logo" /> */}
          <p>Edit <code>src/App.js</code> and save to reload. Footer</p>
        </div>
        <div>
          {data}
          <a
            className='footer-links'
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  data: propTypes.string,
};

Footer.defaultProps = {
  data: "No footer props found",
};

export default Footer;
