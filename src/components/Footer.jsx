import logo from '../multimedia/logo.png'

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center mt-24'>
      <span className="text-black mt-4 text-center p-2">
        Plataforma desarrollada por Leonardo Castro. Cel 3102777594
      </span>
      <img className='w-96' src={logo} />
    </footer>
  );
};

export default Footer;