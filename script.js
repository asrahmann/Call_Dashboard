$(document).ready(function () {
    const agentStatus = {
        'James': false,
        'Luis': false,
        'Jerry': false,
        'Chris': false,
        'Tim': false
    };

    // Simulate updating metrics (replace with actual API calls)
    setInterval(function () {
        // Update on-call status for each agent randomly
        for (const agent in agentStatus) {
            agentStatus[agent] = Math.random() < 0.5;
            updateAgentStatus(agent, agentStatus[agent]);
        }

        // Other simulated data (replace with actual API responses)
        const queueCount = Math.floor(Math.random() * 10);
        const activeCallCount = Math.floor(Math.random() * 5);
        const missedCallCount = Math.floor(Math.random() * 3);
        const callsTakenCount = Math.floor(Math.random() * 5);
        const maxTimeWaiting = Math.floor(Math.random() * 3);
        const abandonedCallCount = Math.floor(Math.random() * 5);
        const averageWaitCount = Math.floor(Math.random() * 2);

        // Update dashboard with other simulated data
        $('#queueCount').text(queueCount);
        $('#activeCallCount').text(activeCallCount);
        $('#missedCallCount').text(missedCallCount);
        $('#callsTakenCount').text(callsTakenCount);
        $('#maxTimeWaiting').text(maxTimeWaiting);
        $('#abandonedCallCount').text(abandonedCallCount);
        $('#averageWaitCount').text(averageWaitCount);

    }, 5000); // Update every 5 seconds (adjust as needed)

    // Function to update the agent status based on on-call status
    function updateAgentStatus(agentName, onCall) {
        const agentStatusElement = $(`#agentStatus_${agentName}`);

        if (onCall) {
            agentStatusElement.text('On call');
        } else {
            agentStatusElement.text('Not on call');
        }
    }
});
