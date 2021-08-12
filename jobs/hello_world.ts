const {parentPort} = require('worker_threads');

(async () => {

    try {

        l('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        l('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
        l('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');


    } catch (error) {
        console.error('Something wrong in the HelloWorld Job');
        console.error(error);
    } finally {
        if (parentPort) {
            parentPort.postMessage('done');
        } else {
            process.exit(0);
        }
    }
})();

function l(message: string) {
    if (parentPort) {
        parentPort.postMessage(message);
    }
}
