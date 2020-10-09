const delayedSuccess = () => {
    setTimeout(() => {
        let success = {'message':'delayed success!'}
        console.log(success);
    }, 500)
}

const delayedException = () => {
    setTimeout(() => {
        try{
            throw new Error('error: delayed exception!');
        } catch (e) {
            console.error(e);
        }

    }, 500)
}

delayedSuccess()
delayedException()

function resolvedPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        },500);
    })
}


let promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('Promise resolved')
    },500 );
})

async function rejectedPromise(){
    try{
        let result = await promise;
         
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}
        asyncFunc();


