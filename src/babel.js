async function start() {
   return await Promise.resolve('async is working')
}

start().then(console.log)

const unused = 42
class Util {
    static id = Date.now()
}

console.log("Util id", Util.id)

async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});