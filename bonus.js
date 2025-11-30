/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

function createCounter(init)
{
    return ({
        init: init,
        current: init,
        increment: function () { return ++this.current; },
        decrement: function () { return --this.current; },
        reset: function () { return this.current = init; }
    });
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */