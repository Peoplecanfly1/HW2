const asyncBar = async () => 'Some String';

export default async function asyncBarFoo(){
    let result = await asyncBar()
    console.log(result)
}

// asyncBarFoo()