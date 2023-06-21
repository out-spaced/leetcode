/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function(generator) {
    let cancelled = false;
    const cancelfn = () => {
        cancelled = true;
    }
    const promiseMaker = (prevValue, errorMsg = null) => {
        return new Promise((resolve, reject) => {
            
            if (cancelled) {
                resolve(generator.throw('Cancelled').value);
            }
            const next = errorMsg ? generator.throw(errorMsg) : generator.next(prevValue);
 
            if (!(next.value instanceof Promise)) {
                // problem said this would always be a promise...
                resolve(next.value);
                return;
            }
            next.value.then(
                val => (next.done ? resolve(val) : resolve(promiseMaker(val))), 
                error => (next.done ? resolve(next.value) : resolve(promiseMaker(next.value, error)))
            )
            .catch(error => {
                console.log('error:', error)
                reject(error);
            })
        })
    }
    
    return [cancelfn, promiseMaker()];
};

/**
 * function* tasks() {
 *   const val = yield new Promise(resolve => resolve(2 + 2));
 *   yield new Promise(resolve => setTimeout(resolve, 100));
 *   return val + 1;
 * }
 * const [cancel, promise] = cancellable(tasks());
 * setTimeout(cancel, 50);
 * promise.catch(console.log); // logs "Cancelled" at t=50ms
 */