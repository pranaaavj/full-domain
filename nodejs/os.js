import os from 'os';

console.log(os.platform());       // 'linux', 'darwin', 'win32'
console.log(os.cpus());           // CPU core details
console.log(os.totalmem());       // Total memory
console.log(os.freemem());        // Free memory
console.log(os.hostname());       // Hostname
console.log(os.uptime());         // System uptime (seconds)
