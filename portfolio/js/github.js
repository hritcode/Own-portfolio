
/* ==========================================
   GITHUB.JS
========================================== */

const username = "YOUR_GITHUB_USERNAME";

const githubStats = document.getElementById("githubStats");

async function loadGitHubProfile() {

    try {

        /* Fetch Profile */
        const profileResponse = await fetch(
            `https://api.github.com/users/${username}`
        );

        if (!profileResponse.ok) {
            throw new Error("GitHub profile not found.");
        }

        const profile = await profileResponse.json();

        /* Fetch Repositories */
        const repoResponse = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
        );

        const repos = await repoResponse.json();

        let repoHTML = "";

        repos.forEach(repo => {

            repoHTML += `
                <div class="repo-card">
                    <h3>${repo.name}</h3>

                    <p>
                        ${repo.description || "No description available."}
                    </p>

                    <p>
                        ⭐ ${repo.stargazers_count}
                        &nbsp;&nbsp;
                        🍴 ${repo.forks_count}
                    </p>

                    <a href="${repo.html_url}"
                       target="_blank"
                       class="btn">
                        View Repository
                    </a>
                </div>
            `;

        });

        githubStats.innerHTML = `

            <div class="github-profile">

                <img
                    src="${profile.avatar_url}"
                    alt="${profile.login}"
                    class="github-avatar"
                >

                <h2>${profile.name || profile.login}</h2>

                <p>${profile.bio || ""}</p>

                <div class="github-info">

                    <div>
                        <strong>${profile.public_repos}</strong>
                        <br>
                        Repositories
                    </div>

                    <div>
                        <strong>${profile.followers}</strong>
                        <br>
                        Followers
                    </div>

                    <div>
                        <strong>${profile.following}</strong>
                        <br>
                        Following
                    </div>

                </div>

                <br>

                <a
                    href="${profile.html_url}"
                    target="_blank"
                    class="btn secondary"
                >
                    Visit GitHub Profile
                </a>

            </div>

            <br><br>

            <h2>Latest Repositories</h2>

            <div class="repo-grid">

                ${repoHTML}

            </div>

        `;

    }

    catch (error) {

        githubStats.innerHTML = `
            <p style="color:red;">
                Unable to load GitHub profile.
            </p>
        `;

        console.error(error);

    }

}

loadGitHubProfile();

