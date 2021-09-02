const customerInformation = async () => {
    const res = {
        customerId: '1284562142',
        accountNumber: '22458515473',
        firstName: 'John',
        lastName: 'Doe',
    }

    let p = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(res);
        }, 3000);
    })

    let promised = await p;
    return promised;

}

export {customerInformation}