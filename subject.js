function toggleLecture(lectureNumber) {
    const lectureContent = document.getElementById(`lectureContent${lectureNumber}`);
    const playButton = document.getElementById(`playButton${lectureNumber}`);

    if (lectureContent.style.display === "none" || !lectureContent.style.display) {
        lectureContent.style.display = "block";
        playButton.style.display = "none"; // Hide play button when clicked
    } else {
        lectureContent.style.display = "none";
        playButton.style.display = "block"; // Show play button again
    }
}
