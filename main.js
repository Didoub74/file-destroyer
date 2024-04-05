document.getElementById('trashForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const fileName = document.getElementById('fileName').value;
  const fileSize = parseInt(document.getElementById('fileSize').value);
  generateTrashFile(fileName, fileSize);
});

function generateTrashFile(fileName, fileSize) {
  const bytes = new Uint8Array(fileSize * 1024);
  window.URL = window.URL || window.webkitURL;
  const blob = new Blob([bytes], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  document.getElementById('generatedFile').innerHTML = `Generated <strong>${fileName}</strong> (${fileSize} KB)`;
  link.click();
}
