window.onload = function () {
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const jsonData = {};
        formData.forEach((value, key) => {
          jsonData[key] = value;
        });

        fetch('https://script.google.com/macros/s/AKfycbz0ieAhPA1XZsH_Iu-pLTcV005Z859vVuR4vwkD2tpp-7MXQqeu04QZAwl89P7FpvM-/exec', { // ← 위에서 복사한 웹앱 URL
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => alert(data))
        .catch(error => alert('Error: ' + error));
    });
}