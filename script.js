function convertToSeconds() {
            var hours = parseInt(document.getElementById('hours').value) || 0;
            var minutes = parseInt(document.getElementById('minutes').value) || 0;
            var seconds = parseInt(document.getElementById('seconds').value) || 0;

            var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

            document.getElementById('result').textContent = 'Total: ' + totalSeconds + ' seconds';
        }
