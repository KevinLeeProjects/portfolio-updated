const getBackend = async(info: any, route: string) => {
    //const response = await fetch(`https://portfoliobackend20231021211206.azurewebsites.net/${route}`, {
    const response = await fetch(`https://localhost:7103/${route}`, {
    //const response = await fetch('http://192.168.1.179:7103/admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(info),
    });
    return response;
}

export default getBackend;