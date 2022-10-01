const TODAY = new Date();

const NowDate = () => {     
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZone = 'UTC';
    options.timeZoneName = 'short';
    const nowDate = TODAY.toLocaleString('COL', options);
    return nowDate
}

const Hours = () => { 
    let hours = TODAY.toLocaleTimeString('es-CO');
    return hours
}

const ImgChampionship= () => '/src/assets/img/logo.png'

const Logo = () => '/src/assets/img/KarateTorneo.jpg'


export { NowDate, Hours, ImgChampionship, Logo}