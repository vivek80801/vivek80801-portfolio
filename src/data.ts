export interface IProject {
  id: number;
  name: string;
  imgs: string[];
  link: string;
  imgNum: number;
  githubLink: string;
}

export interface IHackthon {
  name: string;
  video: string;
  repo: string;
}

export const projects: IProject[] = [
  {
    id: 1,
    name: "student app",
    imgs: ["student-app-home", "student-app-student", "student-app-teacher"],
    link: "https://stundent-app.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/studentApp",
  },
  {
    id: 2,
    name: "cloth shop",
    imgs: [
      "cloth-shop-home",
      "cloth-shop-men",
      "cloth-shop-register",
      "cloth-shop-dashboard",
      "cloth-shop-cart-page",
      "cloth-shop-product-details",
      "cloth-shop-dashboard-admin",
      "cloth-shop-banned-user",
      "cloth-shop-edit-users",
      "cloth-shop-register",
    ],
    link: "https://vivek80801-cloth-shop.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/cloth-shop",
  },
  {
    id: 3,
    name: "food app",
    imgs: [
      "vishavkarma-foods-home",
      "vishawkarma-products",
      "vishawkarma-details",
      "vishawkarma-cart-page",
    ],
    link: "https://vishavkarma-foods.netlify.app/",
    imgNum: 0,
    githubLink: "https://github.com/vivek80801/my-ecommarce-pwa",
  },
];

export const myHackthons: IHackthon[] = [
  {
    name: "vegetable-app",
    video: "https://youtube.com/embed/PHg7sYH2H44",
    repo: "https://github.com/vivek80801/vegetable-app",
  },
  {
    name: "trivia-chat",
    video: "https://youtube.com/embed/CMQBaPQqC8U",
    repo: "https://github.com/AryamanSarraf/Trivial-Chat",
  },
];
