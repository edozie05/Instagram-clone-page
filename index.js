import { posts } from "./data.js";

const main = document.getElementById("main");

function getHtmlFeed() {
  let htmlString = ``;

  posts.forEach(function (post) {
    htmlString += `
    <section class="heading">
            <div class="flex ml">
              <img
                src="${post.avatar}"
                alt="a profile picture of van gogh"
                class="avatar"
              />
              <div class="post-acct">
                <h3 class="dark-text">${post.name}</h3>
                <h4>${post.location}</h4>
              </div>
            </div>
          </section>

          <section class="main-post">
            <img
              src="${post.post}"
              alt="an original Van gogh selfie"
            />
          </section>

          <section class="like-section">
            <div class="flex icons">
              <img src="images/icon-heart.png" alt="a heart shape" />
              <img
                src="images/icon-comment.png"
                alt="a shape representing comment"
              />
              <img src="images/icon-dm.png" alt="a shape representing dm" />
            </div>
            <h3 class="dark-text ml">${post.likes} likes</h3>
            <h3 class="ml comment">
              <span class="dark-text">${post.username}</span> ${post.comment}
            </h3>
          </section>
    `;
  });
  return htmlString;
}

function render() {
  const htmlTemplate = getHtmlFeed();

  main.innerHTML = htmlTemplate;
}

render();
