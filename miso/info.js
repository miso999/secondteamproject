const linkArr = [
  {
    link: "https://www.hyundai.com/kr/ko/info/ideology",
  },
  {
    link: "https://www.hyundai.com/kr/ko/info/history/2030-2021/history-2024",
  },
  {
    link: "https://www.hyundai.com/kr/ko/info/main-relation",
  },
  {
    link: "https://www.hyundai.com/kr/ko/info/ci",
  },
  {
    link: "https://www.hyundai.com/kr/ko/info/awards/2030-2021/awards-2024",
  },
  {
    link: "https://talent.hyundai.com/main/main.hc",
  },
  {
    link: "https://www.hyundai.com/worldwide/ko/company/ir",
  },
  {
    link: "https://dividend.hyundai.com/main.do",
  },
  {
    link: "https://www.hyundai.com/kr/ko/sustain-manage/manage-system/sustainability-report",
  },
  {
    link: "https://www.hyundai.com/kr/ko/sustain-manage/social-contribution/csv-system",
  },
  {
    link: "https://www.hyundai.com/kr/ko/sustain-manage/manage-report",
  },
  {
    link: "https://www.hyundai.com/kr/ko/sustain-manage/social-report",
  },
];

document.querySelectorAll(".goLinkButton").forEach((v, i) => {
  v.addEventListener("click", () => {
    window.location.href = linkArr[i].link;
  });
});
