export default function fileToBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result.split(",")[1]); // remove data:...;base64,
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
