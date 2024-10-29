
type CancelablePromise = Promise<any> & { cancel: any }

export function sleep(timeout: number): CancelablePromise {
    let res: (v: string) => void, timer: number;
    let promise = new Promise(resolve => {
        res = resolve
        timer = setTimeout(() => {
            resolve('done')
        }, timeout)
    }) as CancelablePromise
    promise.cancel = function (data: string) {
        res(data)
        clearTimeout(timer)
    };
    return promise
}
