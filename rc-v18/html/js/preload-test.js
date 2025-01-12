console.log("Script execution starts");

        // Simulate a long task
        async function longTask() {
            const startTime = Date.now();
            while (Date.now() - startTime < 5000) { // Long task for 5 seconds
                // Simulate work
            }

            console.log("Script execution ends");

            // Render the remaining content after task is complete
            document.getElementById('after-script').style.display = 'none';
        }

        // Hide the content that should appear after script execution
        document.getElementById('after-script').style.display = 'none';

        // Start long task
        longTask();