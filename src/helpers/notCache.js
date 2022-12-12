
export const NotCache = (id) => {
    const now = new Date();
    let anchor = document.getElementById(id)
    let href_val = anchor.getAttribute('href')
    return href_val+"?ver="+now.getTime()
}


