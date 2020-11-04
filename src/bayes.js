const fs = require('fs');

function predict(trainPath, testPath) {
    const data = fs.readFileSync(trainPath, 'utf8');
    const test = fs.readFileSync(testPath, 'utf8');
    const test_rows = test.trim().split('\n').map((row) => row.split(' '));
    return test_rows.map((row) => _bayes(data, row));
}

function _bayes(data, test) {
    const rows = data.trim().split('\n');
    const all_classes = [];
    const attrs = [];
    rows.forEach((line) => {
        const items = line.split(' ');
        const clazz = items[items.length - 1];
        all_classes.push(clazz);
        for (let i = 0; i < items.length - 1; i++) {
            const attr = { v: items[i], c: clazz };
            if (!attrs[i]) attrs[i] = [];
            attrs[i].push(attr);
        }
    });
    const classes = [...new Set(all_classes)];
    const classes_count = [];
    classes.forEach((clazz) => classes_count.push(all_classes.filter(x => x == clazz).length));
    const p = classes_count.map((clazz) => clazz / all_classes.length);

    const attrs_p = [];
    for (let a_i = 0; a_i < test.length; a_i++) {
        const p = [];
        for (let c_i = 0; c_i < classes.length; c_i++) {
            const count = attrs[a_i].filter(att => att.v == test[a_i] && att.c == classes[c_i]).length;
            p.push(count / classes_count[c_i]);
        }
        attrs_p.push(p);
    }
    const test_p = classes.map(() => 1);
    attrs_p.forEach((attr_p) => {
        for (let c_i = 0; c_i < classes.length; c_i++) {
            test_p[c_i] = test_p[c_i] * attr_p[c_i];
        }
    });

    for (let c_i = 0; c_i < classes.length; c_i++) {
        p[c_i] = p[c_i] * test_p[c_i];
    }
    let res_i = p.indexOf(Math.max(...p));

    return classes[res_i];
}

exports.predict = predict;