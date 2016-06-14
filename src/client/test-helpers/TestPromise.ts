export class TestPromise {
    value: any;
    pass: boolean;

    /**
     * @param {any} value The value to pass as the result/error
     * @param {boolean} pass Does the promise fail or succeed
     */
    constructor(value: any, pass: boolean = true) {
        this.value = value;
        this.pass = pass;
    }

    then(fn: (result?: any) => any) {
        if(this.pass)
            fn(this.value);
        return this;
    }

    catch(fn: (error?: any) => any) {
        if(!this.pass)
            fn(this.value);
        return this;
    }
}