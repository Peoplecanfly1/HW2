let getPromise1 = async () => 2;
let getPromise2 = async () => 3;
let getPromise3 = async () => 7;

export default async function fooAsync() {
    const value1 = await getPromise1()
    const value2 = await getPromise2();
    const value3 = await getPromise3();

    console.log(value1 * (value2 + value3))
}

// fooAsync()