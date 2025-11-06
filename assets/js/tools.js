function generateQR() {
    var text = document.getElementById('input').value;
    var container = document.getElementById('qrcode');
    if (!text) { container.innerHTML = ''; return; }
    if (container._qr) {
        container._qr.clear();
        container._qr.makeCode(text);
    } else {
        container._qr = new QRCode(container, {
            text: text,
            width: 256,
            height: 256,
            correctLevel: QRCode.CorrectLevel.M
        });
    }
}

function clearQR() {
    var container = document.getElementById('qrcode');
    if (container._qr && typeof container._qr.clear === 'function') {
        container._qr.clear();
    }
    container.innerHTML = '';
    container._qr = null;
}

function convertJSONYAML() {
    var input = document.getElementById('input').value.trim();
    var message = document.getElementById('message');
    
    if (!input) {
        message.innerText = 'Input is empty';
        message.style.color = 'red';
        return;
    }

    try {
        // Try to parse as JSON first
        try {
            var jsonObj = JSON.parse(input);
            // If successful, convert JSON to YAML
            var yaml = jsyaml.dump(jsonObj, { indent: 2 });
            document.getElementById('input').value = yaml;
            message.innerText = 'Converted JSON to YAML';
            message.style.color = 'green';
        } catch (jsonError) {
            // If JSON parsing fails, try to parse as YAML
            try {
                var yamlObj = jsyaml.load(input);
                // If successful, convert YAML to JSON
                var json = JSON.stringify(yamlObj, null, 2);
                document.getElementById('input').value = json;
                message.innerText = 'Converted YAML to JSON';
                message.style.color = 'green';
            } catch (yamlError) {
                message.innerText = 'Invalid JSON or YAML format';
                message.style.color = 'red';
            }
        }
    } catch (error) {
        message.innerText = 'Conversion error: ' + error.message;
        message.style.color = 'red';
    }
}

function convertCommaToNewline() {
    var input = document.getElementById('input').value;
    var message = document.getElementById('message');
    
    if (!input.trim()) {
        message.innerText = 'Input is empty';
        message.style.color = 'red';
        return;
    }

    try {
        // Split by comma and trim whitespace from each value
        var values = input.split(',').map(function(item) {
            return item.trim();
        });
        
        // Filter out empty values (optional, but cleaner)
        values = values.filter(function(item) {
            return item.length > 0;
        });
        
        // Join with newlines
        var result = values.join('\n');
        document.getElementById('input').value = result;
        
        message.innerText = 'Converted ' + values.length + ' comma-separated values to newlines';
        message.style.color = 'green';
    } catch (error) {
        message.innerText = 'Conversion error: ' + error.message;
        message.style.color = 'red';
    }
}

function sortList(order) {
    var input = document.getElementById('input').value;
    var message = document.getElementById('message');
    
    if (!input.trim()) {
        message.innerText = 'Input is empty';
        message.style.color = 'red';
        return;
    }

    try {
        // Split by newlines and filter out empty lines
        var lines = input.split('\n').filter(function(line) {
            return line.trim().length > 0;
        });
        
        if (lines.length === 0) {
            message.innerText = 'No lines to sort';
            message.style.color = 'red';
            return;
        }
        
        // Sort lines
        if (order === 'ascending') {
            lines.sort(function(a, b) {
                return a.localeCompare(b, undefined, { sensitivity: 'base', numeric: true });
            });
        } else {
            lines.sort(function(a, b) {
                return b.localeCompare(a, undefined, { sensitivity: 'base', numeric: true });
            });
        }
        
        // Join back with newlines
        var result = lines.join('\n');
        document.getElementById('input').value = result;
        
        message.innerText = 'Sorted ' + lines.length + ' lines in ' + order + ' order';
        message.style.color = 'green';
    } catch (error) {
        message.innerText = 'Sort error: ' + error.message;
        message.style.color = 'red';
    }
}

