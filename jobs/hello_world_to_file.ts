(() => {

    const {parentPort, workerData} = require('worker_threads');
    const fs = require('fs');

    const logfile = parentPort ? workerData.logfile : './hello_world_2_not_a_worker.log';
    const logStream = fs.createWriteStream(logfile, {flags: 'a'});

    try {
        console.log('About to write to logfile');
        logStream.write('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA ' + new Date().toISOString() + '\n');
        logStream.write('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB ' + new Date().toISOString() + '\n');
        logStream.write('CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC ' + new Date().toISOString() + '\n');
    } catch (error) {
        console.error('Something wrong in the HelloWorld Job');
        console.error(error);
    } finally {
        logStream.close();
        if (parentPort) {
            parentPort.postMessage('done');
        }
    }
})();
