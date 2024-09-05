const response = await fetch("api/podcasts.json");
const episodePodcasts = await response.json();

const getRandomEp = (arr) => {
  return arr.sort(() => Math.random() - 0.5).slice(0, 3);
};

function renderPodcasts(arrPodcasts) {
  let podcastsHTML = "";
  for (const podcast of arrPodcasts) {
    podcastsHTML += `
        <div class="about-podcasts__episode">
          <div class="about-podcasts__episode-info">
            <ul class="about-podcasts__episode-details">
              <li class="about-podcasts__episode-detail--date">
                <img
                  class="about-podcasts__episode-icon"
                  src="img/podcasts/picture-calendar-podcast.svg"
                  alt="Calendar"
                  width="17.5"
                  height="17.5"
                />
                <p class="about-podcasts__episode-date">
                  <span>${podcast.date}</span>
                </p>
              </li>
              <li class="about-podcasts__episode-detail--author">
                <img
                  class="about-podcasts__episode-icon"
                  src="img/podcasts/picture-headphones-podcast.svg"
                  alt="Headphones"
                  width="17.5"
                  height="17.5"
                />
                <p class="about-podcasts__episode-host">
                  <span>${podcast.guest}</span>
                </p>
              </li>
            </ul>
          </div>
          <div class="about-podcasts__episode-title">
            <p>
              <span
                ><span class="about-podcasts__episode-number-podcast"
                  >Podcast ${podcast.num}:</span
                >
                ${podcast.name}</span
              >
            </p>
          </div>
          <div class="about-podcasts__episode-description">
            <p>
              <span>
                ${podcast.description}
              </span>
            </p>
          </div>
          <div class="about-podcasts__episode-link">
            <a
              class="about-podcasts__episode-button"
              href="https://www.youtube.com/watch?v=b3rNUhDqciM"
            >
              <img
                class="about-podcasts__episode-play-icon"
                src="img/podcasts/picture-inverted-triangle-button.svg"
                alt="Play"
              />
              <span class="about-podcasts__episode-play-text"
                >Play Episode</span
              >
            </a>
          </div>
        </div>`;
  }
  document.querySelector(".about-podcasts__episodes").innerHTML = podcastsHTML;
}

renderPodcasts(getRandomEp(episodePodcasts));
