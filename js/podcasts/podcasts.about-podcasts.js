const episodePodcasts = [
  {
    id: 1,
    num: 66,
    name: "Hearts Entwined: Navigating Love's Symphony",
    description:
      "From heartwarming tales to expert insights, Hearts Entwined is your guide to the complexities of human connection. From heartwarming tales to expert insights, Hearts Entwined is your guide to the complexities of human connection.",
    date: "September 10, 2023",
    guest: "Harry Jones",
  },
  {
    id: 2,
    num: 23,
    name: "Mindful Tech Talk: Navigating the Digital Landscap",
    description:
      "Dive into the intersection of mindfulness and technology with Mindful Tech Talk. This podcast explores the evolving digital landscape, offering insights on tech trends, ethical considerations, and ways to foster a healthy relationship with the digital world.",
    date: "August 28, 2023",
    guest: "Erica Wilder",
  },
  {
    id: 3,
    num: 34,
    name: "Soulful Insights: Journeys through Psychology",
    description:
      "This podcast delves into the fascinating world of psychology, featuring discussions on mental wellness, human behavior, and personal growth. Explore the complexities of the psyche and gain valuable insights to enhance your emotional well-being.",
    date: "August 3, 2023",
    guest: "Amanda Poe",
  },
  {
    id: 4,
    num: 69,
    name: "Mindful Musings",
    description:
      "Whether you're curious about the mind or seeking practical advice, this podcast is your go-to source for navigating psychology's rich landscape.",
    date: "October 2, 2023",
    guest: "Harry Jones",
  },
  {
    id: 5,
    num: 75,
    name: "Artistry Unveiled",
    description:
      "We unravel the stories behind art masterpieces, delve into the creative process, and interview famous visionaries from various artistic realms.",
    date: "October 12, 2023",
    guest: "Amanda Poe",
  },
  {
    id: 6,
    num: 80,
    name: "Mind Matters",
    description:
      "Delve into conversations with experts, personal stories of resilience, and practical tips, and the best music for maintaining a healthy mind.",
    date: "October 23, 2023",
    guest: "Jessica Errington",
  },
  {
    id: 7,
    num: 89,
    name: "Sunrise Serenade",
    description:
      "We started the day with a blend of tranquil melodies and soothing vibes, carefully curated by our host, Harry Jones.",
    date: "November 10, 2023",
    guest: "Harry Jones",
  },
];

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
