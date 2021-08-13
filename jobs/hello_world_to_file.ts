(async () => {
    const {parentPort, workerData} = require('worker_threads');
    const fs = require('fs');

    const logfile = workerData.logfile;
    const logStream = fs.createWriteStream(logfile, {flags: 'a'});

    try {
        logStream.write('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\n');
        logStream.write('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB\n');
        logStream.write('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC\n');
    } catch (error) {
        console.error('Something wrong in the HelloWorld Job');
        console.error(error);
    } finally {
        logStream.close();
        if (parentPort) {
            parentPort.postMessage('done');
        } else {
            process.exit(0);
        }
    }
})();
