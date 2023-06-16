function Search(event) {
  var searchText = document.getElementById("search-text").value;
  if (searchText != "") {
    if (
      searchText.toUpperCase().includes("NEWS") ||
      searchText.toUpperCase().includes("FEED")
    ) {
      window.location.hash = "NewsFeed";
    } else if (
      searchText.toUpperCase().includes("UPCOMING") ||
      searchText.toUpperCase().includes("EVENTS")
    ) {
      window.location.hash = "UpcomingEvents";
    } else if (searchText.toUpperCase().includes("JOB")) {
      window.location.hash = "Jobs";
    } else {
      alert("No Results Found");
    }
  }
}
