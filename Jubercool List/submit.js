// Sample leaderboard data
var leaderboardData = [
    { level: "Robtopping", verifiedBy: " SirBradinator", date: "2024-02-10", madeBy: "Jubercool", image: "robtopping.jpg" },
    { level: "Digital Oblivion", verifiedBy: " Jubercool", date: "2022-06-04", madeBy: "Jubercool", image: "digital_oblivion.jpg" }
];

// Function to display leaderboard
function displayLeaderboard() {
    var leaderboardList = document.getElementById("leaderboardList");
    leaderboardList.innerHTML = ""; // Clear existing entries
    leaderboardData.forEach(function(entry) {
        var listItem = document.createElement("li");
        listItem.className = "levelEntry";
        
        var img = document.createElement("img");
        img.src = entry.image;
        img.alt = entry.level;
        
        var infoSpan = document.createElement("span");
        infoSpan.textContent = "Verified by: " + entry.verifiedBy + ", Date: " + entry.date + ", Made by: " + entry.madeBy;
        
        listItem.appendChild(img);
        listItem.appendChild(infoSpan);
        leaderboardList.appendChild(listItem);
    });
}

// Display leaderboard when the page loads
window.onload = displayLeaderboard;
