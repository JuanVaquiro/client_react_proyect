const TODAY = new Date();

const NowDate = () => {     
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    options.timeZoneName = 'short';
    const nowDate = TODAY.toLocaleString('COL', options);
    return nowDate
}

const Hours = () => { 
    let hours = TODAY.toLocaleTimeString('es-CO');
    return hours
}

const Logo = () => '/src/assets/img/logo.png'

const ImgChampionship = () => '/src/assets/img/KarateTorneo.jpg'

const Title = 'Campeonato Ranking G1 Feria de las Flores 2022'

export { NowDate, Hours, ImgChampionship, Logo, Title}