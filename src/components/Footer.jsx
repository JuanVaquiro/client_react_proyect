import logo from '../assets/img/logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center'>
      <span className="text-black mt-4">
        Plataforma desarrollada por Leonardo Castro. Cel 3102777594
      </span>
      <img className='w-96' src={logo} />
    </footer>
  );
};

export default Footer;