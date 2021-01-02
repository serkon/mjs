export class Filter {
    timeout;
    count = 0;
    add() {
        this.count++;
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(() => {
            console.log('timeout', this.count);
        }, 1000);
    }
}