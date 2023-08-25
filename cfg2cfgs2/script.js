const uploadInput = document.getElementById('upload');
const inputTextarea = document.getElementById("inp");
const outputTextarea = document.getElementById("out");
const s2cfgst = "\"scheme\"\n{\n\t\"console\"\n\t{\n\t\t\"commands\"\n\t\t{\n"
const s2cfget = "\t\t}\n\t}\n}"

uploadInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
        if (selectedFile.name.endsWith('.cfg')) {
            let reader = new FileReader();
            reader.readAsText(selectedFile);
            reader.onload = readerEvent => {
                var content = readerEvent.target.result;
                inputTextarea.value = content;
            }
            console.log('File selected:', selectedFile.name);
        } else {
            alert('Invalid file type. Please select a ".cfg" file.');
        }
    }
}

function convert() {
    let cn = "";
    let array = inputTextarea.value.split("\n");
    array.forEach(element => {
        cn += "\t\t\t" + convertString(element) + "\n";
    });
    outputTextarea.value = s2cfgst + cn + s2cfget;
}

function convertString(input) {
    const lines = input.split('\n');
    const convertedLines = lines.map(line => {
      const parts = line.split(' ');
      const quotedParts = parts.map(part => {
        if (/^\w+$/.test(part)) {
          return `"${part}"`;
        } else {
          return part;
        }
      });
      return quotedParts.join(' ');
    });
  
    return convertedLines.join('\n');
  }