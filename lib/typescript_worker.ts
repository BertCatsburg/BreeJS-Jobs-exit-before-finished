export function typescript_worker() {
    const path = require('path');
    require('ts-node').register()
    require(path.resolve(__dirname, require('worker_threads').workerData.filename))
}
