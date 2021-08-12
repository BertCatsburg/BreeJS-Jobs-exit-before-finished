const {workerData, parentPort} = require('worker_threads');

(async () => {

    try {

        console.log('Hello World to ' + workerData.name);

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
