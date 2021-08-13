// (async () => {
( () => {
    const {parentPort} = require('worker_threads');

    try {
        l('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        l('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB');
        l('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC');
    } catch (error) {
        console.error('Something wrong in the HelloWorld Job');
        console.error(error);
    } finally {
        // logStream.close();
        if (parentPort) {
            parentPort.postMessage('done');
        }
    }

    function l(message: string) {
        if (parentPort) {
            parentPort.postMessage(message);
        }
    }
})();
