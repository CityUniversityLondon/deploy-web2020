import patterns from './component-list';

function tryCatch(f) {
    try {
        f();
    } catch (e) {
        if (console && console.error) {
            console.error(e);
        }
    }
}

function launchPattern(pattern) {
    if (typeof pattern === 'function') {
        tryCatch(pattern);
    } else if (pattern.className) {
        let { className, launch } = pattern;
        Array.from(document.getElementsByClassName(className))
            .filter(element => !element.className.indexOf(className + '-no-js'))
            .forEach(element => tryCatch(() => launch(element)));
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.info('DOMContentLoaded');
    Array.from(document.getElementsByTagName('html')).forEach(
        element => (element.className = 'js')
    );
    patterns.forEach(launchPattern);
});
