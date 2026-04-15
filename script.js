const siteProfile = {
  name: "碰个橙子",
  githubUsername: "jolene718",
  profilePoints: [
    {
      title: "项目入口",
      text: "集中展示 GitHub 上已经公开的项目，让别人先看到你真实做过什么，再决定要不要继续了解你。",
    },
    {
      title: "内容入口",
      text: "把专业向小红书、公众号“碰个橙子”和未来独立博客里的长文汇成同一个长期写作空间。",
    },
    {
      title: "个人入口",
      text: "把美食博主、算法与产品写作者、做项目的人这些身份自然并排，而不是生硬地塞进简历附件里。",
    },
  ],
  skills: [
    "算法思维",
    "产品观察",
    "结构化表达",
    "项目展示",
    "内容策划",
    "个人品牌",
    "长文写作",
    "信息整合",
  ],
  hobbies: [
    "美食记录",
    "长文写作",
    "城市漫游",
    "生活观察",
    "慢慢生长",
    "把感受讲清楚",
    "收集灵光",
    "认真吃饭",
  ],
  timeline: [
    {
      period: "现在",
      title: "先把已经分散的平台内容收拢起来",
      text: "GitHub、小红书、公众号都已经有东西了，现在更重要的是给它们一个统一入口，而不是再新开一个空壳网站。",
    },
    {
      period: "近期",
      title: "让项目和写作都变得更可读",
      text: "项目不只是仓库链接，写作也不只是平台更新。它们都值得被重新整理成更容易被理解、更像作品集的表达。",
    },
    {
      period: "长期",
      title: "把不同身份变成同一个人的完整轮廓",
      text: "美食、项目、算法、产品、长思文章并不是彼此冲突的标签。它们最后会共同构成你被别人记住的方式。",
    },
  ],
  essayCards: [
    {
      label: "代表内容 01",
      title: "从产品视角拆透 SBTI：靠“反产品逻辑”火遍全网的情绪社交爆款",
      excerpt:
        "这是很典型的“你会写的内容”类型：不是只说一个东西火了，而是继续追问它为什么成立、它抓住了什么情绪、背后是什么产品机制。",
      meta: "专业号内容方向：产品判断",
    },
    {
      label: "代表内容 02",
      title: "AI 会产生意识吗？我问了 6 个 chatbot，答案很冰冷",
      excerpt:
        "这一类文章会让人立刻知道你不是在堆热词，而是真的会把一个大家都在谈的话题重新拆开、实验、比较，然后写出自己的判断。",
      meta: "专业号内容方向：技术观察",
    },
    {
      label: "代表内容 03",
      title: "养咔热潮下的魔幻世界：动辄千元的 OpenClaw 上门安装服务",
      excerpt:
        "这类题目很能说明你的写作气质：你会去看一个具体、热闹、甚至有点荒诞的现象，然后把它写成兼具观察与判断的文章。",
      meta: "专业号内容方向：现象观察",
    },
  ],
  projectNotes: [
    {
      title: "把项目写成一个完整故事",
      text: "网站里放 GitHub 项目时，最重要的不只是仓库名，而是这个项目为什么存在、你做了什么、它说明了你怎样的能力。",
    },
    {
      title: "给每个重要项目都配一份能看懂的材料",
      text: "如果是网页项目，放页面截图；如果是算法或数据项目，放流程图、实验结果、指标变化或一张总结图。这样即使不看代码，也能快速理解项目价值。",
    },
    {
      title: "把 GitHub 链接变成真正的作品集入口",
      text: "以后你完全可以继续补 demo、release、复盘文章或者问题总结。这样别人点进项目时，看到的是完整作品，而不是孤零零一个仓库。",
    },
  ],
  moments: [
    {
      label: "生活切片 01",
      prompt: "我很喜欢那种并不需要被包装得很“精致”的记录：比如随手拍下的一顿饭、路上遇见的小物件，或者一句当时觉得应该记下来的感受。",
    },
    {
      label: "生活切片 02",
      prompt: "如果专业号是在认真拆问题，美食号更像是在认真过生活。一个写判断，一个写体感，但它们最后其实都来自同一个人。",
    },
    {
      label: "生活切片 03",
      prompt: "我希望这个网站最后留下来的，不只是成果和链接，还有那些会让别人觉得“这个人还挺具体”的小细节。",
    },
  ],
  links: [
    {
      label: "专业向小红书",
      href: "https://www.xiaohongshu.com/user/profile/62f84b60000000001f01694b",
    },
    {
      label: "美食向小红书",
      href: "https://www.xiaohongshu.com/user/profile/5fee9aef000000000100b959?xsec_token=ABZ7ILC-h9NwQg339m6QXH3gEv5YMyqyJFu3n6-Q0P2WA=&xsec_source=pc_feed",
    },
  ],
};

function renderProfilePoints() {
  const target = document.querySelector("#profile-points");
  target.innerHTML = siteProfile.profilePoints
    .map(
      (item) => `
        <article class="point-card">
          <p class="point-title">${item.title}</p>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderTags(targetId, values) {
  const target = document.querySelector(targetId);
  target.innerHTML = values
    .map((value) => `<span class="tag">${value}</span>`)
    .join("");
}

function renderTimeline() {
  const target = document.querySelector("#timeline-list");
  target.innerHTML = siteProfile.timeline
    .map(
      (item) => `
        <article class="timeline-item">
          <p class="timeline-period">${item.period}</p>
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderEssayCards() {
  const target = document.querySelector("#essay-grid");
  target.innerHTML = siteProfile.essayCards
    .map(
      (item) => `
        <article class="essay-card">
          <p class="section-kicker">${item.label}</p>
          <h3>${item.title}</h3>
          <p>${item.excerpt}</p>
          <p class="essay-meta">${item.meta}</p>
        </article>
      `,
    )
    .join("");
}

function renderProjectNotes() {
  const target = document.querySelector("#project-note-grid");
  target.innerHTML = siteProfile.projectNotes
    .map(
      (item) => `
        <article class="note-card">
          <h3>${item.title}</h3>
          <p>${item.text}</p>
        </article>
      `,
    )
    .join("");
}

function renderMoments() {
  const target = document.querySelector("#moment-grid");
  target.innerHTML = siteProfile.moments
    .map(
      (item) => `
        <article class="moment-card">
          <p class="section-kicker">${item.label}</p>
          <p>${item.prompt}</p>
        </article>
      `,
    )
    .join("");
}

function renderContactLinks() {
  const target = document.querySelector("#contact-actions");
  const extraLinks = siteProfile.links
    .map(
      (link) => `
        <a class="button button-secondary" href="${link.href}" target="_blank" rel="noreferrer">
          ${link.label}
        </a>
      `,
    )
    .join("");
  target.insertAdjacentHTML("beforeend", extraLinks);
}

function formatUpdatedAt(isoString) {
  const formatter = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return formatter.format(new Date(isoString));
}

function projectCard(repo) {
  const description =
    repo.description ||
    "这个仓库还没有补充简介，但它依然是我持续探索与练习的一部分。";
  const language = repo.language || "多技术栈";
  const stars = repo.stargazers_count || 0;
  return `
    <article class="project-card">
      <div>
        <p class="section-kicker">GitHub Project</p>
        <h3>${repo.name}</h3>
      </div>
      <p>${description}</p>
      <div class="project-meta">
        <span>${language}</span>
        <span>★ ${stars}</span>
        <span>更新于 ${formatUpdatedAt(repo.updated_at)}</span>
      </div>
      <div class="project-aside">
        <p class="placeholder-tag">可补内容</p>
        <p>[项目截图 / 结果图 / 一句话总结 / demo / release]</p>
      </div>
      <a class="text-link" href="${repo.html_url}" target="_blank" rel="noreferrer">
        查看仓库
      </a>
    </article>
  `;
}

async function loadProjects() {
  const grid = document.querySelector("#project-grid");
  const endpoint = `https://api.github.com/users/${siteProfile.githubUsername}/repos?sort=updated&per_page=100`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    const selected = repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => {
        if (b.stargazers_count !== a.stargazers_count) {
          return b.stargazers_count - a.stargazers_count;
        }
        return new Date(b.updated_at) - new Date(a.updated_at);
      })
      .slice(0, 6);

    if (!selected.length) {
      throw new Error("No visible repositories");
    }

    grid.innerHTML = selected.map(projectCard).join("");
  } catch (error) {
    grid.innerHTML = `
      <article class="project-placeholder">
        <p>项目暂时没有自动加载成功。</p>
        <p>不过没关系，仓库入口依然在，后续也能改成手动维护的项目卡片。</p>
        <a class="text-link" href="https://github.com/${siteProfile.githubUsername}" target="_blank" rel="noreferrer">
          直接去 GitHub 查看全部项目
        </a>
      </article>
    `;
    console.error(error);
  }
}

function setupScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 },
  );

  document
    .querySelectorAll(
      ".section, .identity-card, .intro-block, .writing-link, .project-grid, .essay-card, .moment-card, .timeline-item, .note-card",
    )
    .forEach((node) => {
      node.style.opacity = "0";
      node.style.transform = "translateY(28px)";
      observer.observe(node);
    });
}

function init() {
  document.title = `${siteProfile.name} | 个人主页`;
  renderProfilePoints();
  renderTags("#skill-tags", siteProfile.skills);
  renderTags("#hobby-tags", siteProfile.hobbies);
  renderTimeline();
  renderEssayCards();
  renderProjectNotes();
  renderMoments();
  renderContactLinks();
  loadProjects();
  setupScrollReveal();
}

init();
